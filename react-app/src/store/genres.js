const SET_ALL_GENRES = "genres/SET_ALL_GENRES";
const SET_GENRE_TRACKS = "genres/SET_GENRE_TRACKS";

const setAllGenres = (genres) => ({
    type: SET_ALL_GENRES,
    payload: genres
});

export const loadAllGenres = () => async (dispatch) => {
    const response = await fetch('/api/genres');
    if (response.ok) {
        const data = await response.json();
        dispatch(setAllGenres(data))
    }
}

export const loadGenreTracks = async (dispatch) => {

} 

const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_GENRES:
            return action.payload;
        default:
            return state;
    }
}