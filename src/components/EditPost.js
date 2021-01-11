import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { updatePost } from '../actions/postAction';
import axios from 'axios';
import '../styles/formStyle.css'

class EditPost extends Component {
    state = {
        title: '',
        body: '',
        userId: ' ',
        id: ' '

    }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    body: res.data.body,
                    userId: res.data.userId,
                    id: res.data.id
                });
            });
    }

    handleTextChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }
    handleOnSubmit = event => {
        event.preventDefault();
        this.props.updatePost(this.state, this.state.id);
        console.log(this.state)
        this.props.history.goBack()
    }

    render() {
        return (
            <div className="form-conteiner">
                <h2>Edit post</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <input onChange={this.handleTextChange} value={this.state.title} type="text" name="title" placeholder="Title" />

                    <textarea onChange={this.handleTextChange} value={this.state.body} name="body" placeholder="Body" rows='20' />

                    <div >
                        <button type="submit">Update Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { updatePost })(EditPost);