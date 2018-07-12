/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';

import {put,takeLatest,takeEvery} from 'redux-saga/effects';
import {Api} from './Api';

function* fetchAlbums(){
    const endpoint = "music/album";
    const apiAlbums = `${Types.ApiServer}/${endpoint}`;
    console.log('fetchAlbums saga');
    try{
        const receivedAlbums = yield Api.getApi(apiAlbums);
        yield put({type: Types.FETCH_ALBUMS_SUCCEEDED, receivedAlbums:receivedAlbums})

    }catch(error){
        yield put({type:Types.FETCH_FAILED, error})
    }
}



export function* watchFetchAlbums(){
    yield takeEvery(Types.FETCH_ALBUMS,fetchAlbums);
}


function* fetchAllAlbums(){
    const endpoint = "music/allalbums";
    const apiGetAllAlbums = `${Types.ApiServer}/${endpoint}`;
    try{
        const receivedAllAlbums = yield Api.getApi(apiGetAllAlbums);
        yield put({type: Types.FETCH_ALL_ALBUMS_SUCCEEDED, receivedAllAlbums,})

    }catch(error){
        yield put({type:Types.FETCH_FAILED, error})
    }
}



export function* watchFetchAllAlbums(){
    yield takeEvery(Types.FETCH_ALL_ALBUMS,fetchAllAlbums);
}

