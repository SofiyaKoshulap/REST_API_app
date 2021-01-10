import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';
import postReducer from './postReducer';
import commentsReducer from './commentsReducer';


export default combineReducers({
    users: usersReducer,
    posts: postsReducer,
    post: postReducer,
    comments: commentsReducer,
});