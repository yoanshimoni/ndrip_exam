import React, { memo } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import Error from "./components/Error";
import { Provider as UserProvider } from "./context/UserContext";

const Container = styled.main``;

const App = memo(() => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/map/:lat/:lng" component={MapPage} />
          <Route component={Error} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
});

export default () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
};
