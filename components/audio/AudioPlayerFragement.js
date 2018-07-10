/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, View, ScrollView, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground, Slider, AppState,StyleSheet } from 'react-native';
import NavBackButton from './../common/NavBackButton';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import DiskAnimation from '../audio/DiskAnimation';
import SongList from './../common/SongList';
import Toast from 'react-native-simple-toast';
import CountTime from './CountTime';
import SeekBar from './SeekBar';
var SoundPlayer = require('react-native-sound');
var player = null;
class AudioPlayerFragement extends Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props);
        this.state = {
            SliderValue: 0,
            pause: false,
            duration: '00:00',
            currentTime: '00:00',
            flagState :false,
            appState: AppState.currentState,
        }
    }



    componentWillUnmount() {
        if (player != null) {
            player.stop();
            //   this.setState({ pause: false });
        }
    }


    componentDidMount() {

        var song = this.props.navigation.state.params.content;
        this.onPressButtonPlay(song);
    }

    _renderDotIndicator = () => {
        return <PagerDotIndicator pageCount={2} />;
    }

    millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    onPressButtonPlay = (song) => {
        // alert('dcb');
        player = new SoundPlayer('https://s1.mp3.aka.zdn.vn/e7563f83e7c70e9957d6/727637092126384063?authen=exp=1531284626~acl=/e7563f83e7c70e9957d6/*~hmac=888de179e19f474fef41fcbc8cfec2dc&filename=1234-Chi-Dan.mp3', null, (error) => {
            if (error) {
                Toast.show('Error when init SoundPlayer :(((');
                console.log('hhe1', error);
            }
            else {
                this.setState({
                    duration: this.millisToMinutesAndSeconds(player.getDuration() * 1000),
                })

                //   this.onSetCurrentTime();
                player.play((success) => {
                    if (!success) {
                        Toast.show('Error when play SoundPlayer :(((');
                        console.log('hhe1', error);
                    }
                });
            }
        });

    }

    // SliderValueToTime= (sliderValue) =>{

    //     var seconds= sliderValue*player.getDuration();
    //     player.setCurrentTime(seconds);
    //     this.setState({
    //         currentTime:  this.millisToMinutesAndSeconds(seconds * 1000),
    //         SliderValue: sliderValue
    //     })
    // }



    onPressButtonPause = (song) => {
        if (player != null) {
            if (this.state.pause) // play resume
                player.play((success) => {
                    if (!success)
                        Toast.show('Error when play SoundPlayer :(((');
                });
            else player.pause();
            this.setState({ pause: !this.state.pause });
        }

    }


    onChangeSeekBarHandle = (ChangedValue) => {
        console.log('onChangeSeekBarHandle AudioPlayerFragement', ChangedValue);
        var seconds = ChangedValue * player.getDuration();
        player.setCurrentTime(seconds);
        this.setState({ flagState: !this.state.flagState });
        // this.setState({
        //     currentTime: this.millisToMinutesAndSeconds(seconds * 1000),
        //     SliderValue: sliderValue
        // })
    }

    render() {
       
        var { navigation } = this.props;
        var { pause, duration, currentTime } = this.state;
        var song = this.props.navigation.state.params.content;

        var playpausse = !pause ? require('./../../images/iconpause.png') : require('./../../images/iconplay.png');

        console.log('AudioPlayerFragement Render pause:', pause);
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#4e1676' }}>
                <NavBackButton navigation={navigation} title='Music App' />

                <View style={{ marginTop: 40, flex: 80, }}>
                    <IndicatorViewPager
                        style={{ height: null, flex: 1 }}
                        indicator={this._renderDotIndicator()}>
                        <View>
                            <ScrollView>
                                <SongList index={0} song={song} />
                            </ScrollView>

                        </View>
                        <View>

                            <DiskAnimation song={song} pause={pause} />
                        </View>
                    </IndicatorViewPager>
                </View>
                <View style={{ flex: 20, flexDirection: 'column', justifyContent: 'center' }}>
                    <View style={{ flex: 3, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginLeft: 15, marginRight: 15 }}>
                        <CountTime player={player} pause={pause} />
                        <SeekBar player={player} pause={pause} onValueChange={this.onChangeSeekBarHandle} />


                        <Text adjustsFontSizeToFit={true} style={{ fontWeight: 'bold', flex: 10, justifyContent: 'center', color: '#fff' }}>{duration}</Text>

                    </View>
                    <View style={{ flex: 7, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <TouchableOpacity style={styles.buttonControl}>
                            <Image style={{ width: 50, height: 50, marginRight: 15, aspectRatio: 1, resizeMode: 'contain', backgroundColor: 'transparent' }}
                                source={require('./../../images/iconsuffle.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonControl}>
                            <Image style={{ width: 60, height: 60, marginRight: 15, aspectRatio: 1, resizeMode: 'contain', backgroundColor: 'transparent' }}
                                source={require('./../../images/iconpreview.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonControl} onPress={() => { this.onPressButtonPause(song) }}>
                            <Image style={{ width: 70, height: 70, marginRight: 15, aspectRatio: 1, resizeMode: 'contain', backgroundColor: 'transparent' }}
                                source={playpausse} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonControl}>
                            <Image style={{ width: 60, height: 60, marginRight: 15, aspectRatio: 1, resizeMode: 'contain', backgroundColor: 'transparent' }}
                                source={require('./../../images/iconnext.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonControl}>
                            <Image style={{ width: 50, height: 50, marginRight: 15, aspectRatio: 1, resizeMode: 'contain', backgroundColor: 'transparent' }}
                                source={require('./../../images/iconrepeat.png')} />
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    buttonControl: {
      flex: 20,
      justifyContent: 'center',
      alignItems:'center',
      alignSelf: 'center',
      // alignItems: 'center',    
    },
})

export default AudioPlayerFragement;