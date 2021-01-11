import axios from 'axios';

export const getPosts = (id) => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + id)
            .then(response => {
                console.log(response);
                dispatch({
                    type: 'LIST_POSTS',
                    payload: response.data
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export const deletePost = (id) => {
    return (dispatch) => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => {
                console.log(response);
                dispatch({
                    type: 'DELETE_POST',
                    payload: id
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
}


export const addPost = (postObj) => {
    return (dispatch) => {
        axios.post('https://jsonplaceholder.typicode.com/posts', postObj)
            .then(response => {
                console.log(response)
                dispatch({
                    type: 'ADD_POST',
                    payload: response.data
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
}
