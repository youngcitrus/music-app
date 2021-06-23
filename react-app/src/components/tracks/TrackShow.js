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
            const response = await fetch(`/api/tracks/${trackId}`);
            const track = await response.json();
            console.log("TRACK", track)
            setTrack(track);
        })();
    }, [trackId]);

    if (!track) {
        return null;
    }

    return (
        <ul>
            <li>
                <strong>Track Id</strong> {track.id}
            </li>
            <li>
                <strong>Track Name</strong> {track.name}
            </li>
            <li>
                <strong>Track Url</strong> {track.url}
            </li>
        </ul>
    );
}
export default TrackShow;
