import axios from "axios";
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
        console.log("API Register Response: ", response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const loginService = async (email, password) => {
    try {
        const response = await apiJson.post('/auth/login', {email, password});
        console.log("API Login Response: ", response);
        return response;
    } catch (error) {
        console.log(error);
    }
}