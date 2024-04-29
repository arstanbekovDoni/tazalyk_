import { BottomNavigation, BottomNavigationAction } from "@mui/material" 
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import ArticleIcon from '@mui/icons-material/Article';
import { useState } from "react";

const Bottombar = () => {
  const [ value, setValue] = useState(0)
  return (
    <BottomNavigation
     sx={{ width: '100%', position: 'sticky', bottom:'0'}} 
     value={value} 
     onChange={(event, newValue) => { 
      setValue(newValue)
      }}
    >
      <BottomNavigationAction label="Home" Icon={<HomeIcon />} />
      <BottomNavigationAction label="Add" Icon={<AddIcon />} />
      <BottomNavigationAction label="Paper" Icon={<ArticleIcon />} />
    </BottomNavigation>
  )
}

export default Bottombar
