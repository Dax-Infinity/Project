import React, { useState } from 'react';
import ProductCard from './ProductCart';
const ProductListingPage = ({ addToCart }) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Product A',
            image: 'https://via.placeholder.com/150?text=Product+A',
            description: 'Description for Product A',
            price: 10.99,
        },
        {
            id: 2,
            name: 'Product B',
            image: 'https://via.placeholder.com/150?text=Product+B',
            description: 'Description for Product B',
            price: 19.99,
        },
        {
            id: 3,
            name: 'Product C',
            image: 'https://via.placeholder.com/150?text=Product+C',
            description: 'Description for Product C',
            price: 14.49,
        },
        {
            id: 4,
            name: 'Product D',
            image: 'https://via.placeholder.com/150?text=Product+D',
            description: 'Description for Product D',
            price: 8.99,
        },
        {
            id: 5,
            name: 'Product E',
            image: 'https://via.placeholder.com/150?text=Product+E',
            description: 'Description for Product E',
            price: 25.99,
        },
        {
            id: 6,
            name: 'Product F',
            image: 'https://via.placeholder.com/150?text=Product+F',
            description: 'Description for Product F',
            price: 12.49,
        },
        {
            id: 7,
            name: 'Product G',
            image: 'https://via.placeholder.com/150?text=Product+G',
            description: 'Description for Product G',
            price: 18.99,
        },
        {
            id: 8,
            name: 'Product H',
            image: 'https://via.placeholder.com/150?text=Product+H',
            description: 'Description for Product H',
            price: 9.99,
        },
        {
            id: 9,
            name: 'Product I',
            image: 'https://via.placeholder.com/150?text=Product+I',
            description: 'Description for Product I',
            price: 17.49,
        },
        {
            id: 10,
            name: 'Product J',
            image: 'https://via.placeholder.com/150?text=Product+J',
            description: 'Description for Product J',
            price: 7.49,
        }])

    return (
        <div className="conatiner">
            <div className="product-listing">

                {products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;
