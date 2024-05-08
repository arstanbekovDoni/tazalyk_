import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Post = ({ id, title, img, subtitle }) => {
  return (
    <Card sx={{ maxHeight: 246 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://tazalyk.fly.dev/api/files/tazalyk_news/${id}/${img}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography p={0} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography p={0} variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Post;
