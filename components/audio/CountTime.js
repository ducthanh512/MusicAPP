/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import { StyleSheet, View, Text, Image, Platform, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
export default class CountTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: '00:00',
            pause: false,
            //   count: 0,
        }
    }

    millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    componentWillReceiveProps(nextProps) {
        if (this.interval) clearInterval(this.interval);
        var { player, pause } = nextProps;
        //console.log('componentWillReceiveProps player', pause);
        var count = 0;


        if (player != null) {
            if (!pause) {
                if (player) {
                    player.getCurrentTime((seconds) => {
                        count = seconds;
                        this.setState({
                            currentTime: this.millisToMinutesAndSeconds(seconds * 1000),
                        })
                    })

                }
                this.interval = setInterval(() => {
                    count++;
                    //  console.log('loop', count);
                    this.setState({
                        currentTime: this.millisToMinutesAndSeconds(count * 1000),
                        //   count:count,
                        //  SliderValue: this.timeToSliderValue(seconds),
                    })

                }, 1000);
            }
            else if (this.interval) clearInterval(this.interval);

        }


    }



    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        var { currentTime } = this.state;
        return (
            <Text adjustsFontSizeToFit={true} style={{ fontWeight: 'bold', flex: 10, justifyContent: 'center', color: '#fff' }}>{currentTime}</Text>
        );
    }

}