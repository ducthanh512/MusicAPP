/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import { StyleSheet, View, Text, Image, Platform } from 'react-native';
import React, { Component } from 'react';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import { red } from 'ansi-colors';

export default class Advert extends Component {
    render() {
        var { advert } = this.props;

        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}>

                <View style={{
                    position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, flex: 1,
                }}>
                    <Image source={{ uri: advert.largeImage }}
                        style={{ height: null, width: null, flex: 1, backgroundColor: 'transparent', justifyContent: 'center' }} />
                </View>
                <View style={{ flex: 67,backgroundColor: 'rgba(0,0,0,0.3)', }} />
                <View
                    style={{
                        flex: 30,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                    }}>
                    <View style={{
                        width: 80, padding: 2,borderRadius:50
                    }}>
                        <Image style={{ borderRadius:15,overlayColor:'yellow', width: 70, height: 60, aspectRatio: 1, resizeMode: 'contain', padding: 10, marginLeft: 10,}}
                            source={{ uri: advert.smallImage }}></Image>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={{
                            color: "white", fontSize: 17, fontWeight: 'bold', marginRight: 40, marginLeft: 10
                        }}>{advert.name}</Text>
                        <Text style={{
                            color: "white", fontSize: 12, marginRight: 40, marginLeft: 10
                        }}>{advert.content}</Text>
                    </View>
                </View>
                <View style={{ flex: 3,backgroundColor: 'rgba(0,0,0,0.3)', }} />
            </View>
        );
    }

}