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
import SongListFragment from './components/common/SongListFragment';
import Home from './components/Home'

const Navigator = createStackNavigator({
  Home: {
    screen: Home
  },
  SongList: {
    screen: SongListFragment
  }
});

export default class App extends Component {
  render() {
    return (<Navigator />);
  }
}