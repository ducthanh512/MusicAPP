
/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllPlaylists,fetchAllGenres,fetchAllAlbums,resetGroup} from './../actions/index';
import  GroupFragment from './../components/group/GroupFragment';
const mapStateToProps = (state) =>{
    //console.log('state.questionsReducer',state.questionsReducer);
    return {
        groups : state.groupReducer,
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return {
        getAllPlaylists : ()=>{
            dispatch(fetchAllPlaylists())
        },
        getAllGenres : ()=>{
            dispatch(fetchAllGenres())
        },
        getAllAlbums : ()=>{
            dispatch(fetchAllAlbums())
        },
        resetGroup:()=>{
            dispatch(resetGroup());
        },
    }
}

const GroupContainer = connect(mapStateToProps, mapDispatchToProps)(GroupFragment)

export default GroupContainer;