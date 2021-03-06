import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Users from './components/Users';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import Post from './components/Post';
import EditPost from './components/EditPost';
import index from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(index, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <div className="App">
          <Switch>
            <Route exact path='/' component={Users} />
            <Route path='/posts' component={Posts} />
            <Route path='/post/:post_id' component={Post} />
            <Route path='/edit/:post_id' component={EditPost} />
            <Route path='/addpost' component={AddPost} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider >
  );
}

export default App;
