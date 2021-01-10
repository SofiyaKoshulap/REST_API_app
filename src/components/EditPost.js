import React, { Component } from 'react'
import axios from 'axios'

class EditPost extends Component {
    state = {
        post: {},

    }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                });
            });
    }

    render() {

        const post = (
            <div>
                <form>
                <input type='text' value={this.state.post.title}></input><br></br>
                <input type='text' value={this.state.post.body}></input>
                <button>Update</button>
                </form>
            </div>
        );


        return (
            <div>
                <div className="container">
                    {post}
                </div>
            </div>
        )
    }
}

export default EditPost