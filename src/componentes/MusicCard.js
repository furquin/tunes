import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      favorite: false,
    };
  }
  /* Consultei o repositório do Fernanda Andrade para resolver essa parte.
        * https://github.com/tryber/sd-016-a-project-trybetunes/pull/54/commits/05462d67bc128a47aa8a7ed94b123ef2b5b45235 */

  componentDidMount() {
    this.getFavorite();
  }

  handleChange = () => {
    const { song } = this.props;
    this.setState({
      isLoading: true,
    }, () => {
      addSong(song).then(() => {
        this.setState({ isLoading: false, favorite: true });
      });
    });
  }

  /* Consultei o repositório do Fernanda Andrade para resolver essa parte.
        *https://github.com/tryber/sd-016-a-project-trybetunes/pull/54/commits/6382003426e232872e79668836ef3655cf68821e */

  getFavorite = () => {
    const { checked } = this.props;
    if (checked === true) {
      this.setState({
        favorite: true,
      });
    }
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { isLoading, favorite } = this.state;
    const { handleChange } = this;
    return (
      isLoading ? <Loading /> : (
        <div>
          <h2>
            { trackName }
          </h2>

          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>

          <label htmlFor="inputFavorite">
            Favorita
            <input
              name="inputFavorite"
              type="checkbox"
              data-testid={ `checkbox-music-${trackId}` }
              checked={ favorite }
              onChange={ handleChange }

            />
          </label>

        </div>
      ));
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  song: PropTypes.shape({
    trackId: PropTypes.number,
  }).isRequired,
};
