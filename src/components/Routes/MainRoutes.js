import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import clsx from "clsx";

import HomePage from "../pages/HomePage";
import SideBarNav from "../NavBar/SideBarNav";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import States from "../pages/States";
import PublicHomePage from "../pages/PublicHomePage";
import LoginPage from "../pages/LoginPage";
import CalendarView from "../pages/CalendarView";

import useGlobal from "../GlobleState/store";
import registerPage from "../pages/registerPage";
import NotFoundPage from "../pages/NotFoundPage";

function MainRoutes(props) {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState();
  const [hasAuth, sethasAuth] = React.useState(true);
  const [globalState, globalActions] = useGlobal();
  const { classes } = props;

  return globalState.auth ? (
    <Router>
      <div>
        <SideBarNav openHandeler={setOpen} openState={open} />
        <div // moving content over when side bar opens
          className={clsx({
            [classes.open]: open,
            [classes.close]: !open,
          })}
        >
          <Redirect to="/HomePage" />
          <Route exact path="/EntreyInput" component={CalendarView} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/states" component={States} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/settings" component={Settings} />
        </div>
      </div>
    </Router>
  ) : (
    <Router>
      {/* redirect forces the user to fall onto to="/login" no matter waht page they where on 
      any Route here is a posable route for the user to go to if they are not loged in.
      */}
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={registerPage} />
        <Route exact path="/homepage" component={PublicHomePage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default withStyles(styles)(MainRoutes);
