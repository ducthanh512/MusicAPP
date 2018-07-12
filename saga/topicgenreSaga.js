/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';

import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchTopicGenres() {
    console.log('fetchTopicGenres saga');
    const endpointTopic = "music/topic";
    const apiGetTopics = `${Types.ApiServer}/${endpointTopic}`;

    const endpointGenre = "music/genre";
    const apiGetGenres = `${Types.ApiServer}/${endpointGenre}`;
    try {
        const receivedTopics = yield Api.getApi(apiGetTopics);
        const receivedGenres = yield Api.getApi(apiGetGenres);
        const receivedTopicGenres = [...receivedTopics, ...receivedGenres];
        yield put({ type: Types.FETCH_TOPICGENRES_SUCCEEDED, receivedTopicGenres: receivedTopicGenres })

    } catch (error) {
        yield put({ type: Types.FETCH_FAILED, error })
    }
}



export function* watchFetchTopicGenres() {
    yield takeEvery(Types.FETCH_TOPICGENRES, fetchTopicGenres);
}


function* fetchAllGenres(){
    const endpointTopic = "music/allgenres";
    const apiGetAllGenres = `${Types.ApiServer}/${endpointTopic}`;
    try{
        const receivedAllGenres = yield Api.getApi(apiGetAllGenres);
        yield put({type: Types.FETCH_ALL_GENRE_SUCCEEDED, receivedAllGenres,})

    }catch(error){
        yield put({type:Types.FETCH_FAILED, error})
    }
}



export function* watchFetchAllGenres(){
    yield takeEvery(Types.FETCH_ALL_GENRE,fetchAllGenres);
}

