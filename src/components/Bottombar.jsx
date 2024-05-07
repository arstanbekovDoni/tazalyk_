import { BottomNavigation, BottomNavigationAction } from "@mui/material" 
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import ArticleIcon from '@mui/icons-material/Article';
import { useState } from "react";
import { Link } from "react-router-dom";

const Bottombar = () => {
  const [ value, setValue] = useState(0)
  return (
    <BottomNavigation
    
     sx={{ backgroundColors:"black", width: '100%', position: 'sticky', bottom:'0'}} 
     value={value} 
     onChange={(event, newValue) => { 
      setValue(newValue)
      }}
    >
      <Link to={"/"} underline="none"><BottomNavigationAction label="Home" icon={<HomeIcon />} /></Link>
      <Link to={"/add"} underline="none"><BottomNavigationAction label="Add" icon={<AddIcon />} /></Link>
      <Link to={"/reports"} underline="none"><BottomNavigationAction label="Reports" icon={<ArticleIcon />} /></Link>
    </BottomNavigation>
  )
}

export default Bottombar
