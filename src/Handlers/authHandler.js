import { registerService, loginService } from "../Services/authService.js";

const registerHandler = async (userData) => {
    const {email, password} = userData;
    const value = await registerService(email, password);
    console.log("Register: ", value);
}

const loginHandler = async (userData) => {
    
    const { email, password } = userData;
    console.log("From Handler: ", email, password);
    const response = await loginService(email, password);
    console.log("Login: ", response);
    window.localStorage.setItem("userType",response.data.data.user.usertype);
    window.sessionStorage.setItem("userType",response.data.data.user.usertype);
    window.sessionStorage.setItem("accessToken",response.data.data.accessToken);
    window.sessionStorage.setItem("callsign",response.data.data.user.callsign);
    window.sessionStorage.setItem("email",response.data.data.user.email);
    window.sessionStorage.setItem("isloggedIn",true);
    console.log("Response status: ",response.status);
    if(response.status === 200){
        return true;
    }
}

export {registerHandler, loginHandler};