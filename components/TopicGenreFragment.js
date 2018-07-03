/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */

import React, { Component } from 'react';
import { Text, Platform, Image, View, ScrollView } from 'react-native';
import PlayList from './PlayList';
import TopicGenre from './TopicGenre';

class TopicGenreFragment extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getTopicGenres();

    }

    render() {
        var { topicGenres } = this.props;
        // console.log('topicGenres Render!!', topicGenres);

        return (
            <View style={{ flex: 1, flexDirection: 'column', marginTop: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text
                        style={{ fontSize: 25, color: '#3e3b3b', alignSelf: 'center', marginLeft: 20 }}>
                        Topic and Genre
                    </Text>

                    <Text
                        style={{ fontSize: 18, color: '#913677', alignSelf: 'center', marginRight: 20 }}>
                        View more
                 </Text>

                </View>


                <View style={{ marginTop: 20 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {topicGenres.map((topicGenre, index) => (
                            <TopicGenre key={index} topicGenre={topicGenre} />
                        ))}
                    </ScrollView>
                </View>

            </View>

        )
    }
}

export default TopicGenreFragment;