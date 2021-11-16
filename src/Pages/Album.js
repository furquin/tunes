import React, { Component } from 'react';
import Header from '../componentes/Header';

class Album extends Component {
  render() {
    return (
      <>
        <div data-testid="page-album" />
        <Header />
      </>

    );
  }
}

export default Album;
