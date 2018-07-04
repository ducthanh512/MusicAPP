
/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchFavouriteSongs,fetchAdvertSongs} from './../actions/index';
import SongListFragment from './../components/common/SongListFragment';
const mapStateToProps = (state) =>{
    //console.log('state.questionsReducer',state.questionsReducer);
    return {
        songs : state.songListReducer,
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return {
        getAdvertSongs:id=>{
            dispatch(fetchAdvertSongs(id))
        }
    }
}

const SongListContainer = connect(mapStateToProps, mapDispatchToProps)(SongListFragment)

export default SongListContainer;