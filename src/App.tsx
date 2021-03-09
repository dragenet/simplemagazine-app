import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import SignInPage from "./pages/SignInPage";

const MainWrapper = styled.div`
  min-height: 100vh;
`;
function App() {
  const theme = createMuiTheme();
  return (
    <MuiThemeProvider theme={theme}>
      <MainWrapper>
        <Router>
          <Switch>
            <Route path="/login">
              <SignInPage />
            </Route>
            <Route path="/register">
              <h2>Sign up here</h2>
            </Route>
            <Route path="/">
              <h1>Main page</h1>
            </Route>
          </Switch>
        </Router>
      </MainWrapper>
    </MuiThemeProvider>
  );
}

export default App;
