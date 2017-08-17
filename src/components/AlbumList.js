// @flow

import React from 'react';
import axios from 'axios';
import glamorous from 'glamorous-native';
import { spacing } from '../styles/common';
import AlbumDetail from './AlbumDetail';

type Album = {
  title: string,
  artist: string,
  url: string,
  image: string,
  thumbnail_image: string
};

type AlbumListProps = {};
type AlbumListState = {
  albums: Array<Album>
};

const AlbumListContainer = glamorous.scrollView({
  padding: spacing.sp6,
  paddingBottom: spacing.sp10
});

function setAlbums (albums) {
  return () => ({ albums });
}

export default class AlbumList extends React.Component {
  props: AlbumListProps;
  state: AlbumListState = {
    albums: []
  };

  componentDidMount () {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(({ data }) => {
        this.setState(setAlbums(data));
      });
  }

  render () {
    return (
      <AlbumListContainer>
        {this.state.albums.map((album: Album, k: number) => (
          <AlbumDetail album={album} key={k} />
        ))}
      </AlbumListContainer>
    );
  }
}
