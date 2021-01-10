const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case "LIST_POSTS":
            return { ...state, posts: action.payload };
        case "DELETE_POST":
            const posts = state.posts.filter((post) => post.id !== action.payload)
            return { ...state, posts };
        case "ADD_POST":
            const post = state.posts.concat(action.payload);
            return {...state, posts};
        case 'UPDATE_CONTACT':
           
            const postUpdate = state.posts.map(post => post.id === action.payload.id ? post=action.payload : post)
            return {...state, postUpdate};
        default:
            return state;
    }
}

export default postsReducer;