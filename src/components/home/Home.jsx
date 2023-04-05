import Banner from "./Banner";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

const compnent = {
    padding : "10px",
    background : "#F2F2F2",
}

const Home = () =>{
   return (
      <>
      <Navbar />
      <Box style = {compnent} >
      <Banner/>
      </Box>
      </>
   );
}

export default Home;