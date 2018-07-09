/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, Image, View, ScrollView } from 'react-native';
import FavouriteSong from './FavouriteSong';


class FavouriteSongFragment extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
       this.props.getFavouriteSongs();

    }

    render() {
        var { songs, navigation } = this.props;
         //console.log('FavouriteSongFragment Render!!', navigation);

        return (
            <View style={{ flex: 1, flexDirection: 'column', marginTop: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text
                        style={{ fontSize: 25, color: '#3e3b3b', alignSelf: 'center', marginLeft: 20 }}>
                        You may love
                    </Text>


                </View>


                <View style={{ marginTop: 20 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {songs.map((song, index) => (
                            <FavouriteSong key={index} navigation={navigation} song={song} />
                        ))}
                    </ScrollView>
                </View>

            </View>

        )
    }
}

export default FavouriteSongFragment;