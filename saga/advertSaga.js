/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';

import {put,takeLatest,takeEvery} from 'redux-saga/effects';
import {Api} from './Api';

function* fetchAdverts(){
    const apiGetAdvert = "https://musicappservice.herokuapp.com/music/advert"
    try{
        const receivedAdverts = yield Api.getApi(apiGetAdvert);
        yield put({type: Types.FETCH_ADVERT_SUCCEEDED, receivedAdverts:receivedAdverts})

    }catch(error){
        yield put({type:Types.FETCH_FAILED, error})
    }
}



export function* watchFetchAdverts(){
    yield takeEvery(Types.FETCH_ADVERT,fetchAdverts);
}
