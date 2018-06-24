/*
*/
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Splash extends Component {
    render() {
        var greeting = "Hello world";
        return (
            <View style={styles.container}>
                <Tex style={styles.title}></Tex>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    }
})
export default Splash;