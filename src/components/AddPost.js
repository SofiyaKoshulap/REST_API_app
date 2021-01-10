import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addPost } from '../actions/postsAction';

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
        this.setState({
            title: '',
            body: '',
            userId: this.props.location.pathname.split('=')[1]
        });
        this.props.history.goBack()
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleOnSubmit}>
                    <div >
                        <label>Title</label>
                        <input onChange={this.handleTextChange} value={this.state.title} type="text" name="title" placeholder="Title" />
                    </div>
                    <div >
                        <label>Body</label>
                        <textarea onChange={this.handleTextChange} value={this.state.body} name="body" placeholder="Body" />
                    </div>
                    <div >
                        <button type="submit">Add Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addPost })(AddPost);