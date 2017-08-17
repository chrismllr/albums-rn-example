// @flow

import React from 'react';
import { Linking } from 'react-native';
import glamorous from 'glamorous-native';
import { FlexContainer } from '../shared/Containers';
import { BaseText } from '../shared/Text';
import { FullBtn } from '../shared/Buttons';
import Card from '../shared/Card';
import CardSection from '../shared/CardSection';
import { SwipeRow } from '../shared/Animated';

import { spacing, fontSize } from '../styles/common';

type Album = {
  title: string,
  artist: string,
  url: string,
  image: string,
  thumbnail_image: string
};

type AlbumDetailProps = {
  album: Album
};

const ArtistImage = glamorous.image({
  height: 50,
  width: 50
});

const AlbumImage = glamorous.image({
  height: 300,
  width: '100%'
});

function navigate (url) {
  return function press () {
    Linking.openURL(url);
  };
}

export default function AlbumDetail ({ album }: AlbumDetailProps) {
  const { artist, title, thumbnail_image, image, url } = album;

  return (
    <SwipeRow>
      <Card>
        <CardSection>
          <FlexContainer flexDirection="row" justifyContent="flex-start">
            <ArtistImage source={{ uri: thumbnail_image }} />

            <FlexContainer hSpacing={spacing.sp4} justifyContent="center" alignItems="flex-start">
              <BaseText fontWeight="700" fontSize={fontSize.fs4}>{artist}</BaseText>
              <BaseText>{title}</BaseText>
            </FlexContainer>
          </FlexContainer>
        </CardSection>

        <CardSection>
          <FlexContainer>
            <AlbumImage source={{ uri: image }} />
          </FlexContainer>
        </CardSection>

        <CardSection>
          <FullBtn onPress={navigate(url)}>
            Buy Album on Amazon
          </FullBtn>
        </CardSection>
      </Card>
    </SwipeRow>
  );
}
