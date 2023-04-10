import { Box, Typography , Menu , MenuItem } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from "react";


const component = {
   marginTop : "5px",
}; 

const logout = {
        fontSize : "14px",
        marginLeft : "20px",
}

const Profile = ({ account , setAccount }) => {
    const [open,setOpen] = useState(false);
    const handleCLick = (event) => {
        setOpen(event.currentTarget);
    }
    const handleClose = () =>{
        setOpen(false); 
    }
    const Logout = () =>{
        setAccount('');
    }
    return (
        <>
            <Box>
                <Typography  onClick = {handleCLick} style={{ marginTop: "2px", marginRight: "35px" , cursor : "pointer" }} >{account}</Typography>
                <Menu
                    anchorEl={open}
                    open={Boolean(open)}
                    onClose={handleClose}
                    style={component}
                >
                    <MenuItem onClick={() =>{handleClose(); Logout();}}>
                        <PowerSettingsNewIcon color = "primary" fontSize="small" />
                      <Typography style={logout}>Logout</Typography>
                    </MenuItem>
                </Menu>

            </Box>
        </>
    );
}

export default Profile;