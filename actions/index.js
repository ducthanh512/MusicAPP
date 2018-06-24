import * as Types from './../constants/actionType';
import {getQuestionFromServer} from './../networking/server';

export const actFetchQuestionRequest = ()=>{
   
    return (dispatch)=>{
        return getQuestionFromServer().then(res =>{

            //console.log('actFetchQuestionRequest2',res);
            dispatch(actionFetchQuestion(res))
        })
    }
}

export const actionFetchQuestion = (questions) =>{
    return {
        type: Types.FETCH_QUESTIONS,
        questions,
    }
}

export const fetchQuestion = () =>{
    return {
        type: Types.FETCH_QUESTIONS,
    }
}


export const fetchSuccessAction = (receivedQuestions) =>{
    return {
        type: Types.FETCH_SUCCEEDED,
        receivedQuestions,
    }

}

export const fetchFailedAction = (error)=>{
    return{
        type: Types.FETCH_FAILED,
        error,
    }
}

export const addQuestionAction = (newQuestion) =>{
    return {
        type: Types.ADD_QUESTION,
        newQuestion,
    }
}