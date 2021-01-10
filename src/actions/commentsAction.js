import axios from 'axios';

export const getComments = (id) => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
        .then(response => {
            console.log(response);
            dispatch({
                type: 'LIST_COMMENTS',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
}
