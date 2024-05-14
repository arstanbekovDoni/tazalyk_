import {
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reportpost = ({ id, title, img, description_before, votes }) => {
  const navigate = useNavigate();

  const navigateToReports = () => {
    navigate(`/Reports/${id}`);
  };

  const [vote, setVote] = useState(votes);

  return (
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
            <CardContent>
              <Typography variant="body2">{vote}</Typography>
            </CardContent>
          </Box>
        </Box>
      </CardActionArea>
      <Button variant="outlined" onClick={() => setVote(vote + 1)}>
        Vote
      </Button>
    </Card>
  );
};

export default Reportpost;
