import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ReviewCard from '../ReviewCard/ReviewCard';


const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        async function reviewCollector() {
            const res = await fetch('http://localhost:5000/reviews')
            const data = await res.json()

            setReviews(data)
        }
        reviewCollector()
    }, [])
    return (
        <>
            <Container>
                <h3>Our Customer Review</h3>
                <Row xs={1} md={4} className="g-4 my-3">
                    {
                        reviews.map(review => <ReviewCard
                            review={review}
                        ></ReviewCard>)
                    }
                </Row>
            </Container>
        </>

    );
};

export default ReviewSection;