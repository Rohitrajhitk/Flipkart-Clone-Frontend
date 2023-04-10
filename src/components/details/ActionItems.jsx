import {Box, Button} from '@mui/material';
import  {ShoppingCart as Cart} from '@mui/icons-material';
import {FlashOn as Flash} from '@mui/icons-material';
import { makeStyles } from "@material-ui/core";

const useStyled = makeStyles((theme) => ({
    root :{
        [theme.breakpoints.down('lg')]:{
             padding : "20px 40px",
          }
    }
}));
const LeftContainer = {
    minWidth : "40%",
    padding : "40px 0 0 80px",
}

const Image = {
    padding : "15px 20px",
    border : "1px solid #f0f0f0",
    width : "90%" ,
}
const Image2 = {
    padding : "15px 20px",
    width : "90%" ,
 
}
const StyleButton1 = {
    width : "48%",
    height : "50px",
    borderRadius : "2px",
    marginRight : "10px",
    background : "#ff9f00",

}
const StyleButton2 = {
    width : "48%",
    height : "50px",
    borderRadius : "2px",
    background : "#fb541b",
}

const ActionItems = ({product}) =>{
    const classes = useStyled();
   return(
      <Box style={LeftContainer} className = {classes.root} >
           <Box style={Image} >
          <img style={Image2} src = {product.detailUrl}  alt = "detail-img" />
          </Box>
          <Button style = {StyleButton1} variant='contained' ><Cart />Add to Cart</Button>
          <Button style = {StyleButton2}  variant='contained'  ><Flash />Buy Now</Button>
      </Box>
   );
}

export default ActionItems;