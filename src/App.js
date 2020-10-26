import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { setUserPersistanceLogin } from "./redux/actions/authActions";
import "./App.css";
import Home from "./pages/Home";
import { useEffect } from "react";

function App({ setUserPersistanceLogin }) {
  useEffect(() => {
    setUserPersistanceLogin();
  }, [setUserPersistanceLogin]);

  return (
    <BrowserRouter>
      <Switch>
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
