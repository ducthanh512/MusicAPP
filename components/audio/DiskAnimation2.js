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
var flagAnimation = false;

export default class DiskAnimation2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rotateValue: new Animated.Value(0),
      animationPause: false,
    }
  }


  componentDidMount() {
    //  var { animationPause } = this.state;
    this.rotateAnimation();
  }

  componentWillReceiveProps(nextProps) {
    var { pause } = nextProps;
   // console.log('componentWillReceiveProps diskanimation pause:', pause);

    this.setState({animationPause:pause})
    flagAnimation = pause;

    this.rotateAnimation();

  }

  rotateAnimation = () => {

    var diskAnimation1 = Animated.timing(this.state.rotateValue, {
      toValue: 100,
      duration: 10000,
      easing: Easing.linear
    });

    var diskAnimation2 = Animated.timing(this.state.rotateValue, {
      toValue: 0,
      duration: 0,
    });

   // console.log('animationPause diskAnimation0',flagAnimation );

    if (flagAnimation) {
      diskAnimation1.stop();
      diskAnimation2.stop();
      this.setState({rotateValue: new Animated.Value(0),})
    }
    else {
      diskAnimation1.start(()=>{
        var {animationPause} = this.state;
       // console.log('animationPause diskAnimation1',flagAnimation );
        if(flagAnimation){
          diskAnimation1.stop();
          diskAnimation2.stop();
          this.setState({rotateValue: new Animated.Value(0),})
        }
        else{
          diskAnimation2.start(()=>{
            var animationPause2 = this.state.animationPause;
          //  console.log('animationPause diskAnimation2',flagAnimation );
            if(flagAnimation){
              diskAnimation1.stop();
              diskAnimation2.stop();
              this.setState({rotateValue: new Animated.Value(0),})
            }
            else diskAnimation1.start();
          })  
        }
      });
    }

  }
  render() {
    console.log('animationPause render');
    const { song } = this.props;
    const interpolationRotateAnimation = this.state.rotateValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Animated.Image
          source={{ uri: song.image }}
          style={[styles.imageView,
          { transform: [{ rotate: interpolationRotateAnimation }] }
          ]}>
        </Animated.Image>
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
    width: Dimensions.get('window').width*75/100,
    height: Dimensions.get('window').width*75/100,
    backgroundColor: 'transparent',
    alignSelf: "center",
    borderRadius: (Dimensions.get('window').width*75/100) / 2,
  }
});