
import axios from "axios";


const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api;

export const getPedidos = async () => api.get(`/pedidos`);
export const getResumoStatus = async () => api.get(`/pedidos/resumoStatus`);
export const getTotalVendas = async () => api.get(`/pedidos/totalVendas`);
