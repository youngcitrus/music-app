import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadTrack } from "../../store/tracks";
import Track from "./Track";

function TrackShow() { 
    // Notice we use useParams here instead of getting the params
    // From props. USE props instead
    const { trackId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const track = useSelector(state => state.tracks[trackId])
    
    //refactor this useEffect with loadTrack!!

    useEffect(() => {
        dispatch(loadTrack(trackId, history));
    }, [trackId]);

    if (!track) {
        return null;
    }

    return (
            <Track track={track}/>
    );
}
export default TrackShow;
