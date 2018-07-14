/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import {call, all,takeEvery} from 'redux-saga/effects';
import{watchFetchAdverts} from './advertSaga';
import {watchFetchPlaylists,watchFetchAllPlaylists} from './playlistSaga';
import {watchFetchTopicGenres,watchFetchAllGenres} from './topicgenreSaga';
import {watchFetchAlbums,watchFetchAllAlbums} from './albumSaga';
import {watchFavouritesongs,watchAdvertSongs,watchPlayListSongs,watchGenreSongs,watchAlbumSongs,watchSearchSongs} from './songSaga';

export default function* rootSaga(){
    yield all([
        call(watchFetchAdverts),
        call(watchFetchPlaylists),
        call(watchFetchTopicGenres),
        call(watchFetchAlbums),
        call(watchFavouritesongs),
        call(watchAdvertSongs),
        call(watchPlayListSongs),
        call(watchFetchAllPlaylists),
        call(watchGenreSongs),
        call(watchAlbumSongs),
        call(watchFetchAllGenres),
        call(watchFetchAllAlbums),
        call(watchSearchSongs),
      ])

    // yield [
    //     watchFetchAdverts(),
    //     watchFetchPlaylists()
    //   ];
     //yield call(watchFetchAdverts);
    // yield call(watchFetchPlaylists);
    
}