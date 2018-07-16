/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, View, ScrollView, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import GroupItem from './GroupItem';

class GroupRow extends Component {

    render() {
        var { group, navigation, typeParam } = this.props;
        var groupLeft = group[0];
        var groupRight = group.length == 2 ? group[1] : [];
        // console.log('playlistRight',playlistRight.name.length);
        // alert(playlist.image);
        return (

            <View style={{ flex: 1, flexDirection: 'column' }}>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    
                    <View style={{ flex: 40, justifyContent: 'center' }}>
                        <GroupItem typeParam={typeParam} group={groupLeft} navigation={navigation} />
                    </View>
                    <View style={{ flex: 1 }}></View>
                    {(groupRight.name && groupRight.name.length !== "undefined") ?
                        <View style={{ flex: 40, justifyContent: 'center' }}>
                            <GroupItem typeParam={typeParam} group={groupRight} navigation={navigation} />
                        </View> : <View style={{ flex: 40 }}></View>
                    }
                    <View style={{ flex: 1, marginRight:10}}></View>

                </View>

                <View style={{ height: 20 }}></View>

            </View>
        )
    }
}

export default GroupRow;