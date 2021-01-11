import axios from 'axios';

export const getPost = (id) => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => {
            console.log(response);
            dispatch({
                type: 'LIST_POST',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const updatePost = (postObj,id) => {
    return (dispatch) => {
        axios.put('https://jsonplaceholder.typicode.com/posts/'+id, postObj)
            .then(response => {
                console.log(response)
                dispatch({
                    type: 'UPDATE_POST',
                    payload: response.data
                })
                
            })
            .catch(error => {
                console.log(error);
            });
    }
}

