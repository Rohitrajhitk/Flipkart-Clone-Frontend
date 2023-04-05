import React, { Component } from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { makeStyles } from "@material-ui/core";

//component
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const useStyled = makeStyles((theme) => ({
    root: {
        backgroundColor: "#2874f0",
    },
    box: {
        marginLeft: "12%",
        lineHeight: "0",
        textDecoration: "none",
        color: "inherit",
    },
    typo: {
        fontStyle: "italic",
    }
}));

const buttonWrapper = {
    margin : "0 5% 0 auto",
}
const PlusImage = styled("img")({
    width: 10,
    height: 10,
    marginLeft: 2,
});


const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className="classes.root" >
            <Toolbar style={{ minHeight: "55px" }}>
                <Box  style = {{marginLeft : "12%" , lineHeight : "0"}}>
                    <img src={logoURL} style={{ width: 75 }} />
                    <Box style={{ display: "flex" }}>
                        <Typography className="classes.typo" style={{ fontSize: 10 }}>
                            Explore&nbsp;
                            <Box component="span" style={{ color: "#FFE500" }}>
                                Plus
                            </Box>
                        </Typography>
                        <PlusImage src={subURL} alt="Plus" />
                    </Box>
                </Box>
                <Search />
                <Box style = {buttonWrapper}>
                    <CustomButtons />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;