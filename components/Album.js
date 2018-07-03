/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, View, ScrollView, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

class Album extends Component {

    render() {
        var { album } = this.props;
        // alert(playlist.image);
        return (

            <TouchableOpacity style={{ flex: 1, marginLeft:10, marginRight:10 }}
                onPress={() => { }}>
                <Image
                    style={{ height: 200, width: 200, flex: 1, zIndex: 1, resizeMode: 'cover', borderRadius: 10 }}
                    source={{uri:album.image}} />
                    <Text style={{marginLeft:2, fontSize:20, alignSelf:'center'}}>{album.name}</Text>
            </TouchableOpacity>


        )
    }
}

export default Album;