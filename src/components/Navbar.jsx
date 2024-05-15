import { AppBar, Avatar, Box, Toolbar, Typography, styled } from '@mui/material';
import React from 'react';
import Logo from "../public/logosm.png"

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});

const Icon = styled(Box)(({ theme }) => ({
  display:"flex",
  alignItems:"center",
  gap: "20px"
}));

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{backgroundColor:"white"}}>
      <StyledToolbar>
        <Box sx={{display:"block"}}> 
          <Typography sx={{ color:"success" }} >green_tokmok</Typography>
        </Box>
        <Icon>
          <Avatar variant="plain" />
        </Icon>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
