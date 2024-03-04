import axios from "./AxiosCustom";

const fetchAllCategory = () => {
    return axios.get("/product_category/productcategory-list");
}

export { fetchAllCategory };