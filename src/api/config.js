import axios from "axios";
export const BASE_URL = "https://tort.oltindiyorkafe.uz";

export default axios.create({
  baseURL: BASE_URL,
});
