import { REQUEST_LOADING, REQUEST_DONE, REQUEST_ERROR } from '../action/loading';

export function loadingReducer(
  state = {
    isLoading: false,
    error: null
  }, action) {
  switch (action.type) {
    case REQUEST_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case REQUEST_DONE:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case REQUEST_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}
