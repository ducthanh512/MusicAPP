/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';
var initialState = [];
const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PLAYLISTS_SUCCEEDED:
            state = action.receivedPlaylists;
            return [...state]


        default: return [...state]
    }
}

export default playlistReducer;