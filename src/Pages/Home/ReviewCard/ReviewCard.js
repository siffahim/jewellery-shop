
import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
    const { img, name, title, feedback, rating } = review;
    return (
        <Col>
            <div className='review-card'>
                <img src={img} alt="" />
                <p>{feedback}</p>
                <h6>{name}</h6>
                <p><small>{title}</small></p>

                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star review"
                    fullSymbol="fas fa-star review"
                    readonly
                />
            </div>
        </Col>
    );
};

export default ReviewCard;