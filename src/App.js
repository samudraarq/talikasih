import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Discover from "./pages/Discover";
import CampingCreatePage from "./pages/CampaingCreatePage";
import DiscoverCategoryPage from "./pages/DiscoverCategory/DiscoverCategoryPage";
import DiscoverSearchPage from "./pages/DiscoverSearchPage";
import Home from "./pages/Home";
import Donate from "./pages/Donate/Donate";

function App() {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route path="/discover/search">
          <DiscoverSearchPage />
        </Route>
        <Route path="/discover/:category">
          <DiscoverCategoryPage />
        </Route>
        <Route path="/discover">
          <Discover />
        </Route>
        <Route path="/campaign/create">
          <CampingCreatePage/>
        </Route>
        <Route path="/">
=======
        <Route exact path="/">
>>>>>>> 604c12f177c2bc1233fce26bc75febdcae76ad25
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
