/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';
import { Platform } from 'react-native';

class Search extends Component {
    static navigationOptions ={
        tabBarIcon:({tintColor})=>{
            return <Icon  name={Platform.OS==='ios'?'ios-search' : 'md-search'} style= {{color:tintColor}}></Icon>
        }
    }
    render() {
        return (
            <Container>
                <Content>
                    <Text>This is PlanetTab Screen</Text>
                </Content>
            </Container >

        )
    }
}

export default Search;