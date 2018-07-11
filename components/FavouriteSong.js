/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, View, ScrollView, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Toast from 'react-native-simple-toast';
import { Icon } from 'native-base';
import {AUDIOPLAYERSCREEN} from './../constants/actionType';
class FavouriteSong extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            likedStatus: false,
        }
        
    }

    render() {
        var { song,navigation } = this.props;
        var {likedStatus} = this.state;

        var heartColor = likedStatus?'red':'black';
        var iosHeart = likedStatus?'ios-heart':'ios-heart-outline';
        var androidHeart = likedStatus?'md-heart':'md-heart-outline';
        var songs = []; songs.push(song);
        var passedData = {
            "type": "songs",
            "content" : songs
        }
        return (
            <View style={{ flex: 1, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>


                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}
                       onPress={() => {navigation.navigate(AUDIOPLAYERSCREEN, passedData);  }}>
                        <View style={{ width: 90, flexWrap: 'wrap' }}>
                            <Image
                                style={{ height: 80, width: 80, resizeMode: 'cover', borderRadius: 10 }}
                                source={{ uri: song.image }} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={{
                                marginLeft: 5, marginTop: 7,
                                fontSize: 18, color: '#363636'
                            }}>{song.name}</Text>
                            <Text style={{
                                marginLeft: 5, marginTop: 7,
                                fontSize: 18, color: '#8c8a8a'
                            }}>{song.singer}</Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity  disabled={likedStatus} style={{ justifyContent: 'center', width: 40 }}
                        onPress={() => { this.setState({likedStatus:true}); Toast.show('Liked');  }}>
                        <View >
                            <Icon name={Platform.OS === 'ios' ? iosHeart : androidHeart} style={{ alignSelf: 'center', color: heartColor}} />
                        </View>

                    </TouchableOpacity>
                </View>


            </View>





        )
    }
}

export default FavouriteSong;