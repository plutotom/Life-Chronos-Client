import React from "react";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function TopNavBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
    >
      <MenuIcon />
    </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/Homepage"
            >
              <Button color="inherit" style={{ color: "white" }}>
                Home
              </Button>
            </Link>
          </Typography>

          <Link style={{ textDecoration: "none", color: "black" }} to="/Login">
            <Button color="inherit" style={{ color: "white" }}>
              Login
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/register">
            <Button color="inherit" style={{ color: "white" }}>
              Sing up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
