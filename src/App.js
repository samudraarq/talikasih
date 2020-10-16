import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Discover from "./pages/Discover";
import DiscoverCategoryPage from "./pages/DiscoverCategory/DiscoverCategoryPage";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/discover/:category">
          <DiscoverCategoryPage />
        </Route>
        <Route path="/discover">
          <Discover />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
