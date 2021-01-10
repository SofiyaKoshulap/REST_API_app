const commentsReducer = (state = {}, action) => {
    switch (action.type) {
        case "LIST_COMMENTS":
            return { ...state, comments: action.payload };
        default:
            return state;
    }
}

export default commentsReducer;