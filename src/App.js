import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Account from "./components/Account/Account";

import { Container } from "react-bootstrap";
import ContactList from "./components/ContactList/ContactList";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Container fluid>
          <Switch>
            <Route exact path="/">
              <Account />
            </Route>
            <Route exact path="/contacts">
              <ContactList />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
