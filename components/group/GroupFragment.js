/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, View, ScrollView, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import GroupRow from './GroupRow';
import NavBackButton from './../common/NavBackButton';
class GroupFragment extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        var typeParam = this.props.navigation.state.params.type;
        this.props.resetGroup();
        switch (typeParam) {
            case "playlist":
                this.props.getAllPlaylists();
                break;
            case "topicGenre":
                this.props.getAllGenres();
                break;
            case "album":
                this.props.getAllAlbums();
                break;
        }

    }

    createNewGroup = groups => {
        var groupContainer = [];
        var groupRow = [];
        groups.map((group, index) => {
            groupRow.push(group);
            if ((index + 1) % 2 == 0 || (index + 1) >= groups.length) {
                groupContainer.push(groupRow);
                groupRow = [];
            }
        })
        return groupContainer;
    }
    render() {
        var { navigation, groups } = this.props;
        var typeParam = this.props.navigation.state.params.type;

        var newGroups = this.createNewGroup(groups);
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
                <NavBackButton navigation={navigation} title={typeParam} />

                <ScrollView style={{ marginTop: 40 }} showsVerticalScrollIndicator={false}>

                    {newGroups.map((group, index) => (
                        <View key={index}>
                            <GroupRow key={index} typeParam={typeParam} group={group} navigation={navigation} />
                        </View>
                    ))}


                </ScrollView>


            </View>


        )
    }
}

export default GroupFragment;