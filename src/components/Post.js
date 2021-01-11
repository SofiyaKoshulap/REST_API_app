import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getPost } from '../actions/postAction';
import { getComments } from '../actions/commentsAction';
import { deletePost } from '../actions/postsAction';
import { connect } from 'react-redux';
import '../styles/postStyle.css'

class Post extends Component {

    componentDidMount() {
        let id = this.props.match.params.post_id;
        // this.props.getPost(id);
        this.props.getComments(id);

    }
    delete = postId => {
        this.props.deletePost(postId);
        // this.props.history.goBack()
    }
    render() {
        const post = this.props.post;
        const comments = this.props.comments;
        console.log(post)
        let commentsList = 'No comments';
        if (comments) {
            commentsList = comments.map(comment => {
                return (
                    <div key={comment.id} className='comment-conteiner'>
                        <div>
                            <h4>{comment.name}</h4>
                            <p>{comment.email}</p>
                            <p>{comment.body}</p>
                        </div>
                    </div>
                )
            });
        }

        let postShow = 'Loading...'
        if (post) {
            postShow = (
                <div className='post-conteiner'>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <Link to={'/edit/' + post.id}><button>Edit</button></Link>
                    <Link to={'/posts/userId=' + post.userId}><button onClick={this.delete.bind(this, post.id)}>Delete</button></Link>
                </div>
            );
        }

        return (
            <div>
                <div className="container">
                    {postShow}
                    <div className='comments-conteiner'>
                        <h2>Comments</h2>
                        {commentsList}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        post: state.post.post,
        comments: state.comments.comments
    }
}

export default connect(mapStateToProps, { getPost, getComments, deletePost })(Post);