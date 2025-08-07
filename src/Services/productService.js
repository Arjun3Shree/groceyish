import axios from "axios"

const apiJson = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('authToken')}`
    },
    withCredentials: true
})

const apiForm = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        // 'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${window.sessionStorage.getItem('accessToken')}`,
        withCredentials: true,
    }
})

export const getAllProductListService = async () => {
    try {
        // console.log(window.sessionStorage.getItem(''))
        const response = await apiJson.get('/product/getallproducts');
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const createOneProductService = async(prdData) => {
    try {
        const response = await apiForm.post('/product/register-product', prdData);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}