import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      checked: false,
      isLoading: false,
    };
  }
  /* Consultei o repositório do Fernanda Andrade para resolver essa parte.
        * https://github.com/tryber/sd-016-a-project-trybetunes/pull/54/commits/05462d67bc128a47aa8a7ed94b123ef2b5b45235 */

  handleChange = () => {
    const { song } = this.props;
    this.setState({
      checked: true,
      isLoading: true,
    }, () => {
      addSong(song).then(() => {
        this.setState({ isLoading: false });
      });
    });
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { checked, isLoading } = this.state;
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
              checked={ checked }
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
  song: PropTypes.shape({
    trackId: PropTypes.number,
  }).isRequired,
};
