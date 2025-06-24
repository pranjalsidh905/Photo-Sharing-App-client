import axios from 'axios';
const BASE_URL = 'https://photo-sharing-app-server-ryb6.onrender.com';
export const getAllCategories = async () => {
    const { data } = await axios.get(`${BASE_URL}/categories`);
    return data;
};

export const getCategoryById = async (categoryId) => {
    const { data } = await axios.get(`${BASE_URL}/categories/${categoryId}`);
    return data;
};

export const createCategory = async (name, status) => {
    const { data } = await axios.post(`${BASE_URL}/categories`, {
        name,
        status
    })
    return data;
};

export const updateCategoryById = async (categoryId, name, status) => {
    const { data } = await axios.put(`${BASE_URL}/categories/${categoryId}`, {
        name,
        status
    });
    return data;
};

export const deleteCategoryById = async (categoryId) => {
    const { data } = await axios.delete(`${BASE_URL}/categories/${categoryId}`);
    return data;
};