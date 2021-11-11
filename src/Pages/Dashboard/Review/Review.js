import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import swal from 'sweetalert';

const Review = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnBlur = e => {
        const value = e.target.value;
        const name = e.target.name;
        const newLoginData = { ...loginData };
        newLoginData[name] = value;
        setLoginData(newLoginData)
    }
    const handleOnSubmit = e => {
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(loginData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("God Job!", "Successfully send review", "success");
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    return (
        <>
            <h2 className='text-center text-muted'>Review page</h2>
            <div className='row'>
                <div className='col-md-6 col-12 mx-auto card p-4'>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' onBlur={handleOnBlur} placeholder="Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" name='title' onBlur={handleOnBlur} placeholder="Title" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Feedback</Form.Label>
                            <Form.Control as="textarea" name='feedback' rows={3} onBlur={handleOnBlur} placeholder="Review" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control type="number" name='rating' onBlur={handleOnBlur} placeholder="out of 5" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" name='img' onBlur={handleOnBlur} required />
                        </Form.Group>

                        <Form.Control type="submit" value='Send Review' className='btn-form' />
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Review;