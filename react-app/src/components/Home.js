import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadAllGenres } from "../store/genres";

function Home() {
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    useEffect(() => {
        if (genres.length) return; 
        (async () => {
            await dispatch(loadAllGenres());
        })();
    }, []);

    return (
        <div>
            <h1>Welcome to your homepage!</h1>
            <NavLink to="/tracks">Tracks</NavLink> <br/>
            <NavLink to="/tracks/new">Add a New Track</NavLink>
        </div>
    )
}

export default Home;