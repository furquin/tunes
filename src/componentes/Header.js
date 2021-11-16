import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        {user && (
          <>
            <p data-testid="header-user-name">
              { user.name }
            </p>

            <nav>
              <Link to="/search">
                <p data-testid="link-to-search"> Pesquisar </p>
              </Link>

              <Link to="/favorites">
                <p data-testid="link-to-favorites"> Favoritos </p>
              </Link>

              <Link to="/profile">
                <p data-testid="link-to-profile"> Perfil </p>
              </Link>

            </nav>
          </>
        )}

      </header>
    );
  }
}
