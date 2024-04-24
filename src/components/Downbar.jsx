import { Add, Home } from '@mui/icons-material';
import { AppBar, Box, Toolbar, } from '@mui/material';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});

const Icon = styled(Box)(({ theme }) => ({
  display:"flex",
  alignItems:"center",
  gap: "20px"
}));

const Downbar = () => {
  return (
    <AppBar position="sticky" sx={{backgroundColor:"white"}}>
      <StyledToolbar>
        <Icon>
          <Home/>
        </Icon>
        <Icon>
          <Add/>
        </Icon>
        <Icon>
          <Add/>
        </Icon>
      </StyledToolbar>
    </AppBar>
  )
}

export default Downbar