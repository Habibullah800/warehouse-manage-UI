import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import app from '../firebase.init';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import Footer from './Footer';

const Register = () => {

    const auth = getAuth(app);
    const [error, setError] = useState([]);
    const [varification, setVerification] = useState('')
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    const onSubmit = data => {
        const email = data.email;
        const password = data.password

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                verifyEmail();
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    };


    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setVerification("Email verification sent! Cheak Email");
            });
    }

    return (
        <>
            <div class=" bg-base my-2 lg:my-12">
                <div class="hero-content">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#EDF9EF]">
                        <div class="card-body">

                            <h1 className='text-lg font-bold text-[#32ff7e]'>Register here</h1>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your name</span>
                                    </label>
                                    <input type="text" {...register("name")} placeholder="Name" class="input input-bordered" />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email")} placeholder="email" class="input input-bordered" />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password")} placeholder="Your Password" class="input input-bordered" />
                                </div>
                                <p className='font-normal text-lg text-[#ff3838] mt-2'>{varification}</p>

                                <div class="form-control mt-6">
                                    <input class="btn bg-lime-200 shadow-lg shadow-cyan-300/50" type="submit" value='Register' />
                                </div>

                                <p className='font-normal text-lg text-[#ff3838]'><small> {error}</small>
                                </p>

                                <p className='mt-4'> Already have an account ? <br></br>
                                    <Link to='/login' className='text-danger pe-auto text-decoration-none text-black  hover:text-[#32ff7e] text-base font-semibold mx-auto label-text-alt link link-hover' onClick={navigateLogin}>Click Here to Login</Link>
                                </p>



                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </>
    );
};

export default Register;