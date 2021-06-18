import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { postTrack } from "../../services/tracks";

const NewTrackForm = () => {
  
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const history = useHistory();

  const onPost = async (e) => {
    e.preventDefault();
    const track = await postTrack(name, url);
    if (!track.errors) {
      history.push('/tracks')
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
        <label htmlFor="url">Track Url</label>
        <input
          name="track_url"
          placeholder="Track Url"
          value={url}
          onChange={updateUrl}
        />
        <button type="submit">Create New Track</button>
      </div>
    </form>
  );
};

export default NewTrackForm;
