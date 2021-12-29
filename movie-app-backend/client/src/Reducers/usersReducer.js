const usersReducer = () => {
    switch (action.type) {
        case "ADDING_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default usersReducer;