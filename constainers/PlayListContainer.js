
/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPlaylists} from './../actions/index';
import  PlayListFragment from './../components/PlayListFragment';
const mapStateToProps = (state) =>{
    //console.log('state.questionsReducer',state.questionsReducer);
    return {
        playlists : state.playlistReducer,
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return {
        getPlaylists : ()=>{
            dispatch(fetchPlaylists())
        }
    }
}

const PlayListContainer = connect(mapStateToProps, mapDispatchToProps)(PlayListFragment)

export default PlayListContainer;