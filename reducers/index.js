/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import {combineReducers} from 'redux';
import questionsReducer from './questionsReducer';
import advertReducer from './advertReducer';
import playlistReducer from './playlistReducer';
const appReducers = combineReducers({
    advertReducer,playlistReducer
})

export default appReducers;