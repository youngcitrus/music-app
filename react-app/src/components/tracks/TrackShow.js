import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Track from "./Track";

function TrackShow() {
    const [track, setTrack] = useState({});
    // Notice we use useParams here instead of getting the params
    // From props. USE props instead
    const { trackId } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/tracks/${trackId}`);
            const track = await response.json();
            if (track.errors) {
                history.push('/tracks')
                return;
            }
            setTrack(track);
        })();
    }, [trackId]);

    if (!track) {
        return null;
    }

    return (
            <Track track={track}/>
    );
}
export default TrackShow;
