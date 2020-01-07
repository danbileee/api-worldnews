export const REQUEST_LOADING = "REQUEST_LOADING";
export const REQUEST_DONE = "REQUEST_DONE";
export const REQUEST_ERROR = "REQUEST_ERROR";

export const isLoading = () => ({
  type: REQUEST_LOADING,
  isLoading: true
});

export const isDone = () => ({
  type: REQUEST_DONE,
  isLoading: false
});

export const hasError = error => ({
  type: REQUEST_ERROR,
  error
});