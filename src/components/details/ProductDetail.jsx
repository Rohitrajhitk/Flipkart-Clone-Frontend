import {Box ,Table,TableBody,TableCell,TableRow,Typography } from '@mui/material';
import {LocalOffer as Badge }from '@mui/icons-material';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    component: {
      fontSize: "14px",
    },
  });

const BadgeStyle = {
    marginRight : "10px",
    color : "#00cc00",
    fontSize : "15px",
}
const ColumnText = {
    fontSize : "14px",
    verticalAlign : "baseline",
    marginTop : "10px",
}


const ProductDetail = ({product}) =>{
    const classes = useStyles();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (4*25*60*60*1000));
  return(
     <>
        <Typography>{product.title.longTitle}</Typography>
    <Typography style={{marginTop : "5px" , color : "#878787", fontSize : "14px"}}>
       8 Rating & 1 Reviews
       <Box component= "span" ><img style = {{width : "77px" , marginLeft : "20px"}} src = {fassured} alt = "" /></Box>
       </Typography>
       <Typography>
           <Box component = "span" style = {{fontSize : "28px"}} >₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
           <Box component = "span" style = {{color : "#878<Badge /> 787"}}  ><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
           <Box component = "span" style = {{color : "#388E3C"}} >{product.price.discount}</Box>
       </Typography>
       <Typography >Available offers</Typography>
       <Box style = {{verticalAlign : "baseline" , }} >
          <Typography style={{fontSize : "14px",marginTop : "10px", }} ><Badge style = {BadgeStyle} />Get extra 20% off upto ₹50 on 1 item(s) T&C</Typography>
          <Typography style={{fontSize : "14px",marginTop : "10px", }} ><Badge style = {BadgeStyle} />Get extra 13% off (price inclusive of discount) T&C</Typography>
          <Typography style={{fontSize : "14px",marginTop : "10px", }} ><Badge style = {BadgeStyle} />Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500* Know More</Typography>
          <Typography style={{fontSize : "14px",marginTop : "10px", }}><Badge style = {BadgeStyle} />Buy 2 items save 5%; Buy 3 or more save 10%See all products T&C</Typography>
          <Typography style={{fontSize : "14px",marginTop : "10px", }}><Badge style = {BadgeStyle} />5% Cashback on Flipkart Axis Bank Card  T&C</Typography>
          <Typography style={{fontSize : "14px",marginTop : "10px", }}><Badge style = {BadgeStyle} />No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2500 T&C</Typography>
       </Box>
       <Table>
          <TableBody>
            <TableRow  style={ColumnText} >
                <TableCell  style = {{color : "#878787",fontSize : "14px", border : "none"}} >Delivery</TableCell>
                <TableCell  style = {{fontWeight : "600",fontSize : "14px", border : "none"}}>Delivery by {date.toDateString()} | ₹40 </TableCell>
            </TableRow>
            <TableRow style={ColumnText}  >
                <TableCell  style = {{color : "#878787",fontSize : "14px" , border : "none"}} >Warranty</TableCell>
                <TableCell style={{fontSize : "14px" , border : "none"}} >No Warranty</TableCell>
            </TableRow>
            <TableRow style={ColumnText}  >
                <TableCell  style = {{color : "#878787",fontSize : "14px", border : "none"}} >Seller</TableCell>
                <TableCell style = {{fontSize : "14px" , border : "none"}}  >
                    <Box component = "span" style = {{color : "#2874f0"}} >SuperComNet</Box>
                    <Typography>GST invoice available</Typography>
                    <Typography>View more sellers starting from ₹{product.price.cost} </Typography>
                </TableCell>
            </TableRow>
            <TableRow style={ColumnText} >
                <TableCell style = {{fontSize : "14px" , border : "none"}} colSpan = {2}>
                     <img src = {adURL} style={{width : "390px"}} alt = "flipkartpoints"/>
               </TableCell>
            </TableRow>
            <TableRow style={ColumnText} >
                <TableCell style = {{color : "#878787",fontSize : "14px" , border : "none"}} >Description</TableCell>
                <TableCell style = {{fontSize : "14px " , border : "none"}}  >{product.description}</TableCell>
            </TableRow>
          </TableBody>
       </Table>
     </>
  );
}

export default ProductDetail;