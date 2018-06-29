/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';
var initialState = [];
const advertReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ADVERT_SUCCEEDED:
            state = action.receivedAdverts;
            return [...state]


        default: return [...state]
    }
}

export default advertReducer;