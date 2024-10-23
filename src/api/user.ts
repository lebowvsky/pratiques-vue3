import { apiClient } from "@/xhr/apiClient";
import { AxiosResponse } from "axios";

export const fetchUsers = (): Promise<AxiosResponse> => {
  return apiClient.get("?results=30");
};
