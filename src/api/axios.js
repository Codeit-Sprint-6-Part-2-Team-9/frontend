import axios from "axios";
import { ENV } from "./config";

const instance = axios.create({
    baseURL: ENV.serverUrl,
    validateStatus: (status) => status >= 200 && status < 300,
});

instance.defaults.timeout = 1500;

instance.interceptors.request.use(
    (config) => config, (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => response,
    function (error) {
        if(error.response) {
            console.error(error.response);
        }
        if(error.request) {
            console.error(error.request);
        }
        console.error(error.message);
        return Promise.reject(new Error('요청 도중 에러 발생'));
    }
);

export default instance;