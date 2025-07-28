import { registerService, loginService } from "../Services/authService.js";

const registerHandler = async (userData) => {
    const {email, password} = userData;
    const value = await registerService(email, password);
    console.log("Register: ", value);
}

const loginHandler = async (userData) => {
    
    const { email, password } = userData;
    console.log("From Handler: ", email, password);
    const value = await loginService(email, password);
    console.log("Login: ", value);
    window.localStorage.setItem("userType",value.data.data.user.usertype);
    window.localStorage.setItem("accessToken",value.data.data.accessToken);
    window.localStorage.setItem("callsign",value.data.data.user.callsign);
    window.localStorage.setItem("email",value.data.data.user.email);
    window.localStorage.setItem("isloggedIn",true);
    console.log("Response status: ",value.status);
    if(value.status === 200){
        return true;
    }
}

export {registerHandler, loginHandler};