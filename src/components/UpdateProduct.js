// src/components/UpdateProduct.js
import React, { useState } from 'react';
import { updateProduct } from '../api';

const UpdateProduct = ({ product, onUpdate }) => {
    const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.body_html);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(product.id, { title, body_html: description });
            onUpdate();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateProduct;