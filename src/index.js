
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

//ROOT saga here
function* rootSaga() {
    yield takeEvery('FETCH_GIFS', getGifsSaga);
    yield takeEvery('FAVORITE_GIF', favoriteSaga);
    yield takeEvery('GET_FAVORITES', getFavorites);
    yield takeEvery('GET_CATEGORIES', getCategorySaga);
}

//GET saga here
function* getGifsSaga(action) {
    try {
        const receivedGifs = yield axios.get(`/api/search/${action.payload}`);
        console.log(receivedGifs);
        yield put({ type: 'GET_GIFS', payload: receivedGifs.data.data });
    } catch (error) {
        console.log('error fetching gifs', error);
    }
}

function* getCategorySaga(action) {
    try {
        const receivedCategories = yield axios.get(`/api/category/`);
        yield put({ type: 'SET_CATEGORIES', payload: receivedCategories.data });
    } catch (error) {
        console.log('error fetching categories', error);
    }
}


//POST saga
function* favoriteSaga(action) {
    try {
        yield axios.post('/api/favorite', action.payload)
        yield put({ type: 'GET_GIFS' })
    }
    catch (error) {
        console.log('error posting gif', error);
    }
}

//GET favorites saga
function* getFavorites(action) {
    try {
        const favoriteGifs = yield axios.get('/api/favorite')
        console.log(favoriteGifs);
        yield put({ type: 'FAVORITES_REDUCER', payload: favoriteGifs.data})
    }
    catch (error) {
        console.log('error posting gif', error);
    }
}

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Reducer that holds our results

const fetchNewGifs = (state = [], action) => {
    if (action.type === 'GET_GIFS') {
        return action.payload;
    }
    return state;
}

const fetchFavoriteGifs = (state = [], action) => {
    if (action.type === 'FAVORITES_REDUCER') {
        return action.payload;
    }
    return state;
}

const fetchCategories = (state = [], action) => {
    if (action.type === 'SET_CATEGORIES') {
        return action.payload;
    }
    return state;
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        fetchNewGifs,
        fetchFavoriteGifs,
        fetchCategories,
    }),
    applyMiddleware(logger, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('react-root'));
