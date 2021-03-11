import { 
    ADD_MOVIE, 
    DELETE_MOVIE, 
    EDITING_MOVIE,
    SELECT_MOVIE,
    UPDATE_MOVIE,
    SEARCH_MOVIE,
    SEARCHING_MOVIE
} from './movie.types';

export const addMovie = (payload) => {
    return {
        type: ADD_MOVIE,
        payload
    }
}

export const deleteMovie = (payload) => {
    return {
        type: DELETE_MOVIE,
        payload
    }
}

export const editingMovie = (payload) => {
    return {
        type: EDITING_MOVIE,
        payload
    }
}

export const selectMovie = (payload) => {
    return {
        type: SELECT_MOVIE,
        payload
    }
}

export const updateMovie = (payload) => {
    return {
        type: UPDATE_MOVIE,
        payload
    }
}

export const searchMovie = (payload) => {
    return {
        type: SEARCH_MOVIE,
        payload
    }
}

export const searchingMovie = (payload) => {
    return {
        type: SEARCHING_MOVIE,
        payload
    }
}