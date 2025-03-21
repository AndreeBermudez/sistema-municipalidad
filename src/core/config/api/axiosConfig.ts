import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'http://localhost:8080/api/v1/',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('authToken');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);
