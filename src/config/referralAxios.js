import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

const REFERRAL_API_URL = `${REACT_APP_BASE_URL}`;

const referralInstance = axios.create({
  baseURL: REFERRAL_API_URL,
  headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
  withCredentials: true,
});

export default referralInstance;
