
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Product = ({ product }) => {
    const { name, img, _id } = product;
    const history = useHistory();
    const handlePurchase = id => {
        history.push(`/jewellery/${id}`)
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    <button className='btn-regular' onClick={() => handlePurchase(_id)}>PURCHASE</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;