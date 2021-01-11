import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addPost } from '../actions/postsAction';
import '../styles/formStyle.css'

class AddPost extends Component {
    state = {
        title: '',
        body: '',
        userId: this.props.location.pathname.split('=')[1]
    }

    handleTextChange = (e) => this.setState({ [e.target.name]: e.target.value })

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addPost(this.state);
        this.props.history.goBack()
    }

    render() {
        return (
            <div className="form-conteiner">
                <h2>Add new post</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <input onChange={this.handleTextChange} value={this.state.title} type="text" name="title" placeholder="Title" />

                    <textarea onChange={this.handleTextChange} value={this.state.body} name="body" placeholder="Body" rows='20' />

                    <div >
                        <button type="submit">Add Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addPost })(AddPost);