import axios from "axios";
import { BASE_URL } from "../../../utils/constants/constant";

const header = {
  "Content-Type": "application/x-www-form-urlencoded",
  accept: "application/json",
};

const instance = axios.create({
  baseURL: BASE_URL,
  headers: header,
  timeout: 1000 * 30,
  withCredentials: false,
});

export default instance;
