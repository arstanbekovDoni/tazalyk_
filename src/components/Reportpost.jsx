import {
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
  IconButton,
  Stack,
  Link,
} from "@mui/material";
import React, { useState } from "react";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useNavigate } from "react-router-dom";
import './btn.css'

const Reportpost = ({ id, title, img, description_before, votes }) => {
  const [like,setlike] = useState(votes)

  const [likeactive,setlikeactive] = useState(false)

  function likef(){
    if(likeactive){
      setlikeactive(false)
      setlike(like-1)
    }
    else{
      setlikeactive(true)
      setlike(like+1)
    }
  }

  const navigate = useNavigate();

  const navigateToReports = () => {
    navigate(`/Reports/${id}`);
  };


  return (
    <Stack direction="row" spacing={2}>
    <Card sx={{ display: "inline", ".MuiBox-root.css-19kzrtu": { p: 0 } }}>
      
      <CardActionArea
        onClick={navigateToReports}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "stretch",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 140, height: 140, borderRadius: "15px" }}
          image={`https://tazalyk.fly.dev/api/files/tazalyk_reports/${id}/${img}`}
          alt="Image"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
          }}
        >
          <CardContent>
            <Typography variant="body1">{title}</Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography variant="body2">{title}</Typography>
            </CardContent>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
    <Link to={"/login"} underline="none"><button onClick={likef} className={[likeactive ? 'active-like' : null,'button'].join(' ')}>Like {like}</button></Link>
    </Stack>
  );
};

export default Reportpost;
