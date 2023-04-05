import {InputBase , Box}  from "@mui/material";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";

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
const Search = () =>{
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
         />
         <Box style = {{display : "flex"}}> 
             <SearchIcon style={{color : "blue", padding : "5px"}}/>
         </Box>
    </Box>
   );
}

export default Search;