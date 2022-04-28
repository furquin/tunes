import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Search from './Search';
import Album from './Album';
import Favorites from './Favorites';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import NotFound from './NotFound';

class Pages extends Component {
  render() {
    return (
        <switch>
          <Route exact path="/" component={ Login } />

          <Route exact path="/search" component={ Search } />

          <Route exact path="/album/:id" component={ Album } />

          <Route exact path="/favorites" component={ Favorites } />

          <Route exact path="/profile" component={ Profile } />

          <Route exact path="/profile/edit" component={ ProfileEdit } />

          <Route exact path="*" component={ NotFound } />
        </switch>
    );
  }
}

export default Pages;
