export const getNews = ({ newsState }) => newsState.news;
export const getLoadingState = ({ loadingState }) => loadingState.isLoading;
export const getError = ({ loadingState }) => loadingState.error;