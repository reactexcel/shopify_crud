// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const products = await getProducts();
            setProducts(products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleDelete = async (productId) => {
        try {
            await deleteProduct(productId);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.title}
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;