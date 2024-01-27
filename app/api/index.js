import axios from "axios";

// export const SERVER_URL = "http://localhost:5000/"
export const SERVER_URL = "https://api.grimworld.xyz/"
export const API_URL = SERVER_URL + "v1/"

// const $api = axios.create({
//     withCredentials: true,
//     baseURL: API_URL
// })

// $api.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//     return config;
// });


const $api = (url) => axios(API_URL + url)

export default $api