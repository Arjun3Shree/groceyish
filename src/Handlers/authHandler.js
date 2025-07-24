import { registerService, loginService } from "../Services/authService.js";

const registerHandler = async (userData) => {
    const {email, password} = userData;
    const value = await registerService(email, password);
}

const loginHandler = async (userData) => {
    const { email, password } = userData;
    console.log("From Handler: ", email, password);
    const value = await loginService(email, password);
}

export {registerHandler, loginHandler};