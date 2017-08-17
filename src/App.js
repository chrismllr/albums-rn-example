import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import { FadeInUp } from './shared/Animated';

export default function App () {
  return (
    <View style={{ flex: 1 }}>
      <Header text="Albums" />
      <FadeInUp style={{ flex: 1 }}>
        <AlbumList />
      </FadeInUp>
    </View>
  );
}
