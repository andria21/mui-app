import React from 'react';

import withRouter from '../withRouter/withRouter.component';

import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Outlet, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  header: {
    fontFamily: 'Raleway sans-serif !important',
    fontSize: "1.1rem !important",
    letterSpacing: '1.5px !important',
    fontWeight: '500 !important',
  },
  navLink: {
    color: "#000",
    textDecoration: "none"
    
  }
}));



const Header = ({router}) => {
  const classes = useStyles();

  const getColor = curr => {
    if(router.location.pathname === curr) {
      return "#5ECE7B"
    }
  }

  return (
    <>
      <AppBar color="" className={classes.appBar} position="static" >
        <Toolbar>
          <Container maxWidth="xl">
            <Grid container direction="row" spacing={3}>
              <Grid item >
                <Typography variant="h5" color="primary" className={classes.header}>
                  <Link to='/' style={{color:getColor('/')}} className={classes.navLink}>
                    WOMEN
                  </Link>
                </Typography>
              </Grid>
              <Grid item >
                <Typography variant="h5" color="black" className={classes.header}>
                  <Link to='/men' style={{color:getColor('/men')}} className={classes.navLink}>
                    MEN
                  </Link>
                </Typography>
              </Grid>
              <Grid item >
                <Typography variant="h5" color="black" className={classes.header}>
                  <Link to='/kids' style={{color:getColor('/kids')}} className={classes.navLink}>
                    KIDS
                  </Link>
                </Typography>
              </Grid>
              <Grid item md={7} xs={0}/>
              <Grid item md={1} xs={0}>
                <Typography variant="h5" color="black" className={classes.header}>
                  <Link to='/sign-in' style={{color:getColor('/sign-in')}} className={classes.navLink}>
                    SIGN IN
                  </Link>
                </Typography>
              </Grid>
              <Grid item md={2} xs={0}>
                <Typography variant="h5" color="black" className={classes.header}>
                  <Link to='/sign-up' style={{color:getColor('/sign-up')}} className={classes.navLink}>
                    SIGN UP
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default withRouter(Header);