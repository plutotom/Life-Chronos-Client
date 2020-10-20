import React, { useState, useRef } from "react";
import useGlobal from "../GlobleState/store";
import { POSTLogin } from "../utiles/HandleUserAPI";
import TopNavBar from "../NavBar/TopNavBar";
import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="https://material-ui.com/">
        Life Chronos
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
  const [globalState, globalActions] = useGlobal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const email = React.createRef(null);
  // const password = React.createRef(null);

  const handleLogin = () => {
    console.log("loggin you in", email, password);
    POSTLogin(email, password).then(async (res) =>
      res.data.success
        ? globalActions.setAuth(res.data.data) &
          //this is getting state from server to set up the settings that this user
          globalActions.settingDefaultState() &
          globalActions.entrysDefaultState()
        : globalActions.setError(res.data.message)
    );
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const classes = useStyles();
  return (
    <div>
      <TopNavBar />
      {/* <div style={{ paddingLeft: "100px" }}>
        <p>log in page</p>
        {globalState.errorState ? <p>{`${globalState.errorMessage}`}</p> : null}
        <div>
          <form onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Email" ref={email}></input>
            <input
              type="password"
              placeholder="Password"
              ref={password}
            ></input>
            <button onClick={handleLogin}>login</button>
          </form>
        </div>
      </div> */}

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            onSubmit={(event) => event.preventDefault() & handleLogin()}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => handleEmail(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => handlePassword(e)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
