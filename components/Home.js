/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import {
    Container, Text, Content, Icon,
    Card, CardItem, Thumbnail, Body, Left, Right, Button
} from 'native-base';
import { Platform, Image, StyleSheet, View } from 'react-native';
import CardComponent from './CardComponent';
import Banner from './Banner';
import BannerContainer from './../constainers/BannerContainer';
import PlayListFragment from './../components/PlayListFragment';
import PlayListContainer from './../constainers/PlayListContainer';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name={Platform.OS === 'ios' ? 'ios-home-outline' : 'md-home'} style={{ color: tintColor }}></Icon>
        }
    }
    render() {
        return (<Container>
            <Content>
                <Card>
                    <CardItem cardBody>
                        <BannerContainer />
                    </CardItem>
                    <CardItem cardBody>
                        <PlayListContainer/>
                    </CardItem>
                    <CardItem cardBody>
                        <View style={{height: 1000}}></View>
                    </CardItem>
                </Card>
            </Content>
        </Container >

        );
    }
}

const styles = StyleSheet.create({

    icon: {

        flex: 1,
        alignSelf: 'stretch',
    }
})
export default Home;


