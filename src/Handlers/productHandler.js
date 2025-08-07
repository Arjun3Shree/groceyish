import toast from "react-hot-toast";
import { getAllProductListService, createOneProductService } from "../Services/productService.js";

const getAllProductListHandler = async () => {
    const result = await getAllProductListService();
    console.log(result);
}

const createNewProductHandler = async(prdData) => {
    try {
        if(!prdData){
            toast.error("Enter Product Details..!");
        }
        if(window.localStorage.getItem("userType") !== "seller"){
            toast.error("You don't have access to add Product!");
            return;
        }

        const result = await createOneProductService(prdData);
        if(result.status === 201){
            toast.success("Your Product Created!")
        }
        return result;

    } catch (error) {
        console.log(error);
        throw error;
    }
    
}

export { getAllProductListHandler,  createNewProductHandler}