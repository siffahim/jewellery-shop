
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Product.css';

const Product = ({ product }) => {
    const { name, img, _id } = product;
    const history = useHistory();
    const handlePurchase = id => {
        history.push(`/jewellery/${id}`)
    }
    return (

        <div className='card-container' >
            <div className='photo'>
                <Card.Img variant="top" src={img} />
            </div>
            <Card.Body className='photo-detail'>
                <h6 className='fs-5 fw-normal text-muted'>{name.slice(0, 15)}</h6>
                <button onClick={() => handlePurchase(_id)} className='btn-regular btn-custom'>Purchase</button>
            </Card.Body>
        </div>
    );
};

export default Product;