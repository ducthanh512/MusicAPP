/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import { Container, Text, Content, } from 'native-base';
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { createBottomTabNavigator, StackNavigator, createStackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';


import Home from './Home';
import SearchFragment from './SearchFragment';
import SearchContainer from './../containers/SearchContainer';

import GroupContainer from '../containers/GroupContainer';
import SongListContainer from '../containers/SongListContainer';
import AudioPlayerFragement from './../components/audio/AudioPlayerFragement';
import AudioStreamerFragement from './../components/audio/AudioStreamerFragement';
import { HOMESCREEN, SONGLISTSCREEN, PLAYLISTLAYOUTSCREEN, AUDIOPLAYERSCREEN } from './../constants/actionType';



import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

YellowBox.ignoreWarnings(['Class RCTCxxModule']);
YellowBox.ignoreWarnings(['Module AudioRecorderManager']);
YellowBox.ignoreWarnings(['Module RCTImageLoader']);

// YellowBox.ignoreWarnings(['TabNavigator is deprecated']);
// YellowBox.ignoreWarnings(['Method `jumpToIndex`']);
//console.disableYellowBox = true; 

export default class Main extends Component {
  static navigationOptions = {
    header: null
  }
  render() {

    const { navigation } = this.props;
    console.log(JSON.stringify(this.props.mainNavigation));
    return <MainNavigator />;
  }
}

const HomeNavigator = createStackNavigator({
  HOMESCREEN: {
    screen: Home,
  },
  GROUPSCREEN: {
    screen: GroupContainer,
  },
  SONGLISTSCREEN: {
    screen: SongListContainer,
  },
  AUDIOPLAYERSCREEN: {
    screen: AudioStreamerFragement,
  }
}
  ,
  {
    style: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }

);


const SearchNavigator = createStackNavigator({
  SEARCHSCREEN: {
    screen: SearchContainer,
  },
  AUDIOPLAYERSCREEN: {
    screen: AudioStreamerFragement,
  }

},
  {
    style: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }

);

const MainNavigator = createBottomTabNavigator(

  {
    NavigatorPage: {
      screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name={Platform.OS === 'ios' ? 'ios-home-outline' : 'md-home'} style={{ color: tintColor }}></Icon>
        }
      }
    },

    Search: {
      screen: SearchNavigator,
      navigationOptions: {
        title: 'Search',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} style={{ color: tintColor }}></Icon>
        }
      }
    },
  }, {
    animationEnabled: true,
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      upperCaseLabel: false,
      style: {
        backgroundColor: 'white',
      },
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    }
  });
