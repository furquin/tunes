import React, { Component } from 'react';
import Header from '../componentes/Header';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchArtistInput: '',
    };
  }

  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchArtistInput } = this.state;
    const { onInputChange } = this;
    const minCharacters = 2;
    const disabledButton = searchArtistInput.length < minCharacters;

    return (
      <>
        <div data-testid="page-search" />
        <Header />
        <input
          data-testid="search-artist-input"
          type="text"
          name="searchArtistInput"
          value={ searchArtistInput }
          onChange={ onInputChange }
        />

        <button
          data-testid="search-artist-button"
          type="submit"
          name="searchArtistButton"
          disabled={ disabledButton }
        >
          Pesquisar
        </button>
      </>
    );
  }
}

export default Search;
