import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';

const Register = () => {
    const { registerUser, user, error } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = data => {
        if (data.password !== data.password2) {
            swal({
                title: "Wrong!",
                text: "Please enter same password",
                icon: "error",
                button: "ok",
            });
            return;
        }
        registerUser(data.email, data.password)
        reset();
    }
    return (
        <div className='row mx-auto p-2 w-75'>
            <div className='col-md-6 col-12 mx-auto shadow p-4'>
                <p className='text-center'>
                    <img style={{ width: '180px' }} src={logo} alt="" />
                </p>
                <h4 className='text-center mb-4 text-muted'>Register</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Name' {...register("name", { required: true })} className="form-control mb-2" />
                    {errors.name && <span className='text-danger'>This field is required</span>}

                    <input placeholder='Email' {...register("email", { required: true })} className="form-control mb-2" />
                    {errors.email && <span className='text-danger'>This field is required</span>}

                    <input placeholder='Password' type='password' {...register("password", { required: true })} className="form-control mb-2" />
                    {errors.password && <span className='text-danger'>This field is required</span>}

                    <input placeholder='Re-Password' type='password'  {...register("password2", { required: true })} className="form-control mb-4" />
                    {errors.password2 && <span className='text-danger'>This field is required</span>}

                    <p>{error}</p>

                    <input type="submit" className="form-control btn-form" value='Register' />
                </form>
                <p className='mt-4 text-muted'>alrady have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;