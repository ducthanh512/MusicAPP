
/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAlbums} from './../actions/index';
import AlbumFragment from './../components/AlbumFragment';
const mapStateToProps = (state) =>{
    //console.log('state.questionsReducer',state.questionsReducer);
    return {
        albums : state.albumReducer,
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return {
        getAlbums: ()=>{
            dispatch(fetchAlbums())
        }
    }
}

const AlbumContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumFragment)

export default AlbumContainer;