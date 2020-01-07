import React from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";

import { doFetchCategory } from "../store/action/news";

const categories = [
  {
    key: "",
    text: "전체보기"
  },
  {
    key: "business",
    text: "비즈니스"
  },
  {
    key: "entertainment",
    text: "엔터테인먼트"
  },
  {
    key: "health",
    text: "건강"
  },
  {
    key: "science",
    text: "과학"
  },
  {
    key: "sports",
    text: "스포츠"
  },
  {
    key: "technology",
    text: "기술"
  }
];

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  cursor: pointer;
  text-decoration: underline;
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

export function Category() {
  const dispatch = useDispatch();

  return (
    <List>
      {categories.map(({ key, text }, index) => (
        <Item key={index} onClick={() => dispatch(doFetchCategory(key))}>
          {text}
        </Item>
      ))}
    </List>
  );
}
