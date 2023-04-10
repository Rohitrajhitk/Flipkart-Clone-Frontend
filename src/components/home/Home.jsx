import Banner from "./Banner";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import { useDispatch , useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions.js";
import { useEffect } from "react";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const compnent = {
    padding : "10px",
    background : "#F2F2F2",
}

const Home = () =>{
   
   const dispatch = useDispatch();
  const {products} = useSelector(state=>state.getProducts);
  
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

   return (
      <>
      <Navbar />
      <Box style = {compnent} >
      <Banner/>
      <MidSlide  products = {products} title = "Deal of the Day" timer = {true} />
      <MidSection />
      <Slide  products = {products} title = "Discounts for You" timer = {false} />
      <Slide  products = {products} title = "Suggested Items" timer = {false} />
      <Slide  products = {products} title = "Top Selection" timer = {false} />
      <Slide  products = {products} title = "Recommended Items" timer = {false} />
      <Slide  products = {products} title = "Trending Offers"  timer = {false}/>
      <Slide  products = {products} title = "Session's top picks" timer = {false} />
      <Slide  products = {products} title = "Top Deals on Accessories"timer = {false} />
      </Box>
      </>
   );
}

export default Home;