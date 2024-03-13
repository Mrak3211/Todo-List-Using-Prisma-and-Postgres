import axios, { AxiosResponse } from "axios";

export type APISuccessResponse<T = undefined> = {
    error: boolean;
    message: string;
    data: T;
    response: AxiosResponse<T>;
};

let baseURL = "";

if (typeof window !== "undefined") {
    baseURL = window.location.href;
}

const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;
