/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import {combineReducers} from 'redux';
import advertReducer from './advertReducer';
import playlistReducer from './playlistReducer';
import topicGenreReducer from './topicGenreReducer';
import albumReducer from './albumReducer';
import favouritesongReducer from './favouritesongReducer';
const appReducers = combineReducers({
    advertReducer,playlistReducer,topicGenreReducer,albumReducer,favouritesongReducer,
})

export default appReducers;