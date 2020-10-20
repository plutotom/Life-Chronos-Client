import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useGlobal from "../GlobleState/store";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Profile() {
  const [globalState, globalActions] = useGlobal();
  const classes = useStyles();
  const [user, setUser] = React.useState({ name: "Isaiah" });

  return (
    <Fragment>
      <div className={classes.root}>
        <div>Profile page</div>
        <div>{globalState.userData.email}</div>
        <div>{globalState.userData.settings}</div>
      </div>
    </Fragment>
  );
}
