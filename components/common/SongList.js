/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, View, ScrollView, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'native-base';
import Toast from 'react-native-simple-toast';
import { AUDIOPLAYERSCREEN } from './../../constants/actionType';
let screenwWidth = Dimensions.get('window').width;
class SongList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likedStatus: false,
        }

    }
    render() {
        var { song, index, navigation, audioPage, songIndex } = this.props;
        var { likedStatus } = this.state;

        var heartColor = likedStatus ? 'red' : 'white';
        var iosHeart = likedStatus ? 'ios-heart' : 'ios-heart-outline';
        var androidHeart = likedStatus ? 'md-heart' : 'md-heart-outline';
        var textColor = audioPage ? '#ffffff' : '#030303';
        var songs = []; songs.push(song);

        var passedData = {
            "type": "songs",
            "content": songs
        }
        //console.log('SongList', song);
        return (

            <TouchableOpacity style={{ flex: 1, marginBottom: 10, padding: 10, backgroundColor: 'transparent' }}
                onPress={() => {
                    if (audioPage) {
                        this.props.onSelectSong(index);
                    }
                    else
                        navigation.navigate(AUDIOPLAYERSCREEN, passedData);

                }}>

                <View style={{ flex: 1, flexDirection: 'column' }}>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ width: 30, flexWrap: 'wrap', justifyContent: 'center', alignSelf: 'center', }}>
                            {songIndex === index ? <Image style={{ width: 20, height: 20 }} source={require('./../../images/playing.gif')} />
                                : <Text style={{
                                    marginLeft: 5, marginTop: 7,
                                    fontSize: 20, color: '#979797', textAlign: 'left'
                                }}>{index + 1}</Text>

                            }


                        </View>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text
                                numberOfLines={1}
                                style={{
                                    marginLeft: 5, marginTop: 7,
                                    fontSize: 20, color: textColor,
                                }}>{song.name}</Text>
                            <Text style={{
                                marginLeft: 5, marginTop: 7,
                                fontSize: 20, color: '#979797'
                            }}>{song.singer}</Text>

                        </View>

                        <TouchableOpacity disabled={likedStatus} style={{ justifyContent: 'center', width: 40 }}
                            onPress={() => { this.setState({ likedStatus: true }); Toast.show('Liked'); }}>
                            <View style={{ justifyContent: 'center', width: 30 }}>
                                <Icon name={Platform.OS === 'ios' ? iosHeart : androidHeart} style={{ alignSelf: 'center', color: heartColor }} />

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#979797' }} />


                </View>

            </TouchableOpacity>


        )
    }
}

export default SongList;