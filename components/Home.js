/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import {
    Container, Text, Content, Icon,
    Card, CardItem, Thumbnail, Body, Left, Right
} from 'native-base';
import { Platform, Image, StyleSheet, View } from 'react-native';
import {SONGLISTSCREEN} from './../constants/actionType';
import CardComponent from './CardComponent';
import Banner from './Banner';
import BannerContainer from './../containers/BannerContainer';
import PlayListFragment from './../components/PlayListFragment';
import PlayListContainer from './../containers/PlayListContainer';
import TopicGenreFragment from './../components/TopicGenreFragment';
import TopicGenreContainer from './../containers/TopicGenreContainer';
import AlbumFragment from './../components/AlbumFragment';
import AlbumContainer from './../containers/AlbumContainer';
import FavouriteSongFragment from './../components/FavouriteSongFragment';
import FavouriteSongContainer from '../containers/FavouriteSongContainer';

class Home extends Component {
    static navigationOptions = {
        header: null ,
        title: 'Home',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name={Platform.OS === 'ios' ? 'ios-home-outline' : 'md-home'} style={{ color: tintColor }}></Icon>
        }
    }
    render() {
        const {navigation} = this.props;
        return (<Container style={styles.container}>

            <Content>
                <Card>
                    <CardItem cardBody>
                        <BannerContainer navigation ={navigation} />
                    </CardItem>
                    <CardItem cardBody>
                        <PlayListContainer />
                    </CardItem>
                    <CardItem cardBody>
                        <TopicGenreContainer />
                    </CardItem>
                    <CardItem cardBody>
                        <AlbumContainer />
                    </CardItem>
                    <CardItem cardBody>
                        <FavouriteSongContainer />
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
    },
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
      },
})
export default Home;


