import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../componentes/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../componentes/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends Component {
  constructor() {
    super();

    this.state = {
      artistName: '',
      collectionName: '',
      collectionImage: '',
      tracks: [],
    };
  }

  /* Consultei o repositório do Fernanda Andrade para resolver essa parte.
        * Link- https://github.com/tryber/sd-016-a-project-trybetunes/pull/54/commits/c25963ccd2d7c52c279ed40128583cfe36ed41b2 */
  componentDidMount() {
    this.fetchMusics();
  }

        fetchMusics = async () => {
          const { match: { params: { id } } } = this.props;
          const result = await getMusics(id);
          const favorites = await getFavoriteSongs();
          const musics = result.map((resultOne) => (
            {
              ...resultOne,
              isChecked: favorites
                .some((favorite) => favorite.trackId === resultOne.trackId),
            }
          ));

          this.setState({
            artistName: musics[0].artistName,
            collectionName: musics[0].collectionName,
            collectionImage: musics[0].artworkUrl100,
          }, () => {
            this.setState({
              tracks: [...musics],
            });
          });
        }

        render() {
          const { artistName, collectionName, collectionImage, tracks } = this.state;
          return (
            <>
              <div data-testid="page-album" />
              <Header />

              <img src={ collectionImage } alt={ collectionName } />

              <h3 data-testid="artist-name">
                { artistName }
              </h3>
              <h3 data-testid="album-name">
                {collectionName}
              </h3>

              {
                tracks
                  .filter((music) => music.previewUrl !== undefined)
                  .map((music) => (
                    <MusicCard
                      key={ music.trackId }
                      trackName={ music.trackName }
                      previewUrl={ music.previewUrl }
                      trackId={ music.trackId }
                      song={ music }
                      checked={ music.isChecked }
                    />
                  ))
              }
            </>

          );
        }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Album;
