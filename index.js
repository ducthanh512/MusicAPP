import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import Splash from './components/Splash';
import Login from './components/Login';
import PlayList from './components/PlayList';
import TopicGenreFragment from './components/TopicGenreFragment';
import SongList from './components/common/SongList';
import Main from './components/Main';

import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import appReducers from './reducers/index';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga'; 

const sagaMiddleware = createSagaMiddleware();

let store = createStore(appReducers,applyMiddleware(sagaMiddleware));
const MusicApp = () => (
    <Provider store={store}>
        <Main />
    </Provider>
);

sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent('MusicApp', () => MusicApp);

