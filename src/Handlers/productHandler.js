import { getAllProductListService } from "../Services/productService.js";

const getAllProductListHandler = async () => {
    const result = await getAllProductListService();
    console.log(result);
}

export { getAllProductListHandler }