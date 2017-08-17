import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

export default function albums () {
  return (
    <App />
  );
}

AppRegistry.registerComponent('albums', () => albums);
