import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
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
import AdminPage from "./pages/AdminPage";
import EditCampaign from "./pages/EditCampaign";

<<<<<<< HEAD


function App({ setUserPersistanceLogin }) {
=======
function App({ setUserPersistanceLogin, auth }) {
>>>>>>> 37d9dc976e675d16bd24637e80cbe2772790eaab
  useEffect(() => {
    setUserPersistanceLogin();
  }, [setUserPersistanceLogin]);

  let routes = (
    <Switch>
      <Route path="/campaign/details/donate/:idDonate">
        <ChampingDetailsDonatePage />
      </Route>
      <Route path="/donate/:campaignId">
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
      <Route path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  if (auth.isLogin) {
    routes = (
      <Switch>
        <Route path="/campaign/create">
          <CampingCreatePage />
        </Route>
        <Route path="/campaign/edit/:campaignId">
          <EditCampaign />
        </Route>
        <Route path="/campaign/details/donate/:idDonate">
          <ChampingDetailsDonatePage />
        </Route>
        <Route path="/donate/:campaignId">
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
        <Redirect to="/" />
      </Switch>
    );
  }

  if (auth.user.role === "admin") {
    routes = (
      <Switch>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/campaign/create">
          <CampingCreatePage />
        </Route>
        <Route path="/campaign/edit/:campaignId">
          <EditCampaign />
        </Route>
        <Route path="/campaign/details/donate/:idDonate">
          <ChampingDetailsDonatePage />
        </Route>
        <Route path="/donate/:campaignId">
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
        <Redirect to="/" />
      </Switch>
    );
  }

  return <BrowserRouter>{routes}</BrowserRouter>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserPersistanceLogin: () => dispatch(setUserPersistanceLogin()),
  };
};

<<<<<<< HEAD
export default connect(null, mapDispatchToProps)(App);







=======
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
>>>>>>> 37d9dc976e675d16bd24637e80cbe2772790eaab
