import axios from "axios";
export const BASE_URL = "https://turtkul.kar24.uz/";

export default axios.create({
  baseURL: BASE_URL,
});
