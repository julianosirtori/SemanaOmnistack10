import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#7d40e7" barStyle="light-content"  /> 
      <Routes />
    </>
  );
}