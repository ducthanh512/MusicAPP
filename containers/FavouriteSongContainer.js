
/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchFavouriteSongs} from './../actions/index';
import FavouriteSongFragment from './../components/FavouriteSongFragment';
const mapStateToProps = (state) =>{
    //console.log('state.questionsReducer',state.questionsReducer);
    return {
        favouriteSongs : state.favouritesongReducer,
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return {
        getFavouriteSongs: ()=>{
            dispatch(fetchFavouriteSongs())
        }
    }
}

const FavouriteSongContainer = connect(mapStateToProps, mapDispatchToProps)(FavouriteSongFragment)

export default FavouriteSongContainer;