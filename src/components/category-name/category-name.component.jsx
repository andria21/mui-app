import React from 'react';

import { makeStyles } from '@mui/styles';

import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(10),
  
  },
}));

function CategoryName({name}) {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" className={classes.blogTitle}>
        {name}
      </Typography>
    </div>
  );
}

export default CategoryName;