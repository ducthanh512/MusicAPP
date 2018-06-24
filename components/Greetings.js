/*
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