import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Donate from "./pages/Donate/Donate";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
