/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';
var initialState = [];
const songListReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ADVERT_SONGS_SUCCEEDED:
            console.log('new song reducer FETCH_ADVERT_SONGS_SUCCEEDED');
            state = action.receiveAdvertSongs;
            return [...state]
        case Types.FETCH_PLAYLIST_SONGS_SUCCEEDED:
            console.log('new song reducer FETCH_PLAYLIST_SONGS_SUCCEEDED');
            state = action.receivedPlayListtSongs;
            return [...state]

        case Types.FETCH_GENRE_SONGS_SUCCEEDED:
            console.log('new song reducer FETCH_GENRE_SONGS_SUCCEEDED');
            state = action.receivedGenreSongs;
            return [...state]
        case Types.FETCH_ALBUM_SONGS_SUCCEEDED:
            console.log('new song reducer FETCH_ALBUM_SONGS_SUCCEEDED');
            state = action.receivedAlbumSongs;
            return [...state]

        case Types.RESET_SONG_LIST:
            console.log('new song reducer RESET_SONG_LIST');
            return [...initialState]
        default: return [...state]
    }
}

export default songListReducer;