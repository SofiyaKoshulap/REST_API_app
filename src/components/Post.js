import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        post: {},
        comments: []
    }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                });
            });
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
            .then(res => {
                this.setState({
                    comments: res.data
                });
            });

    }
    render() {
        const { comments } = this.state
        const post = (
            <div>
                <h4>{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        );

        const commentsList = comments.map(comment => {
            return (
                <div key={comment.id}>
                    <div>
                        <h4>{comment.name}</h4>
                        <p>{comment.email}</p>
                        <p>{comment.body}</p>
                    </div>
                </div>
            )
        });




        return (
            <div>
                <div className="container">
                    {post}
                    <div>
                        {commentsList}
                    </div>
                </div>
            </div>
        )
    }
}

export default Post