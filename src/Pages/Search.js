import React, { Component } from 'react';
import Header from '../componentes/Header';

class Search extends Component {
  render() {
    return (
      <>
        <div data-testid="page-search" />
        <Header />
      </>
    );
  }
}

export default Search;
