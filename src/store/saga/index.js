import { takeEvery } from "redux-saga/effects";

import { handleFetchNews, handleFetchCategory } from "./news";

export default function* rootSaga() {
  yield takeEvery("NEWS_FETCH", handleFetchNews)
  yield takeEvery("CATEGORY_FETCH", handleFetchCategory)
}
