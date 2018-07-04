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
        default: return [...state]
    }
}

export default songListReducer;