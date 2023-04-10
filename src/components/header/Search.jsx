import {InputBase , Box, List, ListItem}  from "@mui/material";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const useStyled = makeStyles ({
    box: {        
        marginLeft: "1%",
        borderRadius: "2px",
        display: "flex",
      },
    Search_box : {
        color : "blue",
    }
});

const ListWrapper = {
    marginTop : "36px",
    position : "absolute",
    background : "#FFFFFF",
    color : "#000",
}
const Search = () =>{
    const [text,setText] = useState("");
    const {products} = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])
    const getText = (value) =>{
          setText(value);
    }
   return (
    <Box className = "classes.box" style = {{background : "#fff" ,width : "33%" , display : "flex" , marginLeft : "10px"}}>
    <InputBase style={{
          width: "100%",
          paddingLeft: "20px",
          fontSize: "unset",
          display: "flex",
          fontSize : "unset",
        }}
        placeholder = "serach for products ,brands and more" 
        onChange={(e) => getText(e.target.value)}
          value = {text}
         />
         <Box style = {{display : "flex"}}> 
             <SearchIcon style={{color : "blue", padding : "5px"}}/>
         </Box>
         {
            text &&
             <List style = {ListWrapper}>
                {
                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                        <ListItem>
                            <Link style={{textDecoration : "none"}} to = {`/product/${product.id}`}
                                 onClick={() => setText('')}
                            >
                            {product.title.longTitle}
                            </Link>
                        </ListItem>
                    ))
                }
             </List>
         }
    </Box>
   );
}

export default Search;