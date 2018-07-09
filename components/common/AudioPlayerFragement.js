/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, View, ScrollView, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground, Slider, ToastAndroid } from 'react-native';
import NavBackButton from './NavBackButton';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import DiskAnimation from './DiskAnimation';
import SongList from './SongList';
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
            currentTime : '00:00',
        }
    }

    componentDidMount() {
        var song = this.props.navigation.state.params.content;
        this.onPressButtonPlay(song);
    }

    _renderDotIndicator = () => {
        return <PagerDotIndicator pageCount={2} />;
    }

    onPressButtonPlay = (song) => {
     // alert('dcb');
        player = new SoundPlayer('https://dc694.4shared.com/img/NoH8deB1ee/b8c1d5b1/dlink__2Fdownload_2FNoH8deB1ee_2FGi_5FNgi_5FYu_5FC_5F-_5FH_5FNgc_5FH_5F-_5FGi_5FNgi.MP3_3Fsbsr_3De555d630b8f7b8f29333f655d9b0d92f9e3_26bip_3DMTU3LjIxMS42Ny40Mg_26lgfp_3D52_26bip_3DMTU3LjIxMS42Ny40Mg/preview.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
            if (error)
                ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
            else {
                this.setState({
                    duration: this.millisToMinutesAndSeconds(player.getDuration() * 1000),
                })
                console.log('hhe1');
                this.onSetCurrentTime();
                player.play((success) => {
                    if (!success)
                        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
                });
            }
        });

    }

    SliderValueToTime= (sliderValue) =>{

        var seconds= sliderValue*player.getDuration();
        player.setCurrentTime(seconds);
        this.setState({
            currentTime:  this.millisToMinutesAndSeconds(seconds * 1000),
            SliderValue: sliderValue
        })
    }

    timeToSliderValue = (seconds)=>{
        return seconds/player.getDuration();
    }

    onSetCurrentTime = () =>{
        console.log('hhe');
        this.interval = setInterval( () => { 
            player.getCurrentTime((seconds) => {
              //  console.log('slider ',seconds, this.timeToSliderValue(seconds));
                this.setState({
                    currentTime:  this.millisToMinutesAndSeconds(seconds * 1000),
                    SliderValue: this.timeToSliderValue(seconds),
                })
             }, 300);

            });

    }

    onPressButtonPause = (song) => {
        if (player != null) {
            if (this.state.pause) // play resume
                player.play((success) => {
                    if (!success)
                        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
                });
            else player.pause();
            this.setState({ pause: !this.state.pause });
           

        }


    }

    millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }



    render() {
        var { navigation } = this.props;
        var { pause, duration,currentTime } = this.state;
        var song = this.props.navigation.state.params.content;

        var playpausse = !pause ? require('./../../images/iconpause.png') : require('./../../images/iconplay.png');

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

                            <DiskAnimation song={song} />
                        </View>
                    </IndicatorViewPager>





                </View>
                <View style={{ flex: 20, flexDirection: 'column', justifyContent: 'center' }}>
                    <View style={{ flex: 3, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginLeft: 15, marginRight: 15 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', flex: 10, justifyContent: 'center', color: '#fff' }}>{currentTime}</Text>

                        <Slider
                            
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor="#009688"
                            value={this.state.SliderValue}
                            onValueChange={(ChangedValue) => this.SliderValueToTime(ChangedValue) }
                            style={{ justifyContent: 'center', alignItems: 'center', flex: 70, height: 25 }}
                        />

                        <Text style={{ fontSize: 16, fontWeight: 'bold', flex: 10, justifyContent: 'center', color: '#fff' }}>{duration}</Text>

                    </View>
                    <View style={{ flex: 7, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <TouchableOpacity>
                            <Image style={{ width: 50, height: 50, marginRight: 15, aspectRatio: 1, resizeMode: 'contain', backgroundColor: 'transparent' }}
                                source={require('./../../images/iconsuffle.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={{ width: 60, height: 60, marginRight: 15, aspectRatio: 1, resizeMode: 'contain', backgroundColor: 'transparent' }}
                                source={require('./../../images/iconpreview.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.onPressButtonPause(song) }}>
                            <Image style={{ width: 70, height: 70, marginRight: 15, aspectRatio: 1, resizeMode: 'contain', backgroundColor: 'transparent' }}
                                source={playpausse} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={{ width: 60, height: 60, marginRight: 15, aspectRatio: 1, resizeMode: 'contain', backgroundColor: 'transparent' }}
                                source={require('./../../images/iconnext.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={{ width: 50, height: 50, marginRight: 15, aspectRatio: 1, resizeMode: 'contain', backgroundColor: 'transparent' }}
                                source={require('./../../images/iconrepeat.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        )
    }
}

export default AudioPlayerFragement;