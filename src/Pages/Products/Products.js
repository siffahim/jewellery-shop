import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import Product from '../Product/Product';

const Products = ({ children }) => {
    const [products, setProducts] = useState([]);
    //datasize
    const size = 8;
    useEffect(() => {
        fetch(`https://morning-savannah-07523.herokuapp.com/products?size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    let settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Container>
            <div className='text-center my-5'>
                <h1 style={{ color: '#c29958' }} className='fs-2 fw-normal'>Top {children} Accessiries</h1>
                <h2 style={{ letterSpacing: '2px', }} className='fs-5 text-muted'>Enim praesent elementum facilisis leo rhuyrees</h2>
            </div>
            <Slider {...settings}>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </Slider>
        </Container>
    );
};

export default Products;