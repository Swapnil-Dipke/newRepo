import axios from "axios";

const BASE_URL = "http://localhost:8081";

export const getFlightList = () => {
  return axios.get(BASE_URL + "/flight/getAll");
};

export const getFlightListById = (flightId) => {
  return axios.get(BASE_URL + "/flight/get/" + flightId);
};
