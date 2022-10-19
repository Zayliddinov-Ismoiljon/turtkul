import axios from "axios";
export const BASE_URL = "https://tortkol.uz/";

export default axios.create({
  baseURL: BASE_URL,
});
