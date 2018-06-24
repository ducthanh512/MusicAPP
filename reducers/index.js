import {combineReducers} from 'redux';
import questionsReducer from './questionsReducer';

const appReducers = combineReducers({
    questionsReducer,
})

export default appReducers;