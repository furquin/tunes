import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Header from '../componentes/Header';
import Loading from '../componentes/Loading';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchArtistInput: '',
      isLoading: false,
      artist: [],
      inputAlbum: '',

    };
  }

  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleArtist = async (ArtistInput) => {
    this.setState({ isLoading: true });

    const artist = await searchAlbumsAPI(ArtistInput);
    if (artist.length !== 0) {
      return this.setState({
        isLoading: false,
        inputAlbum: `Resultado de álbuns de: ${ArtistInput}`,
        searchArtistInput: '',
        artist,
      });
    }

    return this.setState({
      isLoading: false,
      inputAlbum: 'Nenhum álbum foi encontrado',
      searchArtistInput: '',
    });
  };

  render() {
    const { searchArtistInput, isLoading, artist, inputAlbum } = this.state;
    const { onInputChange, handleArtist } = this;
    const minCharacters = 2;
    const disabledButton = searchArtistInput.length < minCharacters;

    /* Consultei o repositório do GABRIEL ARAUJO para resolver essa parte.
        * Link- https://github.com/tryber/sd-016-a-project-trybetunes/pull/5/commits/2ee6249944493b2ddbe2fb6899fb865aa7c36398 */
    return (
      <>
        <div />
        <Header />

        {isLoading === true
          ? <Loading />
          : (
            <div data-testid="page-search">
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
                onClick={ () => handleArtist(searchArtistInput) }
              >
                Pesquisar
              </button>
            </div>
          )}

        <div>
          <h3>{ inputAlbum }</h3>
          <ul>
            {artist.map((i) => (
              <li key="info.artistId">
                <p>{i.searchArtistInput }</p>
                <h4>{i.collectionName}</h4>
                <p>
                  {i.collectionPrice}
                </p>
                <img src={ i.artworkUrl100 } alt={ i.collectionName } />
                <Link
                  data-testid={ `link-to-album-${i.collectionId}` }
                  to={ `/album/${i.collectionId}` }
                >
                  Album Completo
                </Link>
              </li>

            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Search;
