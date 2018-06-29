/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, View, ScrollView, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground  } from 'react-native';

class PlayList extends Component {

    render() {
        var { playlist } = this.props;
       // alert(playlist.image);
        let screenwWidth = Dimensions.get('window').width;
        let constentWidth = screenwWidth*75/100;
        return (
            <ScrollView>
                <View style={{ flex: 1}}>
                    <View style={{ marginBottom: 2, flex:1, marginRight: 8, marginLeft: 8, }}>
                        <TouchableOpacity style={{ height: 110, marginTop: 5, position: 'relative' }}
                            onPress={() => { }}>
                            <ImageBackground 
                                style={{ height: null, width: null, flex: 1,zIndex:1 }}
                                source={{ uri: playlist.image }} />
                                <View style={{position: 'absolute',height:110,width: screenwWidth, backgroundColor: 'rgba(0,0,0,0.3)',zIndex: 2,flexDirection: 'column',justifyContent: 'flex-end'}} >
                                    <View style={{ flex: 90,height:50, width:screenwWidth,zIndex:3,flexDirection: 'row' }}>

                                    <View style={{flexDirection:'column', justifyContent: 'flex-end',zIndex:3,flex:20 }}>
                                        <Image style={{ borderRadius:8, width: 50, height: 50,  resizeMode: 'contain', marginLeft: 10,zIndex:3}}
                                    source={{ uri: playlist.icon }}></Image> 
                                    </View>
                                        <View style={{flexDirection:'column', justifyContent: 'flex-end',zIndex:3,flex:80 }}>

                                        <Text numberOfLines={2} style = {{ color: 'white',zIndex:3, width:constentWidth, fontWeight: 'bold', fontSize: 13, }}>{playlist.name}</Text> 
                                        </View>
                                    </View>
                                    <View style={{zIndex:3,width:screenwWidth,height:5, flex:10 }}/>
                                </View>
                                
                        </TouchableOpacity>

                    </View>
                    
                </View>
            </ScrollView >

        )
    }
}

export default PlayList;