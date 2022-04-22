import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Jewellery = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://morning-savannah-07523.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <Navigation />
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => <Product
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