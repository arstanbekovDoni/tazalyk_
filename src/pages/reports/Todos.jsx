import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

const Todos = () => {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);

  const pb = new PocketBase("https://tazalyk.fly.dev/");

  const getReports = async () => {
    const result = await pb.collection("tazalyk_reports").getList(1, 50, {
      $autoCancel: false,
      filter: "status = 'to do'",
    });

    setReports(result);
    setLoading(false);
  };

  useEffect(() => {
    getReports();
  }, []);

  return !loading ? (
    <Grid container>
      {reports?.items?.map((e) => (
        <p>{e.title}</p>
      ))}
    </Grid>
  ) : (
    <h1>Loading</h1>
  );
};

export default Todos;
