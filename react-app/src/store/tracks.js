const SET_ALL_TRACKS = "tracks/SET_ALL_TRACKS";
const SET_USER_TRACKS = "tracks/SET_USER_TRACKS";
const SET_GENRE_TRACKS = "tracks/SET_GENRE_TRACKS";
const ADD_TRACK = "tracks/ADD_TRACK";

const setAllTracks = (tracks) => ({
    type: SET_ALL_TRACKS,
    payload: tracks
});

const setUserTracks = (tracks) => ({
    type: SET_USER_TRACKS,
    payload: tracks
});

const setGenreTracks = (tracks) => ({
    type: SET_GENRE_TRACKS,
    payload: tracks
});

const addTrack = (track) => ({
    type: ADD_TRACK,
    payload: track
});

export const postTrack = (track_name, track_url) => async (dispatch) => {
    const response = await fetch('/api/tracks/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            track_name,
            track_url,
            genre_id: 17
        })
    });
    return await response.json();
}

const initialState = {}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_TRACKS:
            return { tracks: action.payload }
        case SET_USER_TRACKS:
            return { tracks: action.payload }
        case SET_GENRE_TRACKS:
            return { tracks: action.payload }
        case ADD_TRACK:
            let newState = Object.assign({}, state);
            newState[tracks].push(action.payload);
            return newState;
        default:
            return state;

    }
}