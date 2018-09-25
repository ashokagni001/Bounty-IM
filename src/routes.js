import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Container from "./Components/Container";
import Home from "./Components/Home";
import Friends from "./Components/Friends/Friends.react";

const AppRouter = () => (
  <Router basename="/">
    <Route path="/">
      <Container>
        <Route path="/" component={Home} />
        <Route path="/friends" component={Friends}></Route>
      </Container>
    </Route>
  </Router>
);
export default AppRouter;
