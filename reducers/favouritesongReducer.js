/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';
var initialState = [];
const favouriteSongReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_FAVOURITESONGS_SUCCEEDED:
            state = action.receivedFavouritesongs;
            
            return [...state]
        default: return [...state] 
    }
}

export default favouriteSongReducer;