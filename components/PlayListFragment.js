/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, Image, View } from 'react-native';
import PlayList from './PlayList';

class PlayListFragment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            playlistServer: []
        }

    }

    componentWillReceiveProps(previousProps) {
        var playlists = previousProps.playlists;
        this.setState({
            playlistServer: playlists,
        });
    }

    componentDidMount() {

          this.refreshDataFromServer();

    }
    refreshDataFromServer = () => {
        this.props.getPlaylists();
    }

    render() {
        var {playlists} = this.props;
        console.log('playlists', playlists);

        return (
            <View style={{ flex: 1 }}>
                <Text
                    style={{ fontSize: 25, color: '#3e3b3b', marginTop: 15, marginBottom: 15, alignSelf: 'center' }}>
                    Keep Calm and Enjoy Music
                </Text>

                     {playlists.map((playlist, index) => (
                        <View key={index}>
                            <PlayList playlist={playlist} />
                        </View>
                    ))}
    

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

            </View>

        )
    }
}

export default PlayListFragment;