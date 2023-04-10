import { Box } from "@mui/material";
import Slide from "./Slide";
import { makeStyles } from "@material-ui/core";
const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

const useStyles = makeStyles(theme => ({
    leftContainer:{
        width:"86%",
        [theme.breakpoints.down('md')]:{
          width:"100%"
        }
      },
    rightContainer:{
      [theme.breakpoints.down('md')]:{
          display:"none",
      }
    }
  }));

const Image = {
    width : "217px",
}
const component = {
    display : "flex",
}
const RightComponent = {
    background : "#FFFFFF",
    padding : "5px",
    marginTop : "10px",
    marginLeft : "10px",
    width : "17%",
    textAlign : "center",
}


const MidSlide = ({products , title , timer}) =>{
    const classes = useStyles();
   return(
      <Box style = {component} >
          <Box className = {classes.leftContainer}> 
          <Slide  products = {products} title = {title} timer = {timer} />
          </Box>
          <Box style = {RightComponent} className= {classes.rightContainer} >
              <img style={Image} src = {adURL} alt = 'ad' />
          </Box>
      </Box>
   );
}

export default MidSlide;