import React, { Component } from 'react';
import Header from '../componentes/Header';

class Profile extends Component {
  render() {
    return (
      <>
        <div data-testid="page-profile" />
        <Header />
      </>

    );
  }
}

export default Profile;
