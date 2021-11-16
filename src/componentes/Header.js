import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    getUser()
      .then((nameUser) => this.setState({ user: nameUser }));
  }

  render() {
    const { user } = this.state;
    return (
      <header data-testid="header-component">
        {!user && <Loading />}
        {user && <p data-testid="header-user-name">
          { user.name }
        </p> }
      </header>
    );
  }
}
