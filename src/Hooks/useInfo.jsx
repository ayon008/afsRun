import axios from 'axios';


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
});

const useInfo = () => {
    axios.interceptors.request.use(function (config) {
        config.headers.authorization = `Bearer ${JSON.parse(sessionStorage.getItem('access-token'))}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    axios.interceptors.response.use(function (response) {
        return response
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useInfo;