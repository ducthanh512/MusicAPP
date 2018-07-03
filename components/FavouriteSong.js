/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, View, ScrollView, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'native-base';
class FavouriteSong extends Component {

    render() {
        var { song } = this.props;
        // alert(playlist.image);
        return (

            <TouchableOpacity style={{ flex: 1, marginLeft:10, marginRight:10, marginBottom:10 }}
                onPress={() => { }}>
            <View style={{flex:1, flexDirection:'row'}}>
                <View style={{width:90, flexWrap:'wrap'}}>
                    <Image
                        style={{ height: 80, width: 80, resizeMode: 'cover', borderRadius: 10 }}
                        source={{uri:song.image}} />
                </View>
               <View style={{flex:1, flexDirection:'column'}}>
                    <Text style={{marginLeft:5, marginTop:7,
                    fontSize:18, color:'#363636'}}>{song.name}</Text>
                    <Text style={{marginLeft:5, marginTop:7,
                    fontSize:18, color:'#8c8a8a'}}>{song.singer}</Text>

                </View>
                <View style={{justifyContent:'center', width:20}}>
                <Icon name={Platform.OS === 'ios' ? 'ios-heart-outline-outline' : 'md-heart-outline'} style={{ alignSelf: 'center',}} />

                </View>


            </View>


               
                    
            </TouchableOpacity>


        )
    }
}

export default FavouriteSong;