import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Button , Divider } from "@mui/material";
import { Typography } from "@material-ui/core";
import Countdown from 'react-countdown';
import{ Link } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Component = {
    marginTop : "10px",
    background : "#FFFFFF",
}
const Deal = {
   padding : "15px 20px",
   display : "flex",
}
const Timer = {
    display : "flex",
    marginLeft : "10px",
    alignItems : "center",
    color : "#7f7f7f",
}
const DealText = {
    fontSize : "22px",
    fontWeight : "600",
    marginRight : "25px",
    lineHeight : "32px", 
}
const ViewAllButton = {
    marginLeft : "auto",
    backgroundColor : "#2874f0",
    borderRadius : "2px",
    fontSize : "13px",
    fontWeight : "600",
}
const Image = {
    width : "auto",
    height : "150px"
}
const Text = {
    fontSize : "14px",
    marginTop : "5px",
    fontWeight : "600",
    color : "#212121",
}
const Text1 = {
    fontSize : "14px",
    marginTop : "5px",
    color : "green",
}
const Text2 = {
    fontSize : "14px",
    marginTop : "5px",
    color : "#212121",
    opacity : "0.6", 
}

const Slide = ({ products , title , timer}) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
           return <Box variant = "span" >{hours} : {minutes} : {seconds} Left</Box>; 
      }
    return (
        <Box style = {Component} >
            <Box style = {Deal}>
                <Typography style={DealText} >{title}</Typography>
                {
                    timer &&
                    <Box style = {Timer}>
                    <img src = {timerURL} alt ="timer" style={{ width : "24px",}} />
                    <Countdown date ={Date.now() + 5.04e+7} renderer={renderer} />
                </Box>
                }
                <Button variant = "contained" color = "primary" style={ViewAllButton} >View All</Button>
            </Box>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                slidesToSlide={1}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    products.map(product => (
                        <Link to = {`product/${product.id}`} style = {{textDecoration : "none"}}>
                        <Box textAlign= "center" style = {{padding : "25px 15px"}}>
                        <img src={product.url} style={Image} alt="product" />
                        <Typography style={Text} >{product.title.shortTitle}</Typography>
                        <Typography style={Text1}>{product.discount}</Typography>
                        <Typography style={Text2}>{product.tagline}</Typography>
                        </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Box>

    );
}

export default Slide;