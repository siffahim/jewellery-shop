import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Jewellery = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://jewellery-server-csgb.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <Navigation />
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Jewellery;