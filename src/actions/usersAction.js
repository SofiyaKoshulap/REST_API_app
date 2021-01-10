import axios from 'axios';

export const getUsers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response);
            dispatch({
                type: 'LIST_USERS',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
}
