import { useNavigate } from "react-router-dom";
import { AXIOS } from "../config";
import { toast } from "react-toastify";

export const registerAPI = async (params) => {
  try {
    const data = await AXIOS.post("/register/user", Object.fromEntries(params));
    if (data.status === 200) {
      toast.success(data.data.message);
      return data;
    }
  } catch (e) {
    toast.error(e.response.data.message);
  }
};

export const loginAPI = async (params) => {
  try {
    const data = await AXIOS.post("/user/login", Object.fromEntries(params));
    if (data.status === 200) {
      toast.success(data.data.message);
      return data;
    }
  } catch (e) {
    toast.error(e.response.data.message);
  }
};

export const verifyAccountAPI = async (params) => {
  try {
    const data = await AXIOS.post("/user/login", Object.fromEntries(params));
    if (data.status === 200) {
      toast.success(data.data.message);
      return data;
    }
  } catch (e) {
    toast.error(e.response.data.message);
  }
};

export const productsAPI = async (page) => {
  try {
    const data = await AXIOS.get(`/get/products${page ? "?page=" + page : ""}`);
    if (data.status === 200) {
      return data;
    }
  } catch (e) {
    toast.error(e.response.data.message);
  }
};

export const productDetailAPI = async (id) => {
  try {
    const data = await AXIOS.get("/get/product/" + id);
    if (data.status === 200) {
      return data;
    }
  } catch (e) {
    toast.error(e.response.data.message);
  }
};

export const categoryAPI = async () => {
  try {
    const data = await AXIOS.get("/get/categories");
    if (data.status === 200) {
      return data;
    }
  } catch (e) {
    toast.error(e.response.data.message);
  }
};

export const typeAPI = async () => {
  try {
    const data = await AXIOS.get("/get/types");
    if (data.status === 200) {
      return data;
    }
  } catch (e) {
    toast.error(e.response.data.message);
  }
};

export const sizeAPI = async () => {
  try {
    const data = await AXIOS.get("/get/sizes");
    if (data.status === 200) {
      return data;
    }
  } catch (e) {
    toast.error(e.response.data.message);
  }
};

export const colorAPI = async () => {
  try {
    const data = await AXIOS.get("/get/colors");
    if (data.status === 200) {
      return data;
    }
  } catch (e) {
    toast.error(e.response.data.message);
  }
};

export const updateProductAPI = async (id) => {
  try {
    const data = await AXIOS.put("/update/product/" + id);
    if (data.status === 200) {
      return data;
    }
  } catch (e) {
    toast.error(e.response.data.message);
  }
};
