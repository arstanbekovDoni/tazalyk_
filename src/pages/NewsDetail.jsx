import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import PocketBase from "pocketbase";
import { Box, CircularProgress, Container, Typography, AppBar } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const NewsDetail = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const param = useParams();
  const pb = new PocketBase("https://tazalyk.fly.dev");

  const getPost = async () => {
    const result = await pb.collection("tazalyk_news").getOne(param.id, {
      $autoCancel: false,
    });
    setPost(result);
    setLoading(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      {!loading ? (
      <>
        <Box>
          <AppBar position="sticky" sx={{backgroundColor:"white"}}>
            <NavLink to="/"><Box ml={1} mt={2} sx={{display:"flex", height:'40px'}}><ArrowBackIosIcon /><Typography>Назад</Typography></Box></NavLink>
          </AppBar>
        </Box>
        <Container pt={4}>
          <img
            height={160}
            
            src={`https://tazalyk.fly.dev/api/files/tazalyk_news/${post.id}/${post.img}`}
            alt=""
            
          />
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </Container>
      </>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
            Загрузка... &nbsp;
            <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default NewsDetail;
