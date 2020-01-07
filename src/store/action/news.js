export const NEWS_SHOW = "NEWS_SHOW";
export const NEWS_PENDING = "NEWS_PENDING";
export const NEWS_FETCH = "NEWS_FETCH";
export const CATEGORY_FETCH = "CATEGORY_FETCH";

export const doShowNews = news => ({
  type: NEWS_SHOW,
  news
});

export const isPending = () => ({
  type: NEWS_PENDING,
  news: []
})

export const doFetchNews = country => ({
  type: NEWS_FETCH,
  country,
});

export const doFetchCategory = category => ({
  type: CATEGORY_FETCH,
  category
});
