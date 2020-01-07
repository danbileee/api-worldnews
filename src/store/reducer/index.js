import { combineReducers } from "redux";

import { newsReducer } from "./news";
import { loadingReducer } from './loading';

const rootReducer = combineReducers({
  newsState: newsReducer,
  loadingState: loadingReducer
});

export default rootReducer;
