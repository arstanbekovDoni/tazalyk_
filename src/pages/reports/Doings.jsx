import PocketBase from "pocketbase";
import { useEffect, useState } from "react";

const Doings = () => {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);

  const pb = new PocketBase("https://tazalyk.fly.dev/");

  const getReports = async () => {
    const result = await pb.collection("tazalyk_reports").getList(1, 50, {
      $autoCancel: false,
      filter: "status = 'doing'",
    });

    setReports(result);
    setLoading(false);
  };

  useEffect(() => {
    getReports();
  }, []);

  return !loading ? (
    <>
      {reports?.items?.map((e) => (
        <p>{e.title}</p>
      ))}
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default Doings;
