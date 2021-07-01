import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Track( {track} ){
    return (
        <div>

            <NavLink to={`/users/${track.artist_id}`}>{ track.artist } </NavLink><br/>
            <NavLink to={`/tracks/${track.id}`}> { track.name } </NavLink><br/>
            <audio
                src={track.url}
                controls
            />
        </div>
    )
}

export default Track;