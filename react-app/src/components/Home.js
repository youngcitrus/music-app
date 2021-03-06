import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
    const genres = useSelector(state => state.genres);

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