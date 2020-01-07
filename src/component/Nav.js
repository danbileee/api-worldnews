import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import { doFetchNews } from "../store/action/news";
import { getNews } from "../store/reducer/selector";

import { Category } from "./Category";

const countries = [
  {
    key: "us",
    text: "미국"
  },
  {
    key: "jp",
    text: "일본"
  },
  {
    key: "kr",
    text: "한국"
  },
  {
    key: "il",
    text: "이스라엘"
  }
];

const Container = styled.div`
  width: 100%;
  margin-bottom: 5rem;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  cursor: pointer;
  text-decoration: underline;
  font-size: 1.2rem;
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

export function Nav() {
  const news = useSelector(getNews);
  const dispatch = useDispatch();

  return (
    <Container>
      <List>
        {countries.map(({ key, text }) => (
          <Item key={key} onClick={() => dispatch(doFetchNews(key))}>
            {text}
          </Item>
        ))}
      </List>
      {news.length > 0 && <Category />}
    </Container>
  );
}
