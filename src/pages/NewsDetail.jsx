import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PocketBase from "pocketbase";
import { Container } from "@mui/material";

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
      <h1>{param.id}</h1>
      {!loading ? (
        <Container>
          <img
            height={120}
            src={`https://tazalyk.fly.dev/api/files/tazalyk_news/${post.id}/${post.img}`}
            alt=""
          />
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </Container>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default NewsDetail;
