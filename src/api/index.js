import axios from "axios";
import { toast } from "react-toastify";
import * as Yup from "yup";

export const schema = Yup.object().shape({
  master: Yup.string().required().max(40),
  class_name: Yup.string().max(25),
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
    .then((res) => res.data)
    .catch((e) => {
      toast.error(e?.response?.data?.detail);
    });
  return resp;
};
export const login = (data) => {
  let params = new URLSearchParams();
  params.append("username", data.username);
  params.append("password", data.password);
  const resp = axios
    .post("http://192.168.10.41:7777/login", params)
    .then((res) => res.data)
    .catch((e) => {
      toast.error(e?.response?.data?.detail);
    });
  return resp;
};

export const getClasses = () => {
  const resp = axios
    .get(
      `http://192.168.10.41:7777/classrooms/${localStorage.getItem(
        "username"
      )}`,
      {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((e) => {
      toast.error(e?.response?.detail);
    });
  return resp;
};

export const getClassStudents = (classId) => {
  const resp = axios
    .get(
      `http://192.168.10.41:7777/classroom/${classId.split("_")[1]}/${
        classId.split("_")[2]
      }`,
      {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((e) => {
      toast.error(e?.response?.data?.detail);
    });
  return resp;
};
export const addClassByCsv = (data) => {
  const formData = new FormData();
  formData.append("csv_file", data.csv_file);
  const resp = axios
    .post(
      `http://192.168.10.41:7777/classroom/${data.master}/${data.class_name}/upload_csv`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((e) => {
      toast.error(e?.response?.data?.detail);
    });
  return resp;
};
export const updateStudentStatus = (data) => {
  const resp = axios
    .put(
      `http://192.168.10.41:7777/students/${data.master}/${data.class_name}?attendance=${data.attendance}`,
      data,
      {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((e) => {
      toast.error(e?.response?.data?.detail);
    });
  return resp;
};
