import React from "react";
import styled from "styled-components";

import Header from "src/components/Header";

import "src/App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Wrapper = styled.div``;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
};

export default App;
