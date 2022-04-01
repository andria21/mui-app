import React from 'react';
import './card.styles.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "100%",
    fontFamily: "Raleway, sans-serif"
  },
  media: {
    height: 340,
  },
  title: {
    color: "#404040",
    fontFamily: 'Raleway sans-serif !important',
    fontSize: "1.1rem !important"
  },
  price: {
    color: "#000 !important",
    fontFamily: 'Raleway sans-serif !important',
    fontSize: "1.09rem !important"
  }
}));

const CardComponent = ({title, price, imageUrl}) => {
  const classes = useStyles();
  return (
    <div>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
        />
      </CardActionArea>
    </Card>

    <br />

    <Typography gutterBottom variant="h5" component="div" className={classes.title}>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary" className={classes.price}>
      ${price}
    </Typography>
    </div>
  )
}

export default CardComponent;