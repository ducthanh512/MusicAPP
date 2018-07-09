/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';

import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import { Api } from './Api';

/* Saga for Favourite Songs*/
function* fetchFavouriteSongs() {
    const apiFavouritesongs = "https://musicappservice.herokuapp.com/music/favouritesongs"
    try {
        const receivedFavouritesongs = yield Api.getApi(apiFavouritesongs);
        yield put({ type: Types.FETCH_FAVOURITESONGS_SUCCEEDED, receivedFavouritesongs, })

    } catch (error) {
        yield put({ type: Types.FETCH_FAILED, error })
    }
}


export function* watchFavouritesongs() {
    yield takeEvery(Types.FETCH_FAVOURITESONGS, fetchFavouriteSongs);
}


/* Saga for Advert Songs*/
function* fetchAdvertSongs(action) {
    let apiAdvertSongs = "https://musicappservice.herokuapp.com/music/advertsongs"
    try {
        apiAdvertSongs = `${apiAdvertSongs}/${action.id}`;
        const receiveAdvertSongs = yield Api.getApi(apiAdvertSongs);
        yield put({ type: Types.FETCH_ADVERT_SONGS_SUCCEEDED, receiveAdvertSongs, })

    } catch (error) {
        yield put({ type: Types.FETCH_FAILED, error })
    }
}


export function* watchAdvertSongs() {
    yield takeEvery(Types.FETCH_ADVERT_SONGS, fetchAdvertSongs);
}



/* Saga for PlayList Songs*/
function* fetchPlayListSongs(action) {
    let apiPlayListSongs = "https://musicappservice.herokuapp.com/music/playlistsongs"
    try {
        apiPlayListSongs = `${apiPlayListSongs}/${action.id}`;
        console.log('apiPlayListSongs saga id', apiPlayListSongs);
        const receivedPlayListtSongs = yield Api.getApi(apiPlayListSongs);
        yield put({ type: Types.FETCH_PLAYLIST_SONGS_SUCCEEDED, receivedPlayListtSongs, })

    } catch (error) {
        yield put({ type: Types.FETCH_FAILED, error })
    }
}


export function* watchPlayListSongs() {
    yield takeEvery(Types.FETCH_PLAYLIST_SONGS, fetchPlayListSongs);
}



/* Saga for Genre Songs*/
function* fetchGenreSongs(action) {
    let apiGenreSongs = "https://musicappservice.herokuapp.com/music/genresongs"
    try {
        apiGenreSongs = `${apiGenreSongs}/${action.id}`;
        console.log('apiGenreSongs saga id', apiGenreSongs);
        const receivedGenreSongs = yield Api.getApi(apiGenreSongs);
        yield put({ type: Types.FETCH_GENRE_SONGS_SUCCEEDED, receivedGenreSongs, })

    } catch (error) {
        yield put({ type: Types.FETCH_FAILED, error })
    }
}


export function* watchGenreSongs() {
    yield takeEvery(Types.FETCH_GENRE_SONGS, fetchGenreSongs);
}




/* Saga for Album Songs*/
function* fetchAlbumSongs(action) {
    let apiAlbumSongs = "https://musicappservice.herokuapp.com/music/albumsongs"
    try {
        apiAlbumSongs = `${apiAlbumSongs}/${action.id}`;
        console.log('apiAlbumSongs saga id', apiAlbumSongs);
        const receivedAlbumSongs = yield Api.getApi(apiAlbumSongs);
        yield put({ type: Types.FETCH_ALBUM_SONGS_SUCCEEDED, receivedAlbumSongs, })

    } catch (error) {
        yield put({ type: Types.FETCH_FAILED, error })
    }
}


export function* watchAlbumSongs() {
    yield takeEvery(Types.FETCH_ALBUM_SONGS, fetchAlbumSongs);
}
