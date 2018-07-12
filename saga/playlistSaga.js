/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';

import {put,takeLatest,takeEvery} from 'redux-saga/effects';
import {Api} from './Api';

function* fetchPlaylists(){
    const endpoint = "music/playlist";
    const apiGetPlaylists = `${Types.ApiServer}/${endpoint}`;
    try{
        const receivedPlaylists = yield Api.getApi(apiGetPlaylists);
        yield put({type: Types.FETCH_PLAYLISTS_SUCCEEDED, receivedPlaylists:receivedPlaylists})

    }catch(error){
        yield put({type:Types.FETCH_FAILED, error})
    }
}



export function* watchFetchPlaylists(){
    yield takeEvery(Types.FETCH_PLAYLISTS,fetchPlaylists);
}



function* fetchAllPlaylists(){
    const endpoint = "music/allplaylist";
    const apiGetAllPlaylists = `${Types.ApiServer}/${endpoint}`;
    try{
        const receivedAllPlaylists = yield Api.getApi(apiGetAllPlaylists);
        yield put({type: Types.FETCH_ALL_PLAYLISTS_SUCCEEDED, receivedAllPlaylists,})

    }catch(error){
        yield put({type:Types.FETCH_FAILED, error})
    }
}



export function* watchFetchAllPlaylists(){
    yield takeEvery(Types.FETCH_ALL_PLAYLISTS,fetchAllPlaylists);
}
