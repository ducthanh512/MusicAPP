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
    var advertParam = this.props.navigation.state.params;
    this.props.getAdvertSongs(advertParam.idSong);

 }

  static navigationOptions = {
    header:null,
    }
  constructor() {
    super();

    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  render() {

    var { songs } = this.props;
    var advertParam = this.props.navigation.state.params;
    console.log('SongList Render1!!', JSON.stringify(this.props.navigation));
    // console.log('SongList Render1!!', songs);
   // StatusBar.setHidden(false);
    const {navigation} = this.props;
    const str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ultrices ante. Duis vulputate lorem non tortor pharetra, aliquet aliquet leo efficitur. Ut sed rutrum nisi. Pellentesque facilisis erat sit amet mi ornare, et dapibus tortor congue. Integer vulputate magna a vehicula accumsan. Cras nec nunc consequat, volutpat felis vitae, pulvinar nibh. Vestibulum lacinia in tortor vel maximus. Suspendisse semper dolor ligula. Praesent pellentesque suscipit enim, at dictum nisl pellentesque non. Phasellus nec consectetur magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed condimentum porttitor elit ut dignissim. Nunc nec libero a orci porttitor accumsan eget sed diam. Cras dignissim, nulla sed laoreet accumsan, mi quam egestas mauris, id posuere purus lorem sagittis purus. Duis sollicitudin neque ac aliquet sollicitudin.
In eros est, sollicitudin sit amet risus eget, porttitor pulvinar ipsum. Nulla eget quam arcu. Mauris vel odio cursus, hendrerit augue et, ultricies massa. Phasellus pharetra et libero id semper. Sed sollicitudin commodo mi, nec efficitur sem congue vitae. Ut pellentesque augue ut lacus finibus sollicitudin. Donec a auctor augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam vitae convallis nulla. Maecenas venenatis lorem at mi commodo pharetra. Mauris finibus hendrerit magna, sit amet ultrices turpis aliquet nec. Proin et diam suscipit, sollicitudin risus ac, porta nibh.
Aliquam pretium, elit maximus vehicula lobortis, neque dolor tempor nisl, sit amet interdum erat turpis eu metus. Sed semper libero ac diam finibus, ac interdum orci placerat. Donec nec erat ac erat rhoncus blandit. Nunc felis dui, semper eu porttitor in, porttitor vitae eros. In vel mattis est, vel molestie dui. Nulla semper nisl tempor scelerisque egestas. Duis faucibus, elit id accumsan aliquet, turpis felis scelerisque felis, quis tincidunt felis massa nec eros. Vivamus pellentesque congue velit finibus porttitor. Pellentesque eu mi lacinia sapien fermentum tincidunt sit amet eu nisl. Suspendisse pharetra ex in magna molestie venenatis.
Suspendisse non gravida tortor. Donec tristique ipsum eget arcu aliquet molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus purus eget accumsan maximus. Duis eu iaculis arcu. Donec iaculis, sem vel condimentum maximus, lectus nisl pellentesque dolor, non ullamcorper sapien lectus sed enim. Aenean et leo nisi. Nulla viverra magna id luctus fermentum. Donec et mauris placerat, mollis elit lacinia, cursus lacus. Donec aliquet libero arcu, non consectetur elit maximus sit amet. Quisque lacinia, libero et fermentum rutrum, lorem arcu tincidunt ante, sed iaculis velit tortor non lacus.
Sed accumsan lectus laoreet mollis cursus. Phasellus sagittis vulputate erat, non tempus dui pellentesque vel. Fusce imperdiet nulla vitae mauris facilisis bibendum. Fusce vestibulum fringilla orci, sit amet euismod nunc eleifend id. Curabitur mattis dolor at odio maximus lacinia. Vivamus ornare lorem sed augue faucibus, vel volutpat lacus elementum. Suspendisse potenti.`


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

    const headerTitle = 'HEADER'

    return (
      <Animated.View style={styles.container}>
        <Animated.View style={[styles.header, { height: headerHeight, backgroundColor:'transparent'}]}>        
          <Animated.View style={{
            position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, flex: 1,
          }}>
            <Animated.Image 
            blurRadius={ Platform.OS == 'ios' ? 5 : 2 } 
            source={{ uri: advertParam.largeImage }}
              style={{ height: headerImageBackgroundHeight, width: null, backgroundColor: 'transparent', justifyContent: 'center' }} />
          </Animated.View>


          <Animated.View style={{
            position: 'absolute', bottom: 125, height: 150, width: 150, justifyContent: 'center', alignSelf: 'center', opacity:smallImageOpacity
          }}>
            <Image source={{uri: advertParam.smallImage}}
              style={{ height: null, width: null, flex: 1, backgroundColor: 'transparent', justifyContent: 'center'}} />
          </Animated.View>


            <NavBackButton navigation = {navigation} title='' />
            <Animated.Text style={{ textAlign: 'center', fontSize: 18, color: 'white', marginTop: 5, opacity: headerTitleOpacity }}>{headerTitle}</Animated.Text>
          <Animated.Text style={{ width:screenwWidth, textAlign: 'center', fontSize: 20, color: 'white', position: 'absolute', bottom: 90, opacity: heroTitleOpacity }}>{headerTitle}</Animated.Text>


  <Animated.View style={{
            position: 'absolute', bottom: 0, height: 90, width: 110, justifyContent: 'center', alignSelf: 'center',
          }}>
          <TouchableOpacity style={{bottom:0, justifyContent:'center'}}
                onPress={() => { }}>
                <Image
                    style={{ height: 90, width: 110,  resizeMode: 'cover', borderRadius: 10 }}
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
                            <SongList key={index} index={index} song={song} />
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