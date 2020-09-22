import React from 'react';
import StarRatings from 'react-star-ratings';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({ routeProps, products, handleAddToCart }) => {
    const matchProduct = products.find(product => (
        +routeProps.match.params.id === product.id
    ))

    const notify = () => toast("Product added to cart :)");

    const handleClick = () => {
        handleAddToCart(matchProduct);
        notify();
    }


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
                            <button onClick={handleClick}>Add to Cart</button>
                            <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </div>
                    </>
            }
        </div>
    )
}

export default ProductDetails;