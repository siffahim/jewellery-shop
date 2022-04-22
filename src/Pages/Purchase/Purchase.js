import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';
import './Purchase.css';

const Purchase = ({ product }) => {
    const { name, img, ratig, price, stock } = product;
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const time = new Date();
    const onSubmit = data => {
        const order = {
            ...data,
            time: time.toLocaleDateString(),
            img,
            product: name
        }
        fetch('https://morning-savannah-07523.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("WOW!", "Successfully Procced order", "success");
                }
            })
        reset();
    };
    return (
        <Container>
            <div className='row gy-4 mb-5'>
                <div className='col-md-6 col-12'>
                    <div className='card-detail'>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <img className='img-fluid' src={img} alt="" />
                            </div>
                            <div className='col-md-6 col-12'>
                                <p className='fs-4 fw-bold text-muted mt-2'>{name?.toUpperCase()}</p>
                                <Rating
                                    initialRating={ratig}
                                    emptySymbol="far fa-star text-custom"
                                    fullSymbol="fas fa-star text-custom"
                                    readonly
                                />
                                <h5 className='mt-3'>${price}</h5>
                                <p className='text-muted'><small>only {stock} stock</small></p>
                                <p>Women's Jewellery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-12'>

                    {/*-----------------form-----------------*/}

                    <div className='form-container mx-auto'>
                        {/* <h2 className='fw-bold text-custom'>BOOK & TRAVEL</h2>
                        <p className='text-muted'>Wherever you go,make yourself at home</p> */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" defaultValue={user.displayName} {...register("name")} placeholder="Name" className='form-control' />

                            <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" className='form-control' />
                            {errors.email && <span>This field is required</span>}


                            <input defaultValue={price}  {...register("price")} placeholder="Money" className='form-control' />

                            <input type="number" {...register("phone", { required: true })} placeholder="Phone" className='form-control' />
                            {errors.phone && <span className='text-danger'>This field is required</span>}

                            <input type="submit" value="Proceed Now" className='btn-form' />
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Purchase;