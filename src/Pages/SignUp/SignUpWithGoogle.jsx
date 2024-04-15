import React, { useContext, useRef, useState } from 'react';
import logo from '../../assets/logo.svg';
import google from '../../assets/main_icons/google.svg'
import { Link, useNavigate } from 'react-router-dom';
import Arrow from '../../assets/main_icons/arrow-up-right.svg'
import { AuthContext } from '../../Provider/AuthProvider';

const SignUpWithGoogle = () => {

    // AuthContext
    const { createWithGoogle } = useContext(AuthContext);

    // Navigate to next page
    const navigate = useNavigate();

    // OnSubmit
    const onSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        localStorage.setItem('email', JSON.stringify(email));
        navigate('/signUp/signUpForm');
    }

    const handleGoogleLogin = () => {
        createWithGoogle()
            .then(result => {
                const user = result.user;
                navigate('/userInformation')
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="card shrink-0 lg:w-1/3 w-full shadow-2xl rounded-none bg-[#1F1F1F]">
            <div className="card-body space-y-2">
                <img src={logo} className='w-[150px] h-[20px] mx-auto' alt="" />
                <div className='text-white text-center'>
                    <h3 className='font-bold text-[28px] Alliance tracking-wide'>Sign up for AFS Runs</h3>
                    <h5 className='text-base Alliance tracking-wide text-[#FFFFFF99]'>Add your own records for everyone to see</h5>
                </div>
                <div className='bg-white rounded cursor-pointer'>
                    <button className='flex items-center p-3 gap-4' onClick={handleGoogleLogin}>
                        <img src={google} alt="" />
                        <h3 className='Alliance font-semibold'>Continue with Google</h3>
                    </button>
                </div>
                <div>
                    <p className='text-center text-[#999999] Alliance text-xs'>OR</p>
                </div>
                <form className='space-y-6' onSubmit={onSubmit}>
                    <div className="form-control">
                        <input type="email" name='email' placeholder="Email Address" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                    </div>
                    <div className="form-control">
                        <button className="btn bg-[#1D98FF] border-none text-white Alliance">CONTINUE</button>
                    </div>
                </form>
                <div className='flex items-center w-fit mx-auto gap-2'>
                    <p className='text-sm text-[#FFFFFF99]'>Already have an account?</p>
                    <div className='flex items-baseline gap-1'>
                        <p><Link to="/login" className='text-[#1D98FF] text-sm'>Log In</Link></p>
                        <img src={Arrow} className='w-[12px]' alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUpWithGoogle;