import React from 'react'
import Post from './Post'
import { Grid, Container, Typography } from '@mui/material'

const Feed = () => {
  return (
    <Container>
      <Typography mt={6} pb={2} fontWeight={550} gutterBottom variant="h7" component="div" >
        Новости
      </Typography>

      <Grid container spacing={1.5}>
        <Grid item xs={12} sm={6} md={4}>
           <Post/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
           <Post/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
           <Post/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
           <Post/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
           <Post/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
           <Post/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
           <Post/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Feed
