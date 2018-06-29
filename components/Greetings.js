/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text } from 'react-native';

class Greetings extends Component {
    render() {
        var greeting = "Hello world";
        return (
            <Text>Hello {this.props.name}</Text>

        )
    }
}

export default Greetings;