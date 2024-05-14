import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import PocketBase from "pocketbase";
import NewsSkeleton from "../../components/NewsSkeleton";
import { Grid, Typography } from "@mui/material";
import Reportpost from "../../components/Reportpost";
import Todos from "./Todos";
import Doings from "./Doings";
import Dones from "./Dones"

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "black",
    "&.Mui-selected": {
      color: "black",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

function Reports() {
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = useState(true);
  const [news, setReports] = useState([]);

  const pb = new PocketBase("https://tazalyk.fly.dev/");

  const getReports = async () => {
    const result = await pb.collection("tazalyk_reports").getList(1, 50, {
      $autoCancel: false,
    });

    setReports(result);
    console.log(result.items);
    setLoading(false);
  };

  useEffect(() => {
    getReports();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Navbar />
      <Box mt={2} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Ожидают" {...a11yProps(0)} />
          <StyledTab label="В процессе" {...a11yProps(1)} />
          <StyledTab label="Сделано" {...a11yProps(2)} />
        </StyledTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Todos></Todos>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Doings></Doings>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Dones></Dones>
      </CustomTabPanel>
      <Bottombar />
    </Box>
  );
}

export default Reports;
