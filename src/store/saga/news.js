import { call, put } from "redux-saga/effects";

import axios from "axios";

import { doShowNews, isPending } from "../action/news";
import { isLoading, isDone, hasError } from "../action/loading";

const BASE_URL = "https://newsapi.org/v2/top-headlines";
const URL_PARAMS = {
  params: {
    country: "",
    category: "",
    apiKey: "96ad711f82654d3cb0c55d9f39f6d514",
  }
};

const fetchNews = country => {
  URL_PARAMS.params.country = country;
  URL_PARAMS.params.category = "";
  return axios.get(BASE_URL, URL_PARAMS);
};

const fetchCategory = category => {
  URL_PARAMS.params.category = category;
  return axios.get(BASE_URL, URL_PARAMS);
};

export function* handleFetchNews(action) {
  const { country } = action;

  try {
    yield put(isLoading());
    yield put(isPending());
    const result = yield call(fetchNews, country);
    yield put(doShowNews(result.data.articles));
  } catch (error) {
    yield put(hasError(error));
  }

  yield put(isDone());
}

export function* handleFetchCategory(action) {
  const { category } = action;

  try {
    yield put(isLoading());
    yield put(isPending());
    const result = yield call(fetchCategory, category);
    yield put(doShowNews(result.data.articles));
  } catch (error) {
    yield put(hasError(error));
  }

  yield put(isDone());
}
