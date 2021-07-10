const baseURL = "http://localhost:3000/api/";
import axios from "axios";

export const api = axios.create({ baseURL });
