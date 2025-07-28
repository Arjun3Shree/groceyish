import axios from "axios";
import toast from 'react-hot-toast';
const apiJson = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        
    },
    withCredentials: true
});

export const registerService = async (email, password) => {
    try {
        const response = await apiJson.post('/auth/register', {email, password});
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const loginService = async (email, password) => {
    try {
        const response = await apiJson.post('/auth/login', {email, password});
        return response;
    } catch (error) {
        console.log(error);
        
        if(error.status == 401){
            console.log(error.status);
            toast.error("Invalid Credencial!!")
        }
    }
}