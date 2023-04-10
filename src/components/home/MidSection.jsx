import { Box, Grid } from "@mui/material";

import { imageURL } from "../../constants/Data.jsx";
import { makeStyles } from "@material-ui/core";
const Image = {
    width : "100%",
}
const useStyle = makeStyles(theme => ({
    image:{
      marginTop:"10px",
      width:"100%",
      display:"flex",
      justifyContent:"spaceBetween",
      [theme.breakpoints.down('md')]:{
        objectFit:"cover",
        height:"120px"
      }
    }
  }));

const component = {
    display : "flex",
    marginTop : "10px",
    justifyContent : "space-between",
}

const CovidImage = {
    marginTop : "10px",
    width : "100%",
    display : "flex",
    justifyContent : "space-between", 
}

const MidSection = () =>{
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    const classes = useStyle();
   return(
       <>
      <Grid lg = {12} sm = {12} md = {12} xs = {12} container style = {component} >
         {
              imageURL.map(image =>(
                   <Grid  item lg = {4} md = {4} sm = {12} xs = {12}>
                   <img style={Image} src = {image} alt = "image" />
                   </Grid>
              ))
         }
      </Grid>
       <img style={CovidImage} src= {url} alt = "covid" className= {classes.image} />
      </>
   );
}

export default MidSection;