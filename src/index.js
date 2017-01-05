
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import router from './router'
import './styles/app.css'
import configureStore from './store/configureStore'
import { loadState, saveState } from './store/localStorage'

const persistedState = loadState();

const store = configureStore(persistedState);

store.subscribe(() =>{
    saveState(store.getState());
});

render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('root')
);