import axios from "axios";
export const BASE_URL = "https://turtkul3.herokuapp.com";

export default axios.create({
  baseURL: BASE_URL,
});
