import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Login from './Login';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    color: '#7cb342',
    marginRight: '-5rem'
  },
  getStarted: {
      color: '#7cb342',
      borderColor: '#7cb342',
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            I'll Serve Soup
          </Typography>
          <Button color="inherit">Sign In</Button>
          <Button variant="outlined" className={classes.getStarted}>Get Started</Button>
        </Toolbar>
      </AppBar>

    <Login />
    </div>
  );
}
