import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import RegisterPage from './pages/RegisterPage'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <h1>Login page</h1>
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <h1>Main page</h1>
        </Route>

      </Switch>
    </Router>
  );
}

export default App; 
