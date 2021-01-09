import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        let id = this.props.location.pathname.split('=')[1];
        axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + id)
            .then(res => {
                this.setState({
                    posts: res.data
                });
            })
    }
    render() {
        const { posts } = this.state
        const postsList = posts.map(post => {
            return (
                <div key={post.id}>
                    <div>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                    <Link to={'/' + post.id}><button>Details</button></Link>
                </div>
            )
        })

        return (
            <div>
                <div className="container">
                    <button>Add new</button>
                    {postsList}
                </div>
            </div>
        )
    }
}

export default Posts