import axios from "axios";
import Qs from "qs";

const { REACT_APP_BASE_URL, REACT_APP_PROXY } = process.env;

const BASE_URL = `${REACT_APP_BASE_URL}${REACT_APP_PROXY}`;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
  paramsSerializer: (params) => Qs.stringify(params, { arrayFormat: "repeat" }),
  validateStatus: () => true,
  withCredentials: true,
});

export default instance;
