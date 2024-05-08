import { Box, Stack } from "@mui/material";
import Feed from "./pages/Feed";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="center">
        <Feed />
      </Stack>
      <Bottombar />
    </Box>
  );
}

export default App;
