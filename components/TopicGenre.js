/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, View, ScrollView, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import {SONGLISTSCREEN} from './../constants/actionType';
class TopicGenre extends Component {

    render() {
        var { topicGenre,navigation } = this.props;
        var passedData = {
            "type": "topicGenre",
            "content" : topicGenre
        }
        // alert(playlist.image);
        return (

            <TouchableOpacity style={{ flex: 1, marginLeft:10, marginRight:10 ,height: 110, width: 255,}}
            onPress={() => {navigation.navigate(SONGLISTSCREEN, passedData); }}>
                <Image
                    style={{ height: null, width: null, flex: 1, zIndex: 1, resizeMode: 'stretch', }}
                    source={{uri:topicGenre.image}} />
            </TouchableOpacity>


        )
    }
}

export default TopicGenre;