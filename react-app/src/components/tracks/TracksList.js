import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Track from "./Track";
import { loadAllTracks } from "../../store/tracks";

function TracksList() {
    const dispatch = useDispatch();
    const tracks = useSelector(state => state.tracks);

    useEffect(() => {
        async function fetchData() {
            await dispatch(loadAllTracks());
        }
        fetchData();
    }, []);

    const trackComponents = Object.values(tracks).map((track) => {
        return (
            <Track key={track.id} track={track} />
        );
    });

    return (
        <>
            <h1>Tracks List: </h1>
            <ul>{trackComponents}</ul>
        </>
    );
}

export default TracksList;
