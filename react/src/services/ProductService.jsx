import axios from "./AxiosCustom";

const fetchAllProduct = () => {
    return axios.get("/product/product-list");
}

export{fetchAllProduct};