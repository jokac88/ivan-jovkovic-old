import axios from "axios";

const apiClient = axios.create({
  // baseURL: `https://my-json-server.typicode.com/jokac88/my-app`,
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getData(lang) {
    return apiClient.get(lang);
  }
};
