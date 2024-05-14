import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/dateformatter";

const Post = ({ id, title, img, subtitle, updated }) => {
  const navigate = useNavigate();

  const navigateToNews = () => {
    navigate(`/news/${id}`);
  };

  return (
    <Card sx={{ maxHeight: 246 }}>
      <CardActionArea onClick={navigateToNews}>
        <CardMedia
          component="img"
          height="140"
          image={`https://tazalyk.fly.dev/api/files/tazalyk_news/${id}/${img}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography p={0} variant="body1" color="text.secondary">
            {subtitle}
          </Typography>
          <Typography variant="body2" textAlign={"end"}>
            {formatDate(updated)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Post;
