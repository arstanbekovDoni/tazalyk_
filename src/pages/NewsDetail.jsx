import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import PocketBase from "pocketbase";
import {
  Box,
  CircularProgress,
  Container,
  Typography,
  AppBar,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./det.css";
import { formatDate } from "../utils/dateformatter";

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
            <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
              <NavLink to="/" sx={{ underline: "none" }}>
                <Box ml={1} mt={2} sx={{ display: "flex", height: "40px" }}>
                  <ArrowBackIosIcon />
                  <Typography>Назад</Typography>
                </Box>
              </NavLink>
            </AppBar>
          </Box>
          <Container className="Dancho">
            <img
              height={200}
              width={"100%"}
              style={{ objectFit: "cover", borderRadius: "15px" }}
              src={`https://tazalyk.fly.dev/api/files/tazalyk_news/${post.id}/${post.img}`}
              alt=""
            />
            <p>{formatDate(post?.updated)}</p>
          </Container>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Загрузка... &nbsp;
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default NewsDetail;
