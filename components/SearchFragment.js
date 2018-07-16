/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Container, Content, Icon } from 'native-base';
import { Platform, View, Text, TextInput, Dimensions, StyleSheet, ScrollView } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Makiko } from 'react-native-textinput-effects';
import SongList from './../components/common/SongList';
import FavouriteSong from './../components/FavouriteSong';

var { width, height } = Dimensions.get('window');
class SearchFragment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
        }

    }

    componentDidMount() {
       
    }
    static navigationOptions = {
        header: null ,
        tabBarIcon: ({ tintColor }) => {
            return <Icon name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} style={{ color: tintColor }}></Icon>
        }
    }
    handleSearch = () => {
        var { textValue } = this.state;
        this.props.searchSongs(textValue);
    }
    render() {
        const { navigation, songs } = this.props;
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center',marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <View style={{ flex: 10, backgroundColor: '#4e1676', justifyContent: 'center' }}>

                    <Makiko
                        label={'Search'}
                        iconClass={FontAwesomeIcon}
                        iconName={'heart'}
                        iconColor={'white'}
                        inputStyle={{ color: '#db786d' }}
                        onChangeText={(text) => { this.setState({ textValue: text }) }}
                        onSubmitEditing={this.handleSearch}
                    />
                </View>
                <View style={{ flex: 90, flexDirection: 'column', justifyContent: 'center', marginTop:10 }}>
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


const styles = StyleSheet.create({
    searchSection: {
        flex: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4e1676',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
});

export default SearchFragment;