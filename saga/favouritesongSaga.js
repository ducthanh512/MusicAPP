/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';

import {put,takeLatest,takeEvery} from 'redux-saga/effects';
import {Api} from './Api';

function* fetchFavouriteSongs(){
const apiFavouritesongs  = "https://musicappservice.herokuapp.com/music/favouritesongs"

    console.log('fetchFavouriteSongs saga');
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

