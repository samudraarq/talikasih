import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Discover from "./pages/Discover";
import DiscoverCategoryPage from "./pages/DiscoverCategory/DiscoverCategoryPage";
import DiscoverSearchPage from "./pages/DiscoverSearchPage";
import EditProfilePage from "./pages/EditProfilePage";
import Home from "./pages/Home";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/discover/search">
          <DiscoverSearchPage />
        </Route>
        <Route path="/discover/category/:categoryId">
          <DiscoverCategoryPage />
        </Route>
        <Route path="/discover">
          <Discover />
        </Route>
        <Route path="/user/profile/edit">
          <EditProfilePage />
        </Route>
        <Route path="/user/profile">
          <UserProfilePage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
