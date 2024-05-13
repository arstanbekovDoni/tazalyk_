import {
    Card,
    Box,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
} from "@mui/material";
import React from 'react'
import { useNavigate } from "react-router-dom";

const Reportpost = ({ id, title, img_before, description_before }) => {
    const navigate = useNavigate();

    const navigateToReports = () => {
    navigate(`/Reports/${id}`);
  };
  return (
    <Card sx={{ display: 'flex' }}>
        <CardActionArea onClick={navigateToReports}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={`https://tazalyk.fly.dev/api/files/tazalyk_reports/${id}/${img_before}`}
                alt="Image"
            />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography pt={2} component="div" variant="h6">
                {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                {description_before}
            </Typography>
            </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default Reportpost
