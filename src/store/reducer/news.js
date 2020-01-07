import { NEWS_SHOW, NEWS_PENDING, NEWS_FETCH, CATEGORY_FETCH } from '../action/news';

const initialState = {
  news: [],
  country: "",
  category: ""
};

export function newsReducer(state = initialState, action) {
  switch (action.type) {
    case NEWS_SHOW:
      return {
        ...state,
        news: action.news
      }
    case NEWS_PENDING:
      return {
        ...state,
        news: action.news
      }
    case NEWS_FETCH:
      return {
        ...state,
        country: action.country,
      };
    case CATEGORY_FETCH:
      return {
        ...state,
        category: action.category
      };
    default:
      return state;
  }
}
