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



