import axios from "axios";

const REACT_APP_KEY_1INCH = import.meta.env.REACT_APP_KEY_1INCH;

export const httpClient = () => {
  const client = axios.create({
    baseURL: "http://localhost:8005",
    withCredentials: true,
    headers: {
      Accept: "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${REACT_APP_KEY_1INCH}`,
    },
  });

  return client;
};

export const axiosClient = httpClient();
