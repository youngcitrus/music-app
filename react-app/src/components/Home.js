import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadAllGenres } from "../store/genres";

function Home() {
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    useEffect(() => {
        // if (Object.keys(genres).length) return; 
        (async () => {
            await dispatch(loadAllGenres());
        })();
    }, []);

    return (
        <div>
            <h1>Welcome to your homepage!</h1>
            <NavLink to="/tracks">Tracks</NavLink> <br/>
            <NavLink to="/tracks/new">Add a New Track</NavLink><br/>
            <br />
            <h2>Explore tracks by genre!</h2>
            {Object.values(genres).map(genre => {
                return (
                    <div key={genre.id}>
                        <NavLink to={`/genres/${genre.id}`}>{genre.name}</NavLink>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;