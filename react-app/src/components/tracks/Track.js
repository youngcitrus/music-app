import React, { useState, useEffect } from "react";
import ReactAudioPlayer from 'react-audio-player';

function Track( {track} ){
    return (
        <div>

            <h2> { track.artist } </h2>
            <h3> { track.name } </h3>
            <audio
                src={track.url}
                controls
            />
        </div>
    )
}

export default Track;