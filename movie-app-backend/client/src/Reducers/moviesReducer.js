const moviesReducer = (state={movies: []}, action) => {
    switch (action.type) {
        case "ADDING_MOVIES":
            return {
                ...state,
                movies: [...action.movies]
            }

        default:
            return state
    }
}

export default moviesReducer;