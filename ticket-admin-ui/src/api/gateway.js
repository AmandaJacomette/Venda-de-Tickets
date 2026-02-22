import axios from "axios";

const SERVER = "http://localhost:8080"; // porta do GATEWAY

const api = axios.create({
  baseURL: SERVER, // porta do GATEWAY
});

const api_fetch = async (endpoint, config) => {
  const result = await fetch(SERVER + endpoint, config);
  return await result.json();
};

export default api;
export { api_fetch };
