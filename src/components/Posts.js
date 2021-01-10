import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../actions/postsAction';
import { connect } from 'react-redux';

class Posts extends Component {

    componentDidMount() {
        let id = this.props.location.pathname.split('=')[1];
        this.props.getPosts(id);
    }
    render() {
        let id = this.props.location.pathname.split('=')[1];
        const posts = this.props.posts;
        let postsList = 'No Posts';
        if (posts) {
            postsList = posts.map(post => {
                return (
                    <div key={post.id}>
                        <div>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </div>
                        <Link to={'/post/' + post.id}><button>Details</button></Link>
                    </div>
                )

            });
        }

        return (
            <div>
                <div className="container">
                    <Link to={'/addpost/userId=' + id}><button>Add new</button></Link>
                    {postsList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps, { getPosts })(Posts);
