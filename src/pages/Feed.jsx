import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { Grid, Container, Typography } from "@mui/material";
import PocketBase from "pocketbase";
import NewsSkeleton from "../components/NewsSkeleton";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  const pb = new PocketBase("https://tazalyk.fly.dev/");

  const getNews = async () => {
    const result = await pb.collection("tazalyk_news").getList(1, 50, {
      $autoCancel: false,
    });

    setNews(result);
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Container>
      <Typography
        mt={2}
        pb={1}
        fontWeight={550}
        gutterBottom
        variant="h7"
        component="div"
      >
        Новости
      </Typography>

      <Grid container spacing={1.5}>
        {!loading ? (
          news?.items?.map((e) => (
            <Grid key={e.id} item xs={12} sm={6} md={4}>
              <Post
                id={e.id}
                subtitle={e.title}
                img={e.img}
                updated={e.updated}
              />
            </Grid>
          ))
        ) : (
          <NewsSkeleton />
        )}
      </Grid>
    </Container>
  );
};

export default Feed;
