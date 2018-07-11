/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import { StyleSheet, View, Text, Image, Platform, TouchableOpacity,Slider } from 'react-native';
import React, { Component } from 'react';
export default class SeekBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SliderValue: 0,
            pause: false,
            //   count: 0,
        }
    }

    millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    timeToSliderValue = (seconds,player) => {
        return seconds / player.getDuration();
    }

    componentWillReceiveProps(nextProps) {
        if (this.interval) clearInterval(this.interval);
        var { player,pause } = nextProps;
        //console.log('componentWillReceiveProps Seekbar', player);
        var count = 0;
        if (player != null) {
            if (!pause)
            {
                if (player) player.getCurrentTime((seconds) => count = seconds)
                this.interval = setInterval(() => {
                    count++;
                    this.setState({
                        SliderValue: this.timeToSliderValue(count,player),
                    })
        
                }, 1000);
            } 
            else  if (this.interval) clearInterval(this.interval);
        }

    }



    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onSetCurrentTime = () => {

        var { player } = this.props;
        this.interval = setInterval(() => {
            player.getCurrentTime((seconds) => {
                //  console.log('slider ',seconds, this.timeToSliderValue(seconds));
                this.setState({
                    currentTime: this.millisToMinutesAndSeconds(seconds * 1000),
                    //  SliderValue: this.timeToSliderValue(seconds),
                })

            }, 300);

        });
    }

    render() {
        var { currentTime } = this.state;
        return (
            <Slider
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#009688"
                value={this.state.SliderValue}
                onValueChange={(ChangedValue) => this.props.onValueChange(ChangedValue)}
                style={{ justifyContent: 'center', alignItems: 'center', flex: 60, height: 25 }}
            />
        );
    }

}