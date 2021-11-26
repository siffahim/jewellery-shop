import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        async function reviewCollector() {
            const res = await fetch('https://limitless-scrubland-09812.herokuapp.com/reviews')
            const data = await res.json()

            setReviews(data)
        }
        reviewCollector()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className='bg-review p-1 pb-3'>
            <Container>
                <h3 className='text-center text-muted mt-4'>TESTIMONIALS</h3>
                <p className='text-center'>What the say</p>
                <Row xs={1} md={12} className="g-4 my-3">
                    <Slider {...settings}>
                        {
                            reviews.map(review => <ReviewCard
                                review={review}
                            ></ReviewCard>)
                        }
                    </Slider>
                </Row>
            </Container>
        </div>

    );
};

export default ReviewSection;