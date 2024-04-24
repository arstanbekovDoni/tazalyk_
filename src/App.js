import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Downbar from "./components/Downbar";

function App() {
  return (
    <Box>
      <Navbar/> 
      <Stack direction="row" spacing={2} justifyContent="center">
        <Feed/>
      </Stack>
      <Downbar/>
    </Box>
  )
}

export default App
