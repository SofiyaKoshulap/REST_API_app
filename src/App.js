import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Users from './components/Users';
import Posts from './components/Posts';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
      
          <Switch>
            <Route exact path='/' component={Users}/>
           
            <Route path='/posts' component={Posts} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
