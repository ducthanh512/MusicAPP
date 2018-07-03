/**
 * Duc Thanh Nguyen
 * Music Application
 * https://github.com/ducthanh512/MusicAPP.git
 * @flow
 */
import React, { Component } from 'react';

function* getApi(api){
    console.log('getApi ', api)
    const response = yield fetch(api, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
    let responseJson = response.json();
    
    const result = yield response.status === 200 ? responseJson : []
    return result;
}

export const Api = {
    getApi,
};