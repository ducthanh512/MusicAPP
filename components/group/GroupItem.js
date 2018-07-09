/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, View, ScrollView, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import {SONGLISTSCREEN} from './../../constants/actionType';
class GroupItem extends Component {

    render() {
        var { group,navigation, typeParam } = this.props;
        var passedData = {
            "type": typeParam,
            "content" : group
        }
        // alert(playlist.image);
        return (

            <TouchableOpacity style={{ flex: 1, marginLeft:10,height: 220, width: 180,}}
                onPress={() => {navigation.navigate(SONGLISTSCREEN, passedData);}}>
                <Image
                    style={{ height: 180, width: 180, zIndex: 1, resizeMode: 'stretch', borderRadius: 10, }}
                    source={{uri:group.image}} />
                    <Text numberOfLines={2} style={{marginLeft:2, fontSize:15, alignSelf:'center'}}>{group.name}</Text>
            </TouchableOpacity>


        )
    }
}

export default GroupItem;