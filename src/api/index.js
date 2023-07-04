import axios from "axios";
import * as Yup from "yup";

export const schema = Yup.object().shape({
    title: Yup.string().required().max(40),
    category: Yup.string().max(25),
    price: Yup.number().required().min(1).max(10000),
});

export const getItems = () => {
    const resp = axios.get("https://fakestoreapi.com/products").then((res) => res.data);
    return resp;
};
export const postItem = (data) => {
    const resp = axios.post("https://fakestoreapi.com/products", data).then((res) => res.data);
    return resp;
};
export const putItem = (id, data) => {
    const resp = axios.put("https://fakestoreapi.com/products/" + id, data).then((res) => res.data);
    return resp;
};
export const deleteItem = (id) => {
    const resp = axios.delete("https://fakestoreapi.com/products/" + id).then((res) => res.data);
    return resp;
};
