/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = { timer: 0 }

    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ timer: this.state.timer + 1 })

        }, 1000)
    }

    render() {
        var greeting = "Hello world";
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{greeting}  {this.state.timer}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(32,53,70)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white'
    }
})
export default Splash;