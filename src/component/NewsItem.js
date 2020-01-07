import React from "react";

import styled from "styled-components";

const Container = styled.li`
  display: block;
  &:not(:last-of-type) {
    margin-bottom: 4rem;
  }
`;

const Wrapper = styled.a`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 10rem;
  opacity: 1;
  transition: opacity ease-out 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const Thumb = styled.div`
  width: 10rem;
  height: 100%;
  background: url(${props => props.urlToImage}) center / cover no-repeat;
  margin-right: 1rem;
`;

const Content = styled.div`
  display: flex;
  width: calc(100% - 11rem);
  height: 100%;
  flex-direction: column;
`;

const Title = styled.h3`
  text-decoration: underline;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  margin-bottom: auto;
`;

const PublishedAt = styled.p`
  font-size: 0.8rem;
`;

export function NewsItem({ article }) {
  const { url, urlToImage, title, description, publishedAt } = article;
  return (
    <Container>
      <Wrapper href={url} target="_blank">
        <Thumb urlToImage={urlToImage} />
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <PublishedAt>{publishedAt}</PublishedAt>
        </Content>
      </Wrapper>
    </Container>
  );
}
