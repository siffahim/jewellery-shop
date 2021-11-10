import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Login.css';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className='row mx-auto p-3 w-75'>
                <div className='col-md-6 col-12 mx-auto shadow p-4 border'>
                    <p className='text-center'>
                        <img style={{ width: '180px' }} src={logo} alt="" />
                    </p>
                    <h4 className='text-center mb-5 text-muted'>Login</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Email' {...register("email", { required: true })} className="form-control mb-2" />
                        {errors.email && <span className='text-danger'>This field is required</span>}

                        <input placeholder='Password' {...register("password", { required: true })} className="form-control mb-4" />
                        {errors.password && <span className='text-danger'>This field is required</span>}

                        <input type="submit" className="form-control btn-form" value='Login' />
                    </form>
                    <p className='text-muted mt-4'>have an account? <Link to='/register'>Create an account</Link></p>
                </div>
            </div>
        </>
    );
};

export default Login;