
import { Box , Button, Typography } from "@mui/material";
import {ShoppingCart}from '@mui/icons-material';

const wrapper = {
    display : "flex",
    margin : "0 3% 0 auto",
    alignItems : "center"
}

const loginButton = {
    color : "#2874f0",
    background : "#fff",
    textTransform : "none",
    padding : "5px 40px",
    borderRadius : "2px",
    boxShadow : "none",
    fontWeight : "600",
    height : "32px",
    marginRight : "40px",
    fontSize : "14px",
}
const typo1 = {
    marginRight : "40px",
    fontSize : "14px",
    width : 135,
    marginTop : "3px",
}
const typo2 = {
    marginRight : "40px",
    fontSize : "14px",
    marginTop : "3px",
}
const typo3 = {
    
    fontSize : "14px",
}

const cart_box = {
    display : "flex",
    marginRight : "40px",
    fontSize : "14px",
}
const cart_box2 = {
   
}
const CustomButtons = () =>{
    return (
        <Box style = {wrapper}>
            <Button style = {loginButton} variant="contained">Login</Button>
            <Typography style = {typo1}   >Become a Seller</Typography>
            <Typography style = {typo2}>More</Typography>
            <Box style = {cart_box}>
                <ShoppingCart style = {cart_box2} /> 
                <Typography style = {typo3}>Cart</Typography>
            </Box>
        </Box>
    );
}

export default CustomButtons;