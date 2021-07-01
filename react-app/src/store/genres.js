const SET_ALL_GENRES = "genres/SET_ALL_GENRES";
const SET_GENRE_TRACKS = "genres/SET_GENRE_TRACKS";

const setAllGenres = (genres) => ({
    type: SET_ALL_GENRES,
    payload: genres
});

const setGenreTracks = (genre) => ({
    type: SET_GENRE_TRACKS,
    payload: genre
});

export const loadAllGenres = () => async (dispatch) => {
    const response = await fetch('/api/genres');
    if (response.ok) {
        const data = await response.json();
        dispatch(setAllGenres(data))
    }
}

export const loadGenreTracks = (genreId) => async (dispatch) => {
    const response = await fetch(`/api/genres/${genreId}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(setGenreTracks(data))
    }
}


const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_GENRES:
            return action.payload;
        case SET_GENRE_TRACKS:
            const newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return state;
    }
}