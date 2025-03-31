import axios, { AxiosError, AxiosRequestConfig } from "axios";
import {
  getAccessTokenFromLocalStorage,
  removeTokensFromLocalStorage,
} from "@/lib/utils";
import envConfig from "@/config";

const ENTITY_ERROR_STATUS = 422;
const AUTHENTICATION_ERROR_STATUS = 401;

export class HttpError extends Error {
  status: number;
  payload: any;
  constructor(status: number, payload: any, message?: string) {
    super(message || payload?.message || "Lỗi HTTP");
    this.status = status;
    this.payload = payload;
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

export class EntityError extends HttpError {
  constructor(payload: any) {
    super(ENTITY_ERROR_STATUS, payload, payload?.message || "Lỗi thực thể");
    Object.setPrototypeOf(this, EntityError.prototype);
  }
}

const axiosInstance = axios.create({
  baseURL: envConfig.VITE_BASE_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getAccessTokenFromLocalStorage();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error: AxiosError) => {
    if (error.response) {
      const { status, data } = error.response;
      if (status === ENTITY_ERROR_STATUS) {
        return Promise.reject(new EntityError(data));
      } else if (status === AUTHENTICATION_ERROR_STATUS) {
        removeTokensFromLocalStorage();
        window.location.href = "/login";
      }
      return Promise.reject(new HttpError(status, data));
    }
    return Promise.reject(error);
  }
);

const http = {
  get: <Response>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.get<Response>(url, config),
  post: <Response>(url: string, body: any, config?: AxiosRequestConfig) =>
    axiosInstance.post<Response>(url, body, config),
  put: <Response>(url: string, body: any, config?: AxiosRequestConfig) =>
    axiosInstance.put<Response>(url, body, config),
  patch: <Response>(url: string, body: any, config?: AxiosRequestConfig) =>
    axiosInstance.patch<Response>(url, body, config),
  delete: <Response>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete<Response>(url, config),
};

export default http;
