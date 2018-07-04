/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';

import {put,takeLatest,takeEvery} from 'redux-saga/effects';
import {Api} from './Api';

/* Saga for Favourite Songs*/
function* fetchFavouriteSongs(){
const apiFavouritesongs  = "https://musicappservice.herokuapp.com/music/favouritesongs"
    try{
        const receivedFavouritesongs= yield Api.getApi(apiFavouritesongs);
        yield put({type: Types.FETCH_FAVOURITESONGS_SUCCEEDED, receivedFavouritesongs,})

    }catch(error){
        yield put({type:Types.FETCH_FAILED, error})
    }
}


export function* watchFavouritesongs(){
    yield takeEvery(Types.FETCH_FAVOURITESONGS,fetchFavouriteSongs);
}


/* Saga for Advert Songs*/
function* fetchAdvertSongs(action){
    let apiAdvertSongs  = "https://musicappservice.herokuapp.com/music/advertsongs"
    
       
        try{
            apiAdvertSongs =  `${apiAdvertSongs}/${action.id}`;
            console.log('fetchAdvertSongs saga id', apiAdvertSongs);
            const receiveAdvertSongs= yield Api.getApi(apiAdvertSongs);
            yield put({type: Types.FETCH_ADVERT_SONGS_SUCCEEDED, receiveAdvertSongs,})
    
        }catch(error){
            console.log('fetchAdvertSongs saga id err', error);
            yield put({type:Types.FETCH_FAILED, error})
        }
    }
    
    
    export function* watchAdvertSongs(){
        yield takeEvery(Types.FETCH_ADVERT_SONGS,fetchAdvertSongs);
    }
    
    