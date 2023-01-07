import axios from "axios";
export const BASE_URL = "https://pn.tortkol.uz/";

export default axios.create({
  baseURL: BASE_URL,
});

//https://turtkul.kar24.uz/
