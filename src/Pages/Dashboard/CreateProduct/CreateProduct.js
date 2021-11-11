import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import swal from 'sweetalert';

const CreateProduct = () => {
    const [createProduct, setCreateProduct] = useState({})
    const handleOnBlur = e => {
        const value = e.target.value;
        const name = e.target.name;
        const newProduct = { ...createProduct };
        newProduct[name] = value;
        setCreateProduct(newProduct)
    }
    const handleOnSubmit = e => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(createProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Well Done!", "Successfully Created Product", "success");
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    return (
        <>
            <h2 className='text-center text-muted'>Create Product</h2>
            <div className='row'>
                <div className='col-md-6 col-12 mx-auto card p-4'>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' onBlur={handleOnBlur} placeholder="Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name='price' onBlur={handleOnBlur} placeholder="Price" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="number" name='Stock' onBlur={handleOnBlur} placeholder="Stock" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control type="number" name='rating' onBlur={handleOnBlur} placeholder="out of 5" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" name='img' placeholder='Img-url' onBlur={handleOnBlur} required />
                        </Form.Group>

                        <Form.Control type="submit" value='Send Review' className='btn-form' />
                    </Form>
                </div>
            </div>
        </>
    );
};

export default CreateProduct;