/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import {call, all,takeEvery} from 'redux-saga/effects';
import{watchFetchAdverts} from './advertSaga';
import {watchFetchPlaylists} from './playlistSaga';
import {watchFetchTopicGenres} from './topicgenreSaga';
import {watchFetchAlbums} from './albumSaga';
import {watchFavouritesongs} from './favouritesongSaga';

export default function* rootSaga(){
    yield all([
        call(watchFetchAdverts),
        call(watchFetchPlaylists),
        call(watchFetchTopicGenres),
        call(watchFetchAlbums),
        call(watchFavouritesongs),
      ])

    // yield [
    //     watchFetchAdverts(),
    //     watchFetchPlaylists()
    //   ];
     //yield call(watchFetchAdverts);
    // yield call(watchFetchPlaylists);
    
}