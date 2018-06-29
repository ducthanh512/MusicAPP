import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import Splash from './components/Splash';
import Login from './components/Login';
import PlayList from './components/PlayList';

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
        <App />
    </Provider>
);

sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent('MusicApp', () => MusicApp);




class Main extends Component{
    constructor(props){
        super(props);
        this.state ={currentScreen: 'Splash'}

    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({currentScreen: 'Login'})
            console.log('after 3 seconds');
        },3000)
    }

    componentWillUnmount(){

    }

    render(){
        const {currentScreen} = this.state;
        let mainScreen = currentScreen ==='Splash' ? <Splash/> : <Login/>
        return mainScreen;
    }
}

