import React, { useContext, useRef, useState } from 'react';
import logo from '../assets/logo.svg'
import google from '../assets/main_icons/google.svg'
import { FaEye } from 'react-icons/fa';

import { Link, useNavigate } from 'react-router-dom';
import Arrow from '../assets/main_icons/arrow-up-right.svg'
import Map from '../Components/Map/Map';
import { AuthContext } from '../Provider/AuthProvider';

const SignIn = () => {

    // Context API || AuthProvider
    const { createWithGoogle, signIn } = useContext(AuthContext);

    // visibility of password
    const passwordRef = useRef(null);
    const [type, setType] = useState(true);
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

    // Navigate after login
    const navigate = useNavigate();

    // Email & Password Login
    const onSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate('/')
                event.target.reset();
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            })
        console.log(email, password);
    }

    // Google Login
    const handleGoogleLogin = () => {
        createWithGoogle()
            .then(result => {
                const user = result.user;
                navigate('/')
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className=''>
            <div className='relative'>
                {/* Background Map */}
                <div className="z-10">
                    <Map />
                </div>
                {/* Blur effect */}
                <div className='w-full h-full inset-0 absolute z-20' style={{ backdropFilter: "blur(15px)" }}>
                </div>

                {/* Login */}
                <div className="hero absolute z-30 w-full" style={{ top: '50%', left: '50%', transform: "translate(-50%, -50%)" }}>
                    <div className="hero-content w-full flex flex-col">
                        {/* Form */}
                        <div className="card shrink-0 lg:w-1/3 w-full shadow-2xl rounded-none bg-[#1F1F1F]">
                            <form onSubmit={onSubmit} className="card-body space-y-2">
                                <img src={logo} className='w-[150px] h-[20px] mx-auto' alt="" />
                                <div className='text-white text-center'>
                                    <h3 className='font-bold text-[28px] Alliance tracking-wide'>Sign up for AFS Runs</h3>
                                    <h5 className='text-base Alliance tracking-wide text-[#FFFFFF99]'>Add your own records for everyone to see</h5>
                                </div>
                                {/* Email field */}
                                <div className="form-control relative">
                                    <input type="email" name='email' placeholder="Email Address" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                                </div>
                                {/* Password Field */}
                                <div className="form-control relative">
                                    <input type="password" ref={passwordRef} name='password' placeholder="Password" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                                    <FaEye onClick={() => showCredential(passwordRef)} className='text-[#999999] absolute right-4 top-1/2' style={{ transform: "translateY(-50%)" }} />
                                </div>
                                <div>
                                    <p className='text-center text-[#999999] Alliance text-xs'>OR</p>
                                </div>
                                {/* Google Field */}
                                <div className='bg-white rounded'>
                                    <div className='flex items-center p-3 gap-4 cursor-pointer' onClick={handleGoogleLogin}>
                                        <img src={google} alt="" />
                                        <h3 className='Alliance font-semibold'>Continue with Google</h3>
                                    </div>
                                </div>
                                {/* Submit Button */}
                                <div className="form-control">
                                    <button className="btn bg-[#1D98FF] border-none text-white Alliance">CONTINUE</button>
                                </div>
                                {/*Refer to Sign Up  */}
                                <div className='flex items-center w-fit mx-auto gap-2'>
                                    <p className='text-sm text-[#FFFFFF99]'>Need an account?</p>
                                    <div className='flex items-baseline gap-1'>
                                        <p><Link to="/signup" className='text-[#1D98FF] text-sm'>Create account</Link></p>
                                        <img src={Arrow} className='w-[12px]' alt="" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='lg:w-1/3 w-full text-center'>
                            <p className='text-[#FFFFFF99] Alliance text-[8px]'>By signing up, I confirm that I have read and accepted Foil&Co.’s <span className='text-[#1D98FF]'>Terms & Conditions</span> and <span className='text-[#1D98FF]'>Privacy Policy</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;