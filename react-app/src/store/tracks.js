const SET_ALL_TRACKS = "tracks/SET_ALL_TRACKS";
const SET_USER_TRACKS = "tracks/SET_USER_TRACKS";
const SET_GENRE_TRACKS = "tracks/SET_GENRE_TRACKS";
const SET_TRACK = "tracks/SET_TRACK";

const setAllTracks = (tracks) => ({
    type: SET_ALL_TRACKS,
    payload: tracks
});

const setUserTracks = (tracks) => ({
    type: SET_USER_TRACKS,
    payload: tracks
});

const setTrack = (track) => ({
    type: SET_TRACK,
    payload: track
});

export const loadAllTracks = () => async (dispatch) => {
    const response = await fetch('/api/tracks');
    if (response.ok) {
        const data = await response.json();
        dispatch(setAllTracks(data));
        return data;
    }
}

export const loadTrack = (trackId, history) => async (dispatch) => {
    const response = await fetch(`/api/tracks/${trackId}`);
    const data = await response.json();
    if (!data.errors) {
        dispatch(setTrack(data));
        return data        
    } else {
        history.push('/tracks');
    }
}

const initialState = {}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_TRACKS:
            return action.payload
        case SET_USER_TRACKS:
            return action.payload
        case SET_GENRE_TRACKS:
            return action.payload
        case SET_TRACK:
            let newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return state;
    }
}