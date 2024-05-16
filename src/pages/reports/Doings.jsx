import { Box, Grid, Typography } from "@mui/material";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import Reportpost from "../../components/Reportpost";
import PropTypes from "prop-types";
import NewsSkeleton from "../../components/NewsSkeleton";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


const Doings = () => {
  const navigate = useNavigate();

  const navigateToReports = () => {
    navigate(`/Reports/${id}`);
  };

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
        <CustomTabPanel value={value} index={0}>
          <Reportpost
            onClick={navigateToReports}
            id={e.id}
            title={e.title}
            img={e.img_before}
          />
        </CustomTabPanel>
      ))}
    </>
  ) : (
    <NewsSkeleton />
  );
};

export default Doings;
