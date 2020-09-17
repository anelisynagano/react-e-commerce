import React from 'react';
import StarRatings from 'react-star-ratings';

const ProductDetails = ({ routeProps, products }) => {
    const matchProduct = products.find(product => (
        +routeProps.match.params.id === product.id
    ))

    return (
        <div className='productDetails'>
            {
                !matchProduct ?
                    <p>loading..........</p>
                    :
                    <>
                        <div>
                            <img src={matchProduct.product_image} alt="" />
                            <StarRatings
                                rating={matchProduct.product_rating}
                                starRatedColor="yellow"
                                starDimension="20px"
                            />
                        </div>
                        <div className='productDescription'>
                            <h1>{matchProduct.product_title}</h1>
                            <p>{matchProduct.product_description}</p>
                            <p>{matchProduct.product_price} Bottlecaps</p>
                            <button>Add to Cart</button>
                        </div>
                    </>
            }
        </div>
    )
}

export default ProductDetails;