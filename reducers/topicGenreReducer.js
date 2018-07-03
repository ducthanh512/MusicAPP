/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';
var initialState = [];
const topicGenreReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_TOPICGENRES_SUCCEEDED:
            state = action.receivedTopicGenres;
            return [...state]


        default: return [...state]
    }
}

export default topicGenreReducer;