import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    //datasize
    const size = 6;
    useEffect(() => {
        fetch(`https://limitless-scrubland-09812.herokuapp.com/products?size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <Container>
            <h3 className='text-center mt-4'>Products</h3>
            <p className='text-center'>Add our products to weekly lineup</p>
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </Row>
        </Container>
    );
};

export default Products;