/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, Image, View, TouchableOpacity } from 'react-native';
import PlayList from './PlayList';
import {GROUPSCREEN,SONGLISTSCREEN} from './../constants/actionType';
class PlayListFragment extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getPlaylists();
    }

    render() {
        var { playlists, navigation } = this.props;
        var passedData = {
            "type": "playlist"
        }
        return (
            <View style={{ flex: 1 }}>
                <Text
                    style={{ fontSize: 25, color: '#3e3b3b', marginTop: 15, marginBottom: 15, alignSelf: 'center' }}>
                    Keep Calm and Enjoy Music
                </Text>

                {playlists.map((playlist, index) => (
                    <View key={index}>
                        <PlayList playlist={playlist} navigation={navigation} />
                    </View>
                ))}

                <TouchableOpacity onPress ={()=>{navigation.navigate(GROUPSCREEN,passedData);  }}>
                    <View style={{
                        flex: 1, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', alignContent: 'center',
                        marginBottom: 8, paddingBottom: 8, paddingTop: 10, marginTop: 8, backgroundColor: 'rgba(0,0,0,0.1)', paddingLeft: 5
                    }}>
                        <Image style={{ aspectRatio: 1, resizeMode: 'contain', }}
                            source={require('./../images/iconmoreplaylist.png')}></Image>
                        <Text style={{ marginLeft: 20, color: '#0a0a0a', fontSize: 19 }}>
                            View more playlist
                </Text>

                    </View>
                </TouchableOpacity>
            </View>

        )
    }
}

export default PlayListFragment;