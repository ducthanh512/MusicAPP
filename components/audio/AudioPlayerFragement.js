/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, View, ScrollView, Image, Dimensions, TextInput, TouchableOpacity, ImageBackground, Slider, AppState, StyleSheet } from 'react-native';
import NavBackButton from './../common/NavBackButton';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import DiskAnimation from '../audio/DiskAnimation';
import SongList from './../common/SongList';
import Toast from 'react-native-simple-toast';
import CountTime from './CountTime';
import SeekBar from './SeekBar';
import { Icon } from 'native-base';
import Loader from 'react-native-modal-loader';
var SoundPlayer = require('react-native-sound');
SoundPlayer.setCategory('Playback');
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
            flagState: false,
            appState: AppState.currentState,
            songIndex: 0,
            isRepeat : false,
            isShuffle:false,
            isLoading: false
        }
    }

    showLoader = () => {
        this.setState({ isLoading: true });
      };

      hideLoader = () => {
        this.setState({ isLoading: false });
      };

    componentWillUnmount() {
        if (player != null) {
            player.stop();
               this.setState({ pause: false });
        }
    }


    componentDidMount() {

           var songs = this.props.navigation.state.params.content;
          var { songIndex } = this.state;
           this.onPressButtonPlay(songs[songIndex]);
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
        this.showLoader();
        this.setState({
            duration: '00:00',
        })
        player = new SoundPlayer(song.link, null, (error) => {
            if (error) {
                Toast.show('Error when init SoundPlayer :(((');
              //  console.log('hhe1', error);
            }
            else {
                this.hideLoader();
                this.setState({
                    duration: this.millisToMinutesAndSeconds(player.getDuration() * 1000),
                })

                //   this.onSetCurrentTime();
                player.play((success) => {
                    if (!success) {
                        Toast.show('Error when play SoundPlayer :(((');
                      //  console.log('hhe1', error);
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

    onPressButtonNext = () => {
        if (player != null) {
            player.stop();
        }

        var { songIndex } = this.state;
        var songs = this.props.navigation.state.params.content;
        console.log('songs.length', songs.length);
        songIndex = songIndex < songs.length - 1 ? songIndex + 1 : songIndex;
        console.log('songIndex', songIndex);
        this.onPressButtonPlay(songs[songIndex]);
        this.setState({ songIndex })
    }

    onPressButtonPrevious = () => {
        if (player != null) {
            player.stop();
        }

        var { songIndex } = this.state;
         var songs = this.props.navigation.state.params.content;
        // console.log('songs.length', songs.length);
        songIndex = songIndex > 0 ? songIndex - 1 : songIndex;
        //  console.log('songIndex', songIndex);
       this.onPressButtonPlay(songs[songIndex]);
        this.setState({ songIndex })
    }


    onChangeSeekBarHandle = (ChangedValue) => {
        // console.log('onChangeSeekBarHandle AudioPlayerFragement', ChangedValue);
        var seconds = ChangedValue * player.getDuration();
        player.setCurrentTime(seconds);
        this.setState({ flagState: !this.state.flagState });
        // this.setState({
        //     currentTime: this.millisToMinutesAndSeconds(seconds * 1000),
        //     SliderValue: sliderValue
        // })
    }

    onSelectSong = (index) => {
        if (player != null) {
            player.stop();
        }

        var { songIndex } = this.state;
          var songs = this.props.navigation.state.params.content;
        // console.log('songs.length', songs.length);
        songIndex = index;
        //  console.log('songIndex', songIndex);
          this.onPressButtonPlay(songs[songIndex]);
        this.setState({ songIndex })
    }

    onPressButtonRepeat = ()=>{
        this.setState({ isRepeat: !this.state.isRepeat });
    }

    onPressButtonShuffle = ()=>{
        this.setState({ isShuffle: !this.state.isShuffle });
    }

    render() {

        var { navigation } = this.props;
        var { pause, duration, currentTime ,isShuffle, isRepeat} = this.state;
         var songs = this.props.navigation.state.params.content;
        var { songIndex,isLoading } = this.state;
          var song = songs[songIndex];

        var iosPlayPauseButton = pause ? 'ios-play' : 'ios-pause';
        var androidPauseButton = pause? 'md-play':'md-pause';

        var shuffleButtonCollor =  isShuffle ? 'blue': 'white';
        var repeatButtonCollor =  isRepeat ? 'blue': 'white';

      //  var playpausse = !pause ? require('./../../images/iconpause.png') : require('./../../images/iconplay.png');

        console.log('AudioPlayerFragement Render pause:', pause);
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#4e1676' }}>
            <Loader loading={this.state.isLoading} color="#ff66be" />
                <NavBackButton navigation={navigation} title='Music App' />

                <View style={{ marginTop: 40, flex: 80, }}>
                    <IndicatorViewPager
                        style={{ height: null, flex: 1 }}
                        indicator={this._renderDotIndicator()}>
                        <View>
                            <ScrollView>

                                {songs.map((song, index) => (
                                    <SongList key={index} onSelectSong={this.onSelectSong} songIndex={songIndex} index={index} song={song} navigation={navigation} audioPage={true} />
                                ))}
                            </ScrollView>

                        </View>
                        <View>

                            <DiskAnimation song={song} pause={pause} />
                        </View>
                    </IndicatorViewPager>
                </View>
                <View style={{ flex: 20, flexDirection: 'column', justifyContent: 'center' }}>
                    <View style={{ flex: 3, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginRight: 5 }}>
                        <CountTime player={player} pause={pause} isLoading={isLoading} />
                        <SeekBar player={player} pause={pause} isLoading={isLoading} onValueChange={this.onChangeSeekBarHandle} />


                        <Text adjustsFontSizeToFit={true} style={{ fontWeight: 'bold', flex: 10, justifyContent: 'flex-end', color: '#fff' }}>{duration}</Text>

                    </View>
                    <View style={{ flex: 7, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <TouchableOpacity style={styles.buttonControl}  onPress={() => { this.onPressButtonShuffle() }}>
                        <Icon name={Platform.OS === 'ios' ? 'ios-shuffle' : 'md-shuffle'} style={{ alignSelf: 'center', fontSize: 50, color: shuffleButtonCollor }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonControl} onPress={() => { this.onPressButtonPrevious() }}>
                        <Icon name={Platform.OS === 'ios' ? 'ios-skip-backward' : 'md-skip-backward'} style={{ alignSelf: 'center', fontSize: 50, color: '#ffffff' }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonControl} onPress={() => { this.onPressButtonPause(song) }}>
                        <Icon name={Platform.OS === 'ios' ? iosPlayPauseButton : androidPauseButton} style={{ alignSelf: 'center', fontSize: 50, color: '#ffffff' }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonControl} onPress={() => { this.onPressButtonNext() }}>
                            <Icon name={Platform.OS === 'ios' ? 'ios-skip-forward' : 'md-skip-forward'} style={{ alignSelf: 'center', fontSize: 50, color: '#ffffff' }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonControl} onPress={() => { this.onPressButtonRepeat() }}>

                            <Icon name={Platform.OS === 'ios' ? 'ios-repeat' : 'md-repeat'} style={{ alignSelf: 'center', fontSize: 50, color: repeatButtonCollor }} />
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
        alignItems: 'flex-end',

        // position: 'absolute', right: 0

        // alignItems: 'center',    
    },
})

export default AudioPlayerFragement;