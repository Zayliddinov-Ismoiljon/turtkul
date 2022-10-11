import axios from "axios";
export const BASE_URL = "https://turtkul41.herokuapp.com";

export default axios.create({
  baseURL: BASE_URL,
});
