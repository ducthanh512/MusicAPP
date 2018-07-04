/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import React from 'react';
import { I18nManager, Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import type { ColorPropType } from 'react-native';

type Props = {
    title?: string,
    pressColorAndroid?: ColorPropType
};

const NavBackButton = ({ title, pressColorAndroid,navigation }: Props) => (
    <TouchableOpacity
        onPress={()=>{navigation.goBack()}}
        style={styles.container}
    >
        <View style={styles.flexRowCentered}>
            <Image
                style={[styles.icon, { tintColor: '#FFF' }]}
                source={require('./../../images/back-icon.png')}
            />
            {Platform.OS === 'ios' &&
            <Text numberOfLines={1} style={styles.iosText}>{title}</Text>
            }
        </View>
    </TouchableOpacity>
);

NavBackButton.defaultProps = {
    title: 'Back',
    pressColorAndroid: 'rgba(0, 0, 0, .2)'
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