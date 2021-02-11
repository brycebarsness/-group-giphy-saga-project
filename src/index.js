import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios'
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import App from './Components/App/App';

function* rootSaga() {
    yield takeEvery("FETCH_GIFS", fetchGifs);
}

// function* searchGifs(action) {
//     try {
//         const response = yield axios.get('/api/gifs', action.payload);
//         yield put ({})
//     }
// } 


function* fetchGifs(action) {
    try {
        const response = yield axios.get('/api/favs');
        yield put({ type: "SET_FAVS", payload: response.data });
    } catch (error) {
        console.log(error)
    }
}

const favGifList = (state = [], action) => {
    switch (action.type) {
        case "SET_FAVS":
            return [...action.payload];
        default:
            return state;
    }
};

const searchedGifList = (state = [], action) => {
    switch (action.type) {
        case "SEARCH_GIF":
            console.log(`Getting gifs...`);
            return [action.payload]
        default:
            return state;
    }
}

const SagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        favGifList,
        searchedGifList,
    }),
    applyMiddleware(logger, SagaMiddleware)
);
SagaMiddleware.run(rootSaga);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));