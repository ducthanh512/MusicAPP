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
    const apiGetTopics = "https://musicappservice.herokuapp.com/music/topic"
    const apiGetGenres = "https://musicappservice.herokuapp.com/music/genre"
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

