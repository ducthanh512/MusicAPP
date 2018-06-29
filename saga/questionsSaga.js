/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import * as Types from './../constants/actionType';

import {put,takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

function* fetchQuestions(){
    try{
        const receivedQuestions = yield Api.getQuestionsFromApi();
        console.log('receivedQuestions1',receivedQuestions);
        yield put({type: Types.FETCH_SUCCEEDED, receivedQuestions:receivedQuestions})

    }catch(error){
        console.log('receivedQuestions2',error);
        yield put({type:Types.FETCH_FAILED, error})
    }
}

function* addQuestion(action){
    try{
        const result = yield Api.addQuestionsFromApi(action.newQuestion);
        if(result===true){
            yield put ({type:Types.ADD_QUESTION_SUCCEEDED});
        }
    }
    catch(error){

    }
}



export function* watchFetchQuestions(){
    yield takeLatest(Types.FETCH_QUESTIONS,fetchQuestions);
}

export function* watchAddNewQuestion(){
    yield takeLatest(Types.ADD_QUESTION,addQuestion);
}