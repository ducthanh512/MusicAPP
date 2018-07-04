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
import Advert from './Advert';
export default class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            advertServer: []
        }

    }

    componentWillReceiveProps(previousProps) {
        var adverts = previousProps.adverts;
        this.setState({
            advertServer: adverts,
        });
    }

    componentDidMount() {

        this.props.getAdverts();
    }

    render() {
        var { adverts,navigation } = this.props;
        var pageCount = adverts && adverts.length > 0 ? adverts.length : 1;
        return (
            <View style={{ flex: 1 }}>
                <IndicatorViewPager
                    style={{ height: 220, flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}
                    indicator={this._renderDotIndicator(pageCount)}>
                    {adverts.map((advert, index) => (
                        <View key={index}>
                            <Advert advert={advert} navigation ={navigation} />
                        </View>
                    ))}
                </IndicatorViewPager>

            </View>
        );
    }

    _renderDotIndicator = (pageCount) => {
        return <PagerDotIndicator pageCount={2} />;
    }


}