import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setAccessTokenToLocalStorage = (value: string) =>
  localStorage.setItem("accessToken", value);

export const setRefreshTokenToLocalStorage = (value: string) =>
  localStorage.setItem("refreshToken", value);

export const removeTokensFromLocalStorage = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export const getRefreshTokenFromLocalStorage = () =>
  localStorage.getItem("refreshToken");

export const getAccessTokenFromLocalStorage = () =>
  localStorage.getItem("accessToken");

