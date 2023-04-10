import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams} from 'react-router-dom';
import {Box, Grid, Typography} from '@mui/material';

import {getProductDetails} from '../../redux/actions/productActions';
import ActionItems from "./ActionItems";
import ProductDetail from "./ProductDetail";
import { makeStyles } from "@material-ui/core";

const useStyled = makeStyles((theme) => ({
    root :{
        [theme.breakpoints.down('md')]:{
            marginLeft:"0",
          }
    }
}));

const component = {
    background : "#F2F2F2",
}
const Container = {
    background : "#FFFFFF",
    display : "flex",
}
const RightContainer = {
    marginTop : "50px",

}


const DetailView = () =>{
    const classes = useStyled();
    const dispatch = useDispatch();
    const {id} = useParams();
    const { loading , product } = useSelector(state => state.getProductDetails);
    useEffect(()=>{
           if(product && id !== product.id)
               dispatch(getProductDetails(id))
    },[dispatch , id , product , loading]);

   return (
      <Box style = {component} className = {classes.root}>
         {
            product && Object.keys(product).length &&             
              <Grid style={Container} container>
              <Grid item lg ={4} md = {4} sm = {8} xs = {12}>
                 <ActionItems product = {product} />
              </Grid>
              <Grid style={RightContainer} item lg = {8} md = {8} sm = {8} xs = {12}>
                    <ProductDetail product = {product} />
              </Grid>
              </Grid>
         }
      </Box>
   );
}

export default DetailView;