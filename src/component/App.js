import React from "react";

import styled from 'styled-components';

import { GlobalStyle } from "./GlobalStyle";
import { Nav } from "./Nav";
import { NewsList } from "./NewsList";

const Container = styled.div`
  width: 80%;
  margin: 0 auto 5rem;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Nav />
      <NewsList />
    </Container>
  );
}

export default App;
