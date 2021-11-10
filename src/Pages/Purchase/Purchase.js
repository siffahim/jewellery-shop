import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import useAuth from '../../Hooks/useAuth';
import './Purchase.css';

const Purchase = ({ product }) => {
    const { name, img, ratig, price, stock } = product;
    const { user } = useAuth();
    console.log(user)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => { console.log(data) };
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
                            <input type="text" defaultValue={user.displayName} {...register("name")} placeholder="Name" />
                            <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" />
                            {errors.email && <span>This field is required</span>}

                            <input type="text" {...register("from", { required: true })} placeholder="From" />
                            {errors.from && <span className='text-danger'>This field is required</span>}
                            <input type="text" {...register("to", { required: true })} placeholder="To" />
                            {errors.to && <span className='text-danger'>This field is required</span>}

                            <input type="text" {...register("country", { required: true })} placeholder="Present Country" />
                            {errors.country && <span className='text-danger'>This field is required</span>}

                            <input type="number" {...register("phone", { required: true })} placeholder="Phone" />
                            {errors.phone && <span className='text-danger'>This field is required</span>}

                            <input type="submit" value="Purchase" className='btn-regular' />
                        </form>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default Purchase;