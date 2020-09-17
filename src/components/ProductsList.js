import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom'

const ProductsList = ({ products }) => {
    return (
        <div className='productsList'>
            {products.map(product => <Link to={`/product/${product.id}`}><ProductCard productInfo={product} /></Link>)}
        </div>
    )
}

export default ProductsList;