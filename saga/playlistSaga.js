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
    console.log('fetchPlaylists saga');
    try{
        const receivedPlaylists = yield Api.getPlaylistsFromApi();
        yield put({type: Types.FETCH_PLAYLISTS_SUCCEEDED, receivedPlaylists:receivedPlaylists})

    }catch(error){
        yield put({type:Types.FETCH_FAILED, error})
    }
}



export function* watchFetchPlaylists(){
    yield takeEvery(Types.FETCH_PLAYLISTS,fetchPlaylists);
}

