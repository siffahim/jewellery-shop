import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='row mx-auto p-5 w-75'>
            <div className='col-md-6 col-12 mx-auto shadow p-4 border'>
                <h4 className='text-center mb-4 text-muted'>Register</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Name' {...register("name", { required: true })} className="form-control mb-2" />
                    {errors.name && <span className='text-danger'>This field is required</span>}

                    <input placeholder='Email' {...register("email", { required: true })} className="form-control mb-2" />
                    {errors.email && <span className='text-danger'>This field is required</span>}

                    <input placeholder='Password' {...register("password", { required: true })} className="form-control mb-4" />
                    {errors.password && <span className='text-danger'>This field is required</span>}

                    <input placeholder='Re-Password' {...register("password2", { required: true })} className="form-control mb-4" />
                    {errors.password2 && <span className='text-danger'>This field is required</span>}

                    <input type="submit" className="form-control btn-form" value='Login' />
                </form>
                <p className='mt-4 text-muted'>alrady have an account? <Link to='/login'>Register</Link></p>
            </div>
        </div>
    );
};

export default Register;