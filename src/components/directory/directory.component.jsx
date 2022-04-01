import React, { Component } from 'react';

import Grid from '@mui/material/Grid';

import CardComponent from '../Card/card.component';

class Directory extends Component {
  constructor(){
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats',
          price: '30.99'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets',
          price: '30.99'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers',
          price: '30.99'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
          price: '30.99'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
          price: '30.99'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
          price: '30.99'
        }
      ]
    }
  }
  render() {
    return (
      <Grid container spacing={6} justifyContent="space-evenly" alignItems="center">
        {
          this.state.sections.map(({id, title, price, imageUrl})=> (
            <Grid item xs={12} sm={6} md={4}>
              <CardComponent 
              key={id}
              imageUrl={imageUrl}
              title={title}
              price={price}
              />
            </Grid>
          ))
        }
      </Grid>
    );
  }
}

export default Directory;