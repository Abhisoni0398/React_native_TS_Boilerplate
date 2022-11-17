export const API_BASE_URL: string = "paste your api base url";

export const getApiUrl = (endpoint: string): string => API_BASE_URL + endpoint;

export const LOGIN_API: string = getApiUrl("/login");
export const SIGNUP_API:string = getApiUrl("/register");
export const SOCIAL_LOGIN:string = getApiUrl("/social_login");
export const FORGOT_PASSWORD:string = getApiUrl("/forgot_password")
