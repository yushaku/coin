import axios from "axios";

export const httpClient = () => {
  const client = axios.create({
    baseURL: "http://localhost:8005",
    withCredentials: true,
    headers: {
      Accept: "*",
      "Content-Type": "application/json",
    },
  });

  return client;
};

export const axiosClient = httpClient();
