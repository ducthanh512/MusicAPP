import React, { Component } from 'react';
const apiGetQuestion = "https://learningpteserver.herokuapp.com/ptelearning/questions/L01"

function* getQuestionsFromApi() {

    // const response = yield fetch(apiGetQuestion);

    const response = yield fetch(apiGetQuestion, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });

    let responseJson = response.json();
    //  console.log('getQuestionsFromApi2',JSON.stringify(responseJson));

    const questions = yield response.status === 200 ? responseJson : []
    return questions;
}


function* addQuestionsFromApi(newQuestion) {
    const response = yield fetch(apiGetQuestion, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: newQuestion.content,
            categoryCode: newQuestion.categoryCode,
        })
    });

    let responseJson = response.json();
    return yield (response.status === 200);
}

export const Api = {
    getQuestionsFromApi,
    addQuestionsFromApi
};