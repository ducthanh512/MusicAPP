/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, TouchableOpacity,
  View, Animated, Image,
  Easing, Dimensions
} from 'react-native';
var { width, height } = Dimensions.get('window');

export default class DiskAnimation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rotateValue: new Animated.Value(0),
    }
  }


  componentDidMount() {
    this.rotateAnimation();
  }

  rotateAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.rotateValue, {
        toValue: 100,
        duration: 10000,
        easing: Easing.linear
      }),
      Animated.timing(this.state.rotateValue, {
        toValue: 0,
        duration: 0,
      })
    ]).start(() => {
      this.rotateAnimation();
    })
  }
  render() {
    const { song } = this.props;
    const interpolationRotateAnimation = this.state.rotateValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <View style={{ top:0, width:width, position: 'absolute', alignItems:'center', justifyContent:'center', alignSelf: 'center', }}>
          <Text style={{ color: 'white', fontSize: 20, }}>{song.name}</Text>
        </View>

        <Animated.Image
          source={{ uri: song.image }}
          style={[styles.imageView,
          { transform: [{ rotate: interpolationRotateAnimation }] }
          ]}>
        </Animated.Image>
        {/* <TouchableOpacity style={styles.button}
         onPress={this.rotateAnimation}
        >
          <Text style={styles.buttonText}>Animate</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',    
  },
  animationView: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
  button: {
    backgroundColor: "steelblue",
    height: 45,
    marginTop: 20,
    alignSelf: "center"
  },
  buttonText: {
    color: 'white',
    padding: 12,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 18
  },
  imageView: {
    width: 350,
    height: 350,
    backgroundColor: 'transparent',
    alignSelf: "center",
    borderRadius: 350 / 2,
  }
});