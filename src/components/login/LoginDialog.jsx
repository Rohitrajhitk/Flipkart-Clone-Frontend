import {Button, Dialog, TextField, Typography , Box} from "@mui/material";
import { useState , useContext } from "react";
import { DataContext } from "../../context/DataProvider.jsx";
import { authenticateSignUp  , authenticateLogin } from "../../service/api.js";
const component = {
    height : "70vh",
    width : "90vh",
    
}

const Image = {
    background : "#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat",
    height : "82%",
    width : "28%",
    padding : "45px 35px",
}
const wrapper = {
    display  : "flex",
    flexDirection : "column",
    padding : "25px 35px",
    flex : "1",
    marginTop : "20px"
}
const LoginButton = {
    textTransform : "none",
    marginTop : "20px",
    background : "#FB641B",
    color : "#fff", 
    height : "48px",
    borderRadius : "2px",
}
const RequestOtp = {
    textTransform : "none",
    marginTop : "20px",
    background : "#fff",
    color : "#2874f0", 
    height : "48px",
    borderRadius : "2px",
    boxShadow : "0 2px 4px 0 rgb(0 0 0/20%)",
    marginTop : "20px"
}
const Text = {
    fontSize : "12px",
    marginTop : "20px",
    color : "#878787", 
}
const CreateAcoount = {
    fontSize : "14px",
    marginTop : "20px",
    textAlign : "center",
    color : "#2874f0",
    fontWeight : "600",
    cursor : "pointer",
}
const Error = {
    color : "#ff6161",
    fontSize : "10px",
    lineHeight : "0",
    marginTop : "15px",
    fontWeight : "600",

}

const accountInitialValues = {
    login : {
        view : "login",
        heading : "Login",
        subHeading : "Get access to your Orders, Wishlists and Recommendations",
    },
    signup : {
        view : "signup",
        heading : "Looks like you're new here!",
        subHeading : "Signup with your mobile number to get started",
    }
}
const signupInitialValues = {
    firstname : "",
    lastname : "",
    username : "",
    email : "",
    password : "",
    phone : "",
};

const loginInitialalues = {
    username : '',
    password : '',
}

const LoginDialog = ({open,setOpen}) =>{
    const [account , toggleAccount] = useState(accountInitialValues.login);
    const [signup,setSignup] = useState(signupInitialValues);
    const {setAccount} = useContext(DataContext);
    const [login,setLogin] = useState(loginInitialalues);
    const [error,setError] = useState(false);

    const handleClose = () =>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }
    const toggleSignup = () =>{
        toggleAccount(accountInitialValues.signup);
    }
    const onInuputChange = (e) =>{
        setSignup({...signup,[e.target.name] : e.target.value})
        console.log(signup);
    }
    const signupUser = async() =>{
       let response = await authenticateSignUp(signup);
       if(!response) return;
       handleClose();
       setAccount(signup.firstname);
    }
    const onValueChange = (e) => {
        setLogin({...login, [e.target.name] : e.target.value});
    }
    const loginUser = async() =>{
        let response  =  await authenticateLogin(login);
     //   console.log(response);
        if(response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname);
        }
        else{
            setError(true);
        }
    }
  return(
    <Dialog  open = {open} onClose={handleClose} PaperProps={{sx : {maxWidth : "unset"}}}>
          <Box style = {component} >
            <Box style = {{display : "flex" ,height : "100% "}}>
              <Box style = {Image}>
                 <Typography variant="h5" style={{color : "#fff", fontWeight : "600",}}>{account.heading}</Typography>
                 <Typography style={{marginTop : "20px" , color : "#fff", fontWeight : "600",}}>{account.subHeading}</Typography>
              </Box>
              {
               account.view === "login" ?
                <Box style = {wrapper}>
                <TextField variant = "standard"  style={{marginTop : "20px"}} onChange={(e) => onValueChange(e)} name = "username"   label = "Enter username" />
                { error && <Typography style={Error}>Please enter valid username passowrd</Typography>}
                <TextField variant = "standard" style={{marginTop : "20px"}} onChange={(e) => onValueChange(e)} name = "password"   label = "Enter Email/Mobile number" />
                <Typography style={Text} >By continuing,you agree to Flipkart's Terms of Use and Privacy Policy</Typography>
                <Button style={LoginButton} onClick={() => loginUser()} >Login</Button>
                <Typography style={{marginTop : "20px", textAlign : "center"}} >OR</Typography>
                <Button style={RequestOtp} >Request OTP</Button>
                <Typography style={CreateAcoount} onClick = {()=> toggleSignup()} >New to Flipkart? Create an account</Typography>
              </Box>
               :
                <Box style = {wrapper}>
                <TextField variant = "standard"  style={{marginTop : "15px"}} onChange={(e) => onInuputChange(e)} name = "firstname"  label = "Enter your Firstnamer" />
                <TextField variant = "standard" style={{marginTop : "15px"}} onChange={(e) => onInuputChange(e)} name = "lastname"   label = "Enter your Lastname" />
                <TextField variant = "standard" style={{marginTop : "15px"}} onChange={(e) => onInuputChange(e)} name = "username"   label = "Enter your Username" />
                <TextField variant = "standard" style={{marginTop : "15px"}} onChange={(e) => onInuputChange(e)} name = "email"  label = "Enter your email" />
                <TextField variant = "standard" style={{marginTop : "15px"}} onChange={(e) => onInuputChange(e)} name = "password"  label = "Enter your password" />
                <TextField variant = "standard" style={{marginTop : "15px"}} onChange={(e) => onInuputChange(e)} name = "phone"  label = "Enter your phone number" />
                <Button style={LoginButton} onClick={()=> signupUser()} >Continue</Button>
              </Box>
              }
              </Box>
          </Box>
    </Dialog>
  );
}

export default LoginDialog;