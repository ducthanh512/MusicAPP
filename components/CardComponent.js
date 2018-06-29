/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import {
    Container, Text, Content, Icon,
    Card, CardItem, Thumbnail, Body, Left, Right, Button
} from 'native-base';
import { Platform, Image } from 'react-native';
import Banner from './Banner';
class CardComponent extends Component {
    render() {
        return (
            <Card>
                <CardItem cardBody>
                    <Banner />
                </CardItem>
                <CardItem cardBody>
                    {/* <Image source={require('../images/tiger.jpg')}
                        style={{ height: 200, width: null, flex: 1 }}
                    ></Image> */}
                </CardItem>
            </Card>
        )
    }
}

export default CardComponent;