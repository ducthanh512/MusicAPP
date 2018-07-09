/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';
var initialState = [];
const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ALL_PLAYLISTS_SUCCEEDED:
            state = action.receivedAllPlaylists;
            return [...state]

        case Types.FETCH_ALL_GENRE_SUCCEEDED:
            state = action.receivedAllGenres;
            return [...state]

        case Types.FETCH_ALL_ALBUMS_SUCCEEDED:
            state = action.receivedAllAlbums;
            return [...state]

        case Types.RESET_GROUP:
            console.log('RESET_GROUP');
            return [...initialState]

        default: return [...state]
    }
}

export default groupReducer;