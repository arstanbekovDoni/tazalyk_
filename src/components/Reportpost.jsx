import {
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Reportpost = ({ id, title, img, description_before }) => {
  const navigate = useNavigate();

  const navigateToReports = () => {
    navigate(`/Reports/${id}`);
  };

  return (
    <Card sx={{ display: "inline", '.MuiBox-root.css-19kzrtu' : { p: 0} }}>
      <CardActionArea onClick={navigateToReports}>
        <CardMedia
          component="img"
          sx={{ width: 141 }}
          image={`https://tazalyk.fly.dev/api/files/tazalyk_reports/${id}/${img}`}
          alt="Image"
        />
        <Box sx={{ display: "inline", flexDirection: "column" }}>
          <CardContent>
            <Typography variant="h6">
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              
            >
              {description_before}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default Reportpost;
