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
  View,
  StatusBar ,
} from 'react-native';
import {
   Icon,
} from 'native-base';
import { createStackNavigator,StackNavigator } from 'react-navigation';
import Main from './Main';
import SongList from './common/SongList';
import Home from './Home'
import {HOMESCREEN, SONGLISTSCREEN} from './../constants/actionType';

const Navigator = StackNavigator({
  HOMESCREEN: {
    screen: Home,
  },
  SONGLISTSCREEN: {
    screen: SongList,
  }
},
{
  style: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
}

);

export default class NavigatorPage extends Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name={Platform.OS === 'ios' ? 'ios-home-outline' : 'md-home'} style={{ color: tintColor }}></Icon>
    }
}
  render() {
    return (<Navigator />);
  }
}