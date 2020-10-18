import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Discover from "./pages/Discover";
import CampingCreatePage from "./pages/CampaingCreatePage";
import DiscoverCategoryPage from "./pages/DiscoverCategory/DiscoverCategoryPage";
import DiscoverSearchPage from "./pages/DiscoverSearchPage";
import Home from "./pages/Home";
import Donate from "./pages/Donate/Donate";
import ChampingDetailsDonatePage from "./pages/ChampingDetailsDonatePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
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
        <Route path="/campaign/details/donate">
          <ChampingDetailsDonatePage/>
        </Route>
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
