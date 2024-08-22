// src/api.js
import axios from 'axios';

const SHOP_NAME = process.env.REACT_APP_SHOP_NAME;
const API_VERSION = process.env.REACT_APP_API_VERSION;
const API_KEY = process.env.REACT_APP_API_KEY;
const API_PASSWORD = process.env.REACT_APP_API_PASSWORD;

const BASE_URL = `https://${SHOP_NAME}.myshopify.com/admin/api/${API_VERSION}`;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    auth: {
        username: API_KEY,
        password: API_PASSWORD,
    },
});

export const getProducts = async () => {
    try {
        const response = await axiosInstance.get('/products.json');
        return response.data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const createProduct = async (product) => {
    try {
        const response = await axiosInstance.post('/products.json', { product });
        return response.data.product;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const updateProduct = async (productId, product) => {
    try {
        const response = await axiosInstance.put(`/products/${productId}.json`, { product });
        return response.data.product;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

export const deleteProduct = async (productId) => {
    try {
        await axiosInstance.delete(`/products/${productId}.json`);
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};