import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../actions/postsAction';
import { connect } from 'react-redux';
import { getPost } from '../actions/postAction';
import '../styles/postsStyle.css'

class Posts extends Component {

    // componentDidMount() {
    //     let id = this.props.location.pathname.split('=')[1];
    //     this.props.getPosts(id);
    // }
    showPost = id => this.props.getPost(id);
    render() {
        let id = this.props.location.pathname.split('=')[1];
        const posts = this.props.posts;
        console.log(posts)
        let postsList = 'No Posts';
        if (posts) {
            postsList = posts.map(post => {
                return (
                    <div key={post.id} className='posts-conteiner'>
                        <div>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </div>
                        <Link to={'/post/' + post.id}><button onClick={this.showPost.bind(this, post.id)}>Details</button></Link>
                    </div>
                )

            });
        }

        return (
            <div>
                <div className="container">
                    <Link to={'/addpost/userId=' + id}><button id='add-button'>Add new</button></Link>
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

export default connect(mapStateToProps, { getPost })(Posts);
