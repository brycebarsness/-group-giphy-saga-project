import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import axios from "axios";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import App from './Components/App/App';

function* rootSaga() {
  yield takeEvery("FETCH_GIFS", fetchGiphySaga);
  yield takeEvery("FETCH_FAV", fetchFavSaga);
  yield takeEvery("ADD_FAV", addFavSaga);
  yield takeEvery("SET_CATEGORY", setCategorySaga);
}

function* fetchFavSaga(action) {
  try {
    const response = yield axios.get("/api/favorite");
    yield put({ type: "SET_FAVS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}
function* fetchGiphySaga(action) {
  console.log("in fetchGiphySaga");
  try {
    const response = yield axios.get(`/api/search/${action.payload}`);
    yield put({ type: "SET_GIPHY", payload: response.data.data });
  } catch (error) {
    console.log("get SEARCH request failed", error);
  }
}

function* addFavSaga(action) {
  console.log("in addFavSaga");
  try {
    yield axios.post("/api/favorite", action.payload);
  } catch (err) {
    console.log("error in POST addFavSaga", err);
  }
}

function* setCategorySaga(action) {
  console.log("in setCategorySaga");
  try {
    yield axios.put(`/api/favorite/${action.payload[1]}`, action.payload[0]);
  } catch (error) {
    console.log("get SEARCH failed", error);
  }
}

//%%%%%%%%%%%%%% reducers here %%%%%%%%%%%%%%%%

const fetchReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_GIPHY":
      return action.payload;
    default:
      return state;
  }
};

const setFavReducer = (state = [], action) => {
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
    fetchReducer,
    setFavReducer,
    searchedGifList,
    // favGifList,
  }),
  applyMiddleware(logger, SagaMiddleware)
);
SagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
