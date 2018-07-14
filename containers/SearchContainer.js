
/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import React , {Component} from 'react';
import {connect} from 'react-redux';
import {resetSongList,fetchFavouriteSongs,fetchAdvertSongs,fetchPlayListSongs,fetchGenreSongs,fetchAlbumSongs,searchSongs} from './../actions/index';
import SearchFragment from './../components/SearchFragment';
const mapStateToProps = (state) =>{
    //console.log('state.questionsReducer',state.questionsReducer);
    return {
        songs : state.songListReducer,
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return {
        searchSongs:name=>{
            dispatch(searchSongs(name))
        },
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchFragment)

export default SearchContainer;