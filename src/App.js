import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <>
    <Carousel/>
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
