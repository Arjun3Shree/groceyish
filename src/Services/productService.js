import axios from "axios"

const apiJson = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
    withCredentials: true
})

export const getAllProductListService = async () => {
    try {
        const response = await apiJson.get('/product/getallproducts');
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}