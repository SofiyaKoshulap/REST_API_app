import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { updatePost } from '../actions/postsAction';
import axios from 'axios';


class EditPost extends Component {
    state = {
        title: '',
        body: '',
        userId: ' '

    }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    body: res.data.body,
                    userId: res.data.userId
                });
            });
    }
    handleTextChange = (e) => this.setState({ [e.target.name]: e.target.value })
    handleOnSubmit = event => {
        let id = this.props.match.params.post_id;
        event.preventDefault();
        this.props.updatePost(this.state, id);
        console.log(this.state)
        this.setState({
            title: '',
            body: '',
        });
        console.log(this.state)
        // this.props.history.goBack()
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
                        <Link to={'/posts/userId=' + this.state.userId}><button type="submit">Update Post</button></Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { updatePost })(EditPost);