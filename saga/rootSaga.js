/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import {call, all,takeEvery} from 'redux-saga/effects';
import {watchFetchQuestions,watchAddNewQuestion} from './questionsSaga';
import{watchFetchAdverts} from './advertSaga';
import {watchFetchPlaylists} from './playlistSaga';

export default function* rootSaga(){
    yield all([
        call(watchFetchAdverts),
        call(watchFetchPlaylists)
      ])

    // yield [
    //     watchFetchAdverts(),
    //     watchFetchPlaylists()
    //   ];
     //yield call(watchFetchAdverts);
    // yield call(watchFetchPlaylists);
    
}