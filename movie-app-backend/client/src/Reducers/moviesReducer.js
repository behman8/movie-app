const moviesReducer = (state={movies: []}, action) => {
    switch (action.type) {
        case "ADDING_MOVIES":
            return {
                ...state,
                cards: action.cards
            }

        default:
            return state
    }
}

export default moviesReducer;