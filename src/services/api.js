import axios from 'axios';

// API Base URL configured via Vite environment variable, defaulting to localhost:3001
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 5000 // 5 seconds timeout
});

// Request interceptor for logging or auth token injection if needed in future
apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor with unified error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Custom formatted error
    const formattedError = {
      message: error.response?.data?.message || error.message || 'An unexpected API error occurred',
      status: error.response?.status || 500,
      isNetworkError: !error.response,
      originalError: error
    };
    return Promise.reject(formattedError);
  }
);

export default apiClient;
