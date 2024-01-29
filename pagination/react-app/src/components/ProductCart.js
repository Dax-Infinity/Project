import React from 'react';
import Grid from '@mui/material/Grid';

const ProductCard = ({ product, addToCart }) => {
    const { name, image, description, price } = product;

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <div className="product-listing">
                    <div className="product-card">
                        <img src={image} alt="Product" />
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p>${price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                </div >
            </Grid>
        </Grid >
    );
};

export default ProductCard;
