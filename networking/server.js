import React, { Component } from 'react';

const apiGetQuestion = "https://learningpteserver.herokuapp.com/ptelearning/questions/L01";
async function getQuestionFromServer() {
    try {
        
        let response = await fetch(apiGetQuestion);
        let responseJson = await response.json();

        return responseJson;
    } catch (error) {
        console.log('error', error);
    }

}
export { getQuestionFromServer }