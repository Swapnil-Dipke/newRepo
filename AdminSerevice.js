import axios from "axios";

const BASE_URL = "http://localhost:8081";

export const getAdminList = () => {
  return axios.get(BASE_URL + "/admin/getAll");
};

export const getAdminById = (adminId) => {
  return axios.get(BASE_URL + "/admin/get/" + adminId);
};
