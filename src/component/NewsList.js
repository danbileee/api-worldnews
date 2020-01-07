import React from "react";
import { useSelector } from "react-redux";

import { getNews, getLoadingState, getError } from "../store/reducer/selector";
import { NewsItem } from "./NewsItem";

export function NewsList() {
  const news = useSelector(getNews);
  const isLoading = useSelector(getLoadingState);
  const hasError = useSelector(getError);

  if (isLoading) {
    return <p>로딩중입니다.</p>;
  }

  if (hasError) {
    return <p>에러가 발생했습니다.</p>;
  }

  if (!isLoading && news.length === 0) {
    return <p>열람할 항목을 선택하세요.</p>;
  }

  return news.map((article, index) => (
    <NewsItem key={index} article={article} />
  ));
}
