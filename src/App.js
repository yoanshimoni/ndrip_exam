import React, { memo } from "react";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import { Provider as UserProvider } from "./context/UserContext";

const Container = styled.main``;

const App = memo(() => {
  return (
    <Container>
      <HomePage />
    </Container>
  );
});

export default () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
};
