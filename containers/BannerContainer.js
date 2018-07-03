
/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import React , {Component} from 'react';
import {connect} from 'react-redux';
import {actFetchQuestionRequest,fetchQuestion,fetchAdvert} from './../actions/index';
import  Banner from './../components/Banner';
const mapStateToProps = (state) =>{
    //console.log('state.questionsReducer',state.questionsReducer);
    return {
        adverts : state.advertReducer,
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return {
        getAdverts : ()=>{
            dispatch(fetchAdvert())
        }
    }
}

const AdvertsContainer = connect(mapStateToProps, mapDispatchToProps)(Banner)

export default AdvertsContainer;