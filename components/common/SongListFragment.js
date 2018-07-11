/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import NavBackButton from './NavBackButton';

const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 110;
const HEADER_IMAGE_BACKGROUND_EXPANDED_HEIGHT = HEADER_EXPANDED_HEIGHT - 60;
const HEADER_IMAGE_BACKGROUND_COLLAPSED_HEIGHT = HEADER_COLLAPSED_HEIGHT - 60;
let screenwWidth = Dimensions.get('window').width;
const { width: SCREEN_WIDTH } = Dimensions.get("screen")
import SongList from './SongList';

export default class SongListFragment extends Component {

  componentDidMount() {
   // console.log('Songlist Fragment componentDidMount');
    var contentParam = this.props.navigation.state.params.content;
    var typeParam = this.props.navigation.state.params.type;
    this.props.resetSongList();
    switch (typeParam) {
      case "advert":
        this.props.getAdvertSongs(contentParam.idSong);
        break;
      case "playlist":
        this.props.getPlayListSongs(contentParam.id);
        break;

      case "topicGenre":
        this.props.getGenreSongs(contentParam.id);
        break;

      case "album":
        this.props.getAlbumSongs(contentParam.id);
        break;
    }


  }

  static navigationOptions = {
    header: null,
  }
  constructor() {
    super();

    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  render() {

    var { songs } = this.props;
    var contentParam = this.props.navigation.state.params.content;
    //console.log('SongList Render1!!', JSON.stringify(this.props.navigation));
    //console.log('SongList Render1!!', songs);
    // StatusBar.setHidden(false);
    const { navigation } = this.props;

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: 'clamp'
    });
    const headerImageBackgroundHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_IMAGE_BACKGROUND_EXPANDED_HEIGHT - HEADER_IMAGE_BACKGROUND_COLLAPSED_HEIGHT],
      outputRange: [HEADER_IMAGE_BACKGROUND_EXPANDED_HEIGHT, HEADER_IMAGE_BACKGROUND_COLLAPSED_HEIGHT],
      extrapolate: 'clamp'
    });
    const headerTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    const heroTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    const smallImageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    const headerTitle = contentParam.name;

    return (
      <Animated.View style={styles.container}>
        <Animated.View style={[styles.header, { height: headerHeight, backgroundColor: 'transparent' }]}>
          <Animated.View style={{
            position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, flex: 1,
          }}>
            <Animated.Image
              blurRadius={Platform.OS == 'ios' ? 5 : 2}
              source={{ uri: contentParam.image }}
              style={{ height: headerImageBackgroundHeight, width: null, backgroundColor: 'transparent', justifyContent: 'center' }} />
          </Animated.View>


          <Animated.View style={{
            position: 'absolute', bottom: 125, height: 150, width: 150, justifyContent: 'center', alignSelf: 'center', opacity: smallImageOpacity
          }}>
            <Image source={{ uri: contentParam.icon }}
              style={{ height: null, width: null, flex: 1, backgroundColor: 'transparent', justifyContent: 'center' }} />
          </Animated.View>


          <NavBackButton navigation={navigation} title='' />
          <Animated.Text style={{ textAlign: 'center', fontSize: 18, color: 'white', marginTop: 5, opacity: headerTitleOpacity }}>{headerTitle}</Animated.Text>
          <Animated.Text style={{ width: screenwWidth, textAlign: 'center', fontSize: 20, color: 'white', position: 'absolute', bottom: 90, opacity: heroTitleOpacity }}>{headerTitle}</Animated.Text>


          <Animated.View style={{
            position: 'absolute', bottom: 0, height: 90, width: 110, justifyContent: 'center', alignSelf: 'center',
          }}>
            <TouchableOpacity style={{ bottom: 0, justifyContent: 'center' }}
              onPress={() => { }}>
              <Image
                style={{ height: 90, width: 110, resizeMode: 'cover', borderRadius: 10 }}
                source={require('./../../images/Yugioh2.png')} />
            </TouchableOpacity>
          </Animated.View>

        </Animated.View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          onScroll={Animated.event(
            [{
              nativeEvent: {
                contentOffset: {
                  y: this.state.scrollY
                }
              }
            }])
          }
          scrollEventThrottle={16}>
          {songs.map((song, index) => (
            <SongList key={index} index={index} song={song} navigation={navigation} />
          ))}
        </ScrollView>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    padding: 16,
    paddingTop: HEADER_EXPANDED_HEIGHT
  },
  header: {
    backgroundColor: 'lightblue',
    position: 'absolute',
    width: SCREEN_WIDTH,
    top: 0,
    left: 0,
    zIndex: 9999
  },
  title: {
    marginVertical: 16,
    color: "black",
    fontWeight: "bold",
    fontSize: 24
  }
});