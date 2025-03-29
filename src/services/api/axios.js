import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add interceptors for request/response if needed
apiClient.interceptors.response.use(
    response => response,
    error => {
        // Handle errors globally
        return Promise.reject(error);
    }
);

export default apiClient;