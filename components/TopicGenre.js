/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, View, ScrollView, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

class TopicGenre extends Component {

    render() {
        var { topicGenre } = this.props;
        // alert(playlist.image);
        return (

            <TouchableOpacity style={{ flex: 1, marginLeft:10, marginRight:10 }}
                onPress={() => { }}>
                <Image
                    style={{ height: 110, width: 255, flex: 1, zIndex: 1, resizeMode: 'cover', }}
                    source={{uri:topicGenre.image}} />
            </TouchableOpacity>


        )
    }
}

export default TopicGenre;