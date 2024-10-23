import axios from "axios";

const baseURL = "https://randomuser.me/api/";

export const apiClient = axios.create({
  baseURL,
});
