
import {Box, Typography} from "@mui/material"; 
import { navData } from "../../constants/Data";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  component:{
    display: "flex",
    margin: "55px 130px 0 130px",
    justifyContent: "space-between",
    [theme.breakpoints.down('md')]:{
      marginLeft :"0px",
    }
  }
}));
const container = {
    padding : "12px 8px",
    textAlign : "center",
}

const text = {
    fontSize : "14px",
    fontWeight : "600",
    fontFamily : "inherit",
}
const Navbar = () =>{
    const classes = useStyles();
   return(
      <Box style = {{overflow : "hidden"}} className={classes.component}>
        {
            navData.map(data =>(
                <Box style = {container} >
                    <img src = {data.url} alt = "nav" style={{width : 64}} />
                    <Typography style={text} >{data.text}</Typography>
                </Box>
            ))
        }
      </Box>
   );
} 

export default Navbar;