import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Users extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({
          users: res.data
        });
      })
  }
  render() {
    const { users } = this.state
    const usersList = users.map(user => {
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
          <Link to={'posts/userId='+user.id}><button>Posts</button></Link>
        </div>
      )
    })

    return (
      <div>
        <div className="container">
          {usersList}
        </div>
      </div>
    )
  }
}

export default Users