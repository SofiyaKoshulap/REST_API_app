import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Users from './components/Users';
import Posts from './components/Posts';
import Post from './components/Post';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
      
          <Switch>
            <Route exact path='/' component={Users}/>
            <Route path='/posts' component={Posts} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
