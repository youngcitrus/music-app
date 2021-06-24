import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Track from "../tracks/Track";

function GenreShow() {
    const [genre, setGenre] = useState({});
    // Notice we use useParams here instead of getting the params
    // From props. USE props instead
    const { genreId } = useParams();

    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/genres/${genreId}`);
            const genre = await response.json();
            console.log("Genre", genre)
            setGenre(genre);
        })();
    }, [genreId]);

    if (!genre) {
        return null;
    }

    return (
        <h1>Track here</h1>
    );
}
export default GenreShow;
