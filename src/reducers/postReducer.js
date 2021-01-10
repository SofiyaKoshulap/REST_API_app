const postReducer = (state = {}, action) => {
    switch (action.type) {
        case "LIST_POST":
            return { ...state, post: action.payload };
        default:
            return state;
    }
}

export default postReducer;