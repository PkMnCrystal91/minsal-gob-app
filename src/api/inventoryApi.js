import axios from "axios";

const inventoryApi = axios.create({
  baseURL: "http://localhost:3001/",
});

export default inventoryApi;
