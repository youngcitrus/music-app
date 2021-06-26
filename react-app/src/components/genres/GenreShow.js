import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Track from "../tracks/Track";
import { loadGenreTracks } from "../../store/genres";

function GenreShow() {
    // Notice we use useParams here instead of getting the params
    // From props. USE props instead
    const { genreId } = useParams();
    const dispatch = useDispatch();
    const genre = useSelector(state => state.genres[genreId]);

    useEffect(() => {
        (async () => {
            await dispatch(loadGenreTracks(genreId));
        })();
    }, [genreId]);
    
    if (!genre || !genre.tracks) return null;

    return (
        <div>
            {console.log("GENRE", genre)}
            {genre.tracks.map(track=> {
                return (
                    <h1>{track.name}</h1>
                )
            })}
        </div>
    );
}
export default GenreShow;
