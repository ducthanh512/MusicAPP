/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, Image, View, ScrollView,TouchableOpacity } from 'react-native';
import {GROUPSCREEN,SONGLISTSCREEN} from './../constants/actionType';
import Album from './Album';


class AlbumFragment extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getAlbums();

    }

    render() {
        var { albums, navigation } = this.props;
        //  console.log('AlbumFragment Render!!', albums);
        var passedData = {
            "type": "album"
        }
        return (
            <View style={{ flex: 1, flexDirection: 'column', marginTop: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text
                        style={{ fontSize: 25, color: '#3e3b3b', alignSelf: 'center', marginLeft: 20 }}>
                        Album
                    </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate(GROUPSCREEN, passedData); }}>
                        <Text
                            style={{ fontSize: 18, color: '#913677', alignSelf: 'center', marginRight: 20 }}>
                            View more
                 </Text>
                    </TouchableOpacity>

                </View>


                <View style={{ marginTop: 20 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {albums.map((album, index) => (
                            <Album key={index} album={album} navigation={navigation} />
                        ))}
                    </ScrollView>
                </View>

            </View>

        )
    }
}

export default AlbumFragment;