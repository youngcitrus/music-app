import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function TracksList() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/tracks");
            const responseData = await response.json();
            setTracks(responseData.tracks);
        }
        fetchData();
    }, []);

    const trackComponents = tracks.map((track) => {
        return (
            <li key={track.id}>
                <div>Track Name: {track.name}</div>
                <div>Track URL: {track.url}</div>
            </li>
        );
    });

    return (
        <>
            <h1>Track List: </h1>
            <ul>{trackComponents}</ul>
        </>
    );
}

export default TracksList;
