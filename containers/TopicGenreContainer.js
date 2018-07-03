
/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTopicGenres} from './../actions/index';
import TopicGenreFragment from './../components/TopicGenreFragment';
const mapStateToProps = (state) =>{
    //console.log('state.questionsReducer',state.questionsReducer);
    return {
        topicGenres : state.topicGenreReducer,
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return {
        getTopicGenres : ()=>{
            dispatch(fetchTopicGenres())
        }
    }
}

const TopicGenreContainer = connect(mapStateToProps, mapDispatchToProps)(TopicGenreFragment)

export default TopicGenreContainer;