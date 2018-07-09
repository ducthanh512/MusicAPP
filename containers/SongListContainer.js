
/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import React , {Component} from 'react';
import {connect} from 'react-redux';
import {resetSongList,fetchFavouriteSongs,fetchAdvertSongs,fetchPlayListSongs,fetchGenreSongs,fetchAlbumSongs} from './../actions/index';
import SongListFragment from './../components/common/SongListFragment';
const mapStateToProps = (state) =>{
    //console.log('state.questionsReducer',state.questionsReducer);
    return {
        songs : state.songListReducer,
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return {
        resetSongList:()=>{
            dispatch(resetSongList());
        },
        getAdvertSongs:id=>{
            dispatch(fetchAdvertSongs(id))
        },
        getPlayListSongs:id=>{
            dispatch(fetchPlayListSongs(id))
        },
        getGenreSongs:id=>{
            dispatch(fetchGenreSongs(id))
        },
        getAlbumSongs:id=>{
            dispatch(fetchAlbumSongs(id))
        },
    }
}

const SongListContainer = connect(mapStateToProps, mapDispatchToProps)(SongListFragment)

export default SongListContainer;