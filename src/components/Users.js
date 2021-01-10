import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from '../actions/usersAction';
import { connect } from 'react-redux';

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const users = this.props.users;
    let usersList = 'No Users';
    if (users) {
      usersList = users.map(user => {
        return (
          <div key={user.id}>
            <div>
              <p><span>Name: </span>{user.name}</p>
              <p><span>Username: </span>{user.username}</p>
              <p><span>Email: </span>{user.email}</p>
              <p><span>Address: </span>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
              <p><span>Phone: </span>{user.phone}</p>
              <p><span>Website: </span>{user.website}</p>
              <p><span>Company: </span>{user.company.name}, {user.company.catchPhrase}, {user.company.bs}</p>
            </div>
            <Link to={'posts/userId=' + user.id}><button>Posts</button></Link>
          </div>
        )

      });
    }

    return (
      <div>
        <div className="container">
          {usersList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps, { getUsers })(Users);

