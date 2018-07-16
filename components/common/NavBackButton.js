/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import React from 'react';
import { I18nManager, Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import type { ColorPropType } from 'react-native';
import { Icon } from 'native-base';
type Props = {
 //   title?: string,
  //  pressColorAndroid?: ColorPropType
};

const NavBackButton = ({navigation,group }: Props) => (
    <TouchableOpacity
        onPress={()=>{navigation.goBack()}}
        style={[styles.container,{marginTop: Platform.OS === 'ios' ? 34 : 0, marginBottom: Platform.OS === 'ios' ? 5 : 0}]}
    >
        <View style={styles.flexRowCentered}>
        <Icon name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} style={{ alignSelf: 'center', fontSize: 30, color:group? '#000000':'#ffffff' }} />
        </View>
    </TouchableOpacity>
);

NavBackButton.defaultProps = {
 //   title: 'Back',
   // pressColorAndroid: 'rgba(0, 0, 0, .2)'
};

export default NavBackButton;

const styles = {
    container: {
        position: 'absolute',
        left: 0,
        backgroundColor: 'transparent',
        width: 50,
        height:50,
    },
    flexRowCentered: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iosText: {
        color: '#007AFF',
        fontSize: 17,
    }
};
