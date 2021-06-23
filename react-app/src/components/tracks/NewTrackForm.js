import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postTrack } from "../../services/tracks";
import { loadAllGenres } from "../../store/genres";

const NewTrackForm = () => {
  
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [genreId, setGenreId] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(loadAllGenres());
    })();
  }, []);

  const genres = useSelector(state => state.genres);

  const onPost = async (e) => {
    e.preventDefault();
    const track = await postTrack(name, url, genreId);
    if (!track.errors) {
      history.push(`/tracks/${track.id}`)
    } else {
      setErrors(track.errors);
    }
  }

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateUrl = (e) => {
    setUrl(e.target.value);
  };

  const updateGenre = (e) => {
    setGenreId(e.target.value);
  };

  let genreOptions = null;
  if (genres.all_genres) {
    genreOptions = genres.all_genres.map((genre) => {
      return (
        <option key={genre.id} value={genre.id}> {genre.name} </option>
      )
    });
    
  }

  return (
    <form onSubmit={onPost}>
      <div>
        {errors.map((error,i) => (
          <div key={i}>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="track_name">Track Name</label>
        <input
          name="track_name"
          type="text"
          placeholder="Track Name"
          value={name}
          onChange={updateName}
        />
      </div>
      <div>
        <label htmlFor="track_url">Track Url</label>
        <input
          name="track_url"
          placeholder="Track Url"
          value={url}
          onChange={updateUrl}
        />
      </div>
      <div>
        <label htmlFor="genre_id">Genre</label>
        <select
          name="genre_id"
          value={genreId}
          onChange={updateGenre}
        >
          {genreOptions}
        </select>
        <button type="submit">Create New Track</button>
      </div>
    </form>
  );
};

export default NewTrackForm;
