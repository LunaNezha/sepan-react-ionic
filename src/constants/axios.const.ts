import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { TOKEN } from "./local-storage.const";

const apiClient = axios.create({
  baseURL: "https://api.crm.roshapharmacy.com/api/",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
    "Token-Key": `${secureLocalStorage.getItem(TOKEN)}`,
    Authorization: `Bearer ${secureLocalStorage.getItem(TOKEN)}`,
  },
});

export default apiClient;
