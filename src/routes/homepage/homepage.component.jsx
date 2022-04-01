import React from 'react';

import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

import Directory from '../../components/directory/directory.component.jsx';
import Header from '../../components/header/Header.jsx';
import CategoryName from '../../components/category-name/category-name.component';

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(10)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(10),
  
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <BackgroundImage /> */}
      <Container maxWidth="xl" className={classes.blogsContainer}>
        <CategoryName name="Women" />
        <Directory />
      </Container>
    </div>
  );
}

export default HomePage;