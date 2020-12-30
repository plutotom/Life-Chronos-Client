import React, { Component, useEffect, useState } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import styles from "./homePageStyle";
import { withStyles } from "@material-ui/core/styles";
import TableDisplay from "../dataTable/tableDisplay";

function HomePage(props) {
  // const [data, setData] = React.useState([]);
  const { classes } = props;
  return (
    <div className={classes.mainContainer}>
      <div className={classes.tableContainer}>
        <TableDisplay />
      </div>
    </div>
  );
}
export default withAuth0(withStyles(styles)(HomePage));
