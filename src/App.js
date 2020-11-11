import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { setUserPersistanceLogin } from "./redux/actions/authActions";
import "./App.css";
import Discover from "./pages/Discover";
import CampingCreatePage from "./pages/CampaingCreatePage";
import ChampingDetailsDonatePage from "./pages/ChampingDetailsDonatePage";
import DiscoverCategoryPage from "./pages/DiscoverCategory/DiscoverCategoryPage";
import DiscoverSearchPage from "./pages/DiscoverSearchPage";
import EditProfilePage from "./pages/EditProfilePage";
import Home from "./pages/Home";
import Donate from "./pages/Donate/Donate";
import { useEffect } from "react";
import UserProfilePage from "./pages/UserProfilePage";



function App({ setUserPersistanceLogin }) {
  useEffect(() => {
    setUserPersistanceLogin();
  }, [setUserPersistanceLogin]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/campaign/create">
          <CampingCreatePage/>
        </Route>
        <Route path="/campaign/details/donate/:idDonate">
          <ChampingDetailsDonatePage/>
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setUserPersistanceLogin: () => dispatch(setUserPersistanceLogin()),
  };
};

export default connect(null, mapDispatchToProps)(App);







