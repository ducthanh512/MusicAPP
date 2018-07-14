/*
*/
import { Container, Text, Content } from 'native-base';
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Platform } from 'react-native';


import Home from './Home';
import SearchFragment from './SearchFragment';
import SearchContainer from './../containers/SearchContainer';
import NavigatorPage from './NavigatorPage';
import SearchNavigator from './SearchNavigator';

/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
// YellowBox.ignoreWarnings(['TabNavigator is deprecated']);
// YellowBox.ignoreWarnings(['Method `jumpToIndex`']);
//console.disableYellowBox = true; 

export default class Main extends Component {
    static navigationOptions = {
        header: null
        // headerLeft: <Icon
        //     name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'}
        //     style={{ paddingLeft: 10 }} />,
        // title: "NativeBase Example",
        // headerRight: <Icon
        //     name={Platform.OS === 'ios' ?
        //         'ios-compass' : 'md-compass'}
        //     style={{ paddingRight: 10 }} />
    }
    render() {

        const { navigation } = this.props;
        console.log(JSON.stringify(this.props.mainNavigation));
        return <MainNavigator />;
    }
}
const MainNavigator = createBottomTabNavigator(

    {

        NavigatorPage: {
            screen: NavigatorPage
        },

        // NavigatorPage: props =>
        //   <NavigatorPage
        //     {...props}
        //     style={{ borderTopColor: '#605F60' }}
        //   />,

        Search: {
            screen: SearchNavigator
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
