import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link  from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import {
  navigate
} from "@reach/router";
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});
const navHandler = (e) =>{
  e.preventDefault();
  navigate('/article');
}
const catHandler = (e) =>{
  e.preventDefault();
  navigate('/categories');
}


function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
     
        <Toolbar className={classes.toolbar}>
        <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/"
          >
            <h3 >Silent Words</h3>
      </Link>
          <div className={classes.left}/>
          <Link href="/">
            <img src="https://cdn.discordapp.com/attachments/872468951760785411/875328784826515486/Silent_Words_Logo_1-removebg-preview.png" style={{width:'10%', marginLeft:'-36%'}}></img>
            </Link>
          <div className={classes.right}>
          <Button
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink)}
              color="white"
              onClick={(e) => catHandler(e)}
            >
              {'Categories'}
            </Button>
            <Button
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink)}
              color="white"
              onClick={(e) => navHandler(e)}
            >
              {'Articles'}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);