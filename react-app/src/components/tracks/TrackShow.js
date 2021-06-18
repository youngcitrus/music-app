import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TrackShow() {
    const [track, setTrack] = useState({});
    // Notice we use useParams here instead of getting the params
    // From props. USE props instead
    const { trackId } = useParams();

    useEffect(() => {
        if (!trackId) {
            return
        }
        (async () => {
            const response = await fetch(`/api/tracks/${userId}`);
            const track = await response.json();
            setTrack(track);
        })();
    }, [trackId]);

    if (!track) {
        return null;
    }

    return (
        <ul>
            <li>
                <strong>Track Id</strong> {trackId}
            </li>
            <li>
                <strong>Track Name</strong> {track.track_name}
            </li>
            <li>
                <strong>Track Url</strong> {track.track_url}
            </li>
        </ul>
    );
}
export default TrackShow;
