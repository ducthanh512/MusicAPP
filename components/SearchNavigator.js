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
import SearchContainer from './../containers/SearchContainer';

import AudioPlayerFragement from './audio/AudioPlayerFragement';
import {SEARCHSCREEN,AUDIOPLAYERSCREEN} from '../constants/actionType';

import GroupContainer from '../containers/GroupContainer';

const Navigator = StackNavigator({
  SEARCHSCREEN: {
    screen: SearchContainer,
  },
  AUDIOPLAYERSCREEN:{
    screen:AudioPlayerFragement,
  }

},
{
  style: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
}

);

export default class SearchNavigator extends Component {
  static navigationOptions = {
    title: 'Search',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} style={{ color: tintColor }}></Icon>
    }
}
  render() {
    return (<Navigator />);
  }
}