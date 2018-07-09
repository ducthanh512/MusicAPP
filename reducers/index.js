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
import favouriteSongReducer from './favouriteSongReducer';
import songListReducer from './songListReducer';
import groupReducer from './groupReducer';
const appReducers = combineReducers({
    advertReducer,
    playlistReducer,
    topicGenreReducer,
    albumReducer,
    favouriteSongReducer,
    songListReducer,
    groupReducer
})

export default appReducers;