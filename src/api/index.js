import axios from "axios";
import * as Yup from "yup";

export const schema = Yup.object().shape({
  title: Yup.string().required().max(40),
  category: Yup.string().max(25),
  price: Yup.number().required().min(1).max(10000),
});

export const getItems = () => {
  const resp = axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data);
  return resp;
};
export const postItem = (data) => {
  const resp = axios
    .post("https://fakestoreapi.com/products", data)
    .then((res) => res.data);
  return resp;
};
export const putItem = (id, data) => {
  const resp = axios
    .put("https://fakestoreapi.com/products/" + id, data)
    .then((res) => res.data);
  return resp;
};
export const deleteItem = (id) => {
  const resp = axios
    .delete("https://fakestoreapi.com/products/" + id)
    .then((res) => res.data);
  return resp;
};
export const signUp = (data) => {
  const resp = axios
    .post("http://192.168.10.41:7777/signup", { ...data, is_active: true })
    .then((res) => res.data);
  return resp;
};
export const login = (data) => {
  let params = new URLSearchParams();
  params.append("username", data.username);
  params.append("password", data.password);
  const resp = axios
    .post("http://192.168.10.41:7777/login", params)
    .then((res) => res.data);
  return resp;
};

export const getClasses = () => {
  const resp = axios
    .get("http://192.168.10.41:7777/classrooms", {
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => res.data);
  return resp;
};
