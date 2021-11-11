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
        <div className='bg-light p-1'>
            <Container>
                <h3 className='text-center mt-4'>Testimonials</h3>
                <p className='text-center'>What the say</p>
                <Row xs={1} md={4} className="g-4 my-3">
                    {
                        reviews.map(review => <ReviewCard
                            review={review}
                        ></ReviewCard>)
                    }
                </Row>
            </Container>
        </div>

    );
};

export default ReviewSection;