import axios from "axios";

console.log("Model: ", process.env.REACT_APP_MODEL_AI_URL);
const instance = axios.create({
  baseURL: process.env.REACT_APP_MODEL_AI_URL,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
