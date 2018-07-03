/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Main from './components/Main';
import SongList from './components/common/SongList';
import Home from './components/Home'

const Navigator = createStackNavigator({
  Home: {
    screen: Home
  },
  SongList: {
    screen: SongList
  }
});

export default class App extends Component {
  render() {
    return (<Navigator />);
  }
}