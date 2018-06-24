import {call, all} from 'redux-saga/effects';
import {watchFetchQuestions,watchAddNewQuestion} from './questionsSaga';

export default function* rootSaga(){
    yield call(watchAddNewQuestion);
}