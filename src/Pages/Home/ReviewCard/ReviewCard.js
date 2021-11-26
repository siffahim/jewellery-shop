
import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
    const { img, name, title, feedback, rating } = review;
    return (
        <Col>
            <div className='review-card text-center'>
                <img src={img} alt="" />
                <p className='text-muted'>{feedback}</p>
                <h6>{name}</h6>
                <p className='text-muted'><small>{title}</small></p>

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