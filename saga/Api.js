/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import React, { Component } from 'react';
const apiGetQuestion = "https://learningpteserver.herokuapp.com/ptelearning/questions/L01"
const apiGetAdvert = "https://musicappservice.herokuapp.com/music/advert"
const apiGetPlaylists = "https://musicappservice.herokuapp.com/music/playlist"


function* getAdvertsFromApi() {
    const response = yield fetch(apiGetAdvert, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
    let responseJson = response.json();
    
    const adverts = yield response.status === 200 ? responseJson : []
    return adverts;
}


function* getPlaylistsFromApi() {
    console.log('getPlaylistsFromApi')
    const response = yield fetch(apiGetPlaylists, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
    let responseJson = response.json();
    
    const playlists = yield response.status === 200 ? responseJson : []
    return playlists;
}








function* getQuestionsFromApi() {
    const response = yield fetch(apiGetQuestion, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });

    let responseJson = response.json();
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
    getAdvertsFromApi,
    getQuestionsFromApi,
    addQuestionsFromApi,
    getPlaylistsFromApi,
};