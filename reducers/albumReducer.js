/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';
var initialState = [];
const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ALBUMS_SUCCEEDED:
            state = action.receivedAlbums;
            return [...state]


        default: return [...state]
    }
}

export default albumReducer;