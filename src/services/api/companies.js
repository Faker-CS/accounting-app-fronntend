import apiClient from './axios';

export const getCompanies = async () => {
    const response = await apiClient.get('/companies');
    return response.data;
};

export const getCompany = async (id) => {
    const response = await apiClient.get(`/companies/${id}`);
    return response.data;
};

export const createCompany = async (companyData) => {
    const response = await apiClient.post('/companies', companyData);
    return response.data;
};

export const updateCompany = async (id, companyData) => {
    const response = await apiClient.put(`/companies/${id}`, companyData);
    return response.data;
};

export const deleteCompany = async (id) => {
    const response = await apiClient.delete(`/companies/${id}`);
    return response.data;
};
