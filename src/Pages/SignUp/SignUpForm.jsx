// Second Page

import React, { useRef, useState } from 'react';
import logo from '../../assets/logo.svg'
import google from '../../assets/main_icons/google.svg'
import { Link, useNavigate } from 'react-router-dom';
import { FaCheck, FaEye } from "react-icons/fa";
import Arrow from '../../assets/main_icons/arrow-up-right.svg'

const SignUpForm = () => {
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [type, setType] = useState(true);
    const [error, setError] = useState('');

    const showCredential = (ref) => {
        if (type) {
            ref.current.type = 'text';
            setType(!type);
        }
        else {
            ref.current.type = 'password';
            setType(!type);
        }
    }
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signup/userDetails')
    }

    const handleSignUp = event => {
        event.preventDefault();
        const email = JSON.parse(localStorage.getItem('email'));
        const confirmPassword = event.target.confirmPassword.value;
        const password = event.target.password.value;
        if (password !== confirmPassword) {
            setError('password did not match')
            console.log(email, confirmPassword, password, error);
            return;
        }
        const userCredentials = { email: email, password: password }
        localStorage.setItem('credential', JSON.stringify(userCredentials));
        console.log(userCredentials);
        navigate('/signup/user');
    }

    return (
        <div className="card shrink-0 lg:w-1/3 w-full shadow-2xl rounded-none bg-[#1F1F1F]">
            <form onSubmit={() => handleSignUp(event)} className="card-body space-y-2">
                <img src={logo} className='w-[150px] h-[20px] mx-auto' alt="" />
                <div className='text-white text-center'>
                    <h3 className='font-bold text-[28px] Alliance tracking-wide'>Create Your Account</h3>
                    <h5 className='text-base Alliance tracking-wide text-[#FFFFFF99]'>Set your password to continue</h5>
                </div>
                <div className="form-control relative">
                    <label className="label items-center justify-normal bg-black px-2 w-fit h-fit py-0 rounded-3xl gap-1 absolute left-[12px] -top-[10px]">
                        <span className="label-text text-[#666]   text-sm font-bold py-0">EMAIL</span>
                        <span><FaCheck size={'0.85rem'} color='#2A7029' /></span>
                    </label>
                    <input type="email" name='email' value={JSON.parse(localStorage.getItem('email'))} placeholder="emmma_s@email.com" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                </div>
                <div className="form-control relative">
                    <input type="password" ref={passwordRef} name='password' placeholder="Password" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                    <FaEye onClick={() => showCredential(passwordRef)} className='text-[#999999] absolute right-4 top-1/2' style={{ transform: "translateY(-50%)" }} />
                </div>
                <div className="form-control relative">
                    <input type="password" ref={confirmPasswordRef} name='confirmPassword' placeholder="Repeat password" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                    <FaEye onClick={() => showCredential(confirmPasswordRef)} ref={confirmPasswordRef} className='text-[#999999] absolute right-4 top-1/2' style={{ transform: "translateY(-50%)" }} />
                </div>
                <div className="form-control">
                    <button onClick={() => handleClick()} className="btn bg-[#1D98FF] border-none text-white Alliance">CONTINUE</button>
                </div>
                <div className='flex items-center w-fit mx-auto gap-2'>
                    <p className='text-sm text-[#FFFFFF99]'>Already have an account?</p>
                    <div className='flex items-baseline gap-1'>
                        <p><Link to="/login" className='text-[#1D98FF] text-sm'>Log In</Link></p>
                        <img src={Arrow} className='w-[12px]' alt="" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;