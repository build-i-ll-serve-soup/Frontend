import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    color: "#7cb342",
    marginRight: "-12rem"
  },
  getStarted: {
    color: "#7cb342",
    borderColor: "#7cb342"
  }
}));

export default function Nav(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.login ? (
        <AppBar position="static" color="white">
          <Toolbar>
            <Typography variant="h5" className={classes.title} style={{textAlign: 'left', paddingLeft: '5rem'}}>
              I'll Serve Soup
            </Typography>
            <Link default to="/inventory">
              <Button>Inventory</Button>
            </Link>
            <Link to="/orders">
              <Button>Orders</Button>
            </Link>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="static" color="white">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              I'll Serve Soup
            </Typography>
            <Link default to="/login">
              <Button>Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button variant="outlined" className={classes.getStarted}>
                Get Started
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
}
