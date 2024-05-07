import {Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import nigga from "../image 2.png"

const Post = () => {
  return (
    <Card sx={{maxHeight: 246}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={nigga}
            alt="green iguana"
          />
          <CardContent>
            <Typography p={0} gutterBottom variant="h5" component="div">
              Вакансия
            </Typography>
            <Typography p={0} variant="body2" color="text.secondary">
                «Тазалык» муниципалдык ишканасына короо тазалоочулар керек
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  )
}

export default Post
