import axios, {AxiosInstance} from "axios";


const httpRequestService : AxiosInstance = axios.create({
    baseURL : 'https://localhost:44304/api/v1',
    timeout : 15000
});

httpRequestService.interceptors.request.use(
    (config) => {
        // Modify the request config here (e.g., add headers)
        // For example, you can add an authentication token if needed
        // config.headers.Authorization = `Bearer ${yourAuthToken}`;
        return config;
    },
    (error) => {
        // Handle request error (e.g., network error)
        return Promise.reject(error);
    }
)


httpRequestService.interceptors.response.use(
    (response) => {
        // Modify the response data here if needed
        return response;
    },
    (error) => {
        // Handle response error (e.g., server error or request timeout)
        return Promise.reject(error);
    }
);


export default httpRequestService;