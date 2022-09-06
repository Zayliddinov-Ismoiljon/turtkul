import axiosClient from "./config";

export const postData = (url, data) => {
  const config = {
    url,
    method: "POST",
    data,
  };
  return axiosClient(config);
};

export const getData = (url) => {
  const config = {
    method: "GET",
    url,
  };
  return axiosClient(config);
};

export const putData = (url, data) => {
  const config = {
    method: "PUT",
    url,
    data,
  };
  return axiosClient(config);
};

export const deleteData = (url) => {
  const config = {
    method: "DELETE",
    url,
  };
  return axiosClient(config);
};
