import { useRef, useState } from 'react';
import logo from '../assets/logo.png'
import google from '../assets/main_icons/google.svg'
import { FaEye, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Arrow from '../assets/main_icons/arrow-up-right.svg'
import Map from '../Components/Map/Map';
import axios from 'axios';
import generateRandomUsername from '../Utilities/userName';
import useAuth from '../Hooks/useAuth';
import { useForm } from "react-hook-form"
import notify from '../Js/notify';
import Loader from '../Components/Loader';

const SignIn = () => {

    // React form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    // Context API || AuthProvider
    const { createWithGoogle, signIn } = useAuth()

    // Loading
    const [isLoading, setLoading] = useState(false);

    // visibility of password
    const [toggle, setToggle] = useState(true);
    const [type, setType] = useState('password');

    // 
    const showCredential = (event) => {
        event.stopPropagation();
        if (toggle) {
            setType('text');
        }
        else {
            setType('password');
        }
        setToggle(!toggle);
    }

    // Error Message
    const [error, setError] = useState(false);

    // Navigate after login
    const navigate = useNavigate();

    // Email & Password Login
    const onSubmit = data => {
        setLoading(true);
        const email = data?.email;
        const password = data?.password;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                setLoading(false);
                navigate('/discover')
                reset();
                console.log(user);
                setError(false)
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/invalid-credential)") {
                    notify("Email or password doesn't match");
                }
                setError(true)
                setLoading(false)
            })
    }

    // Google Login
    const handleGoogleLogin = () => {
        createWithGoogle()
            .then(result => {
                const user = result.user;
                const name = user?.displayName.split(' ');
                const surName = name[1];
                axios.post('http://localhost:5000/users', { email: user?.email, surName: surName, name: user?.displayName, uid: user?.uid, userName: generateRandomUsername(10) })
                    .then(rseponse => {
                        navigate('/userInformation')
                    })
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            })
    }

    if (isLoading) {
        return (
            <Loader />
        )
    }

    // Reset Password
    const handleReset = () => {
        navigate('/signup/forgotPassword')
    }


    return (
        <div>
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
                        <div className="card relative shrink-0 lg:w-1/3 w-full shadow-2xl rounded-lg bg-[#1F1F1F] max-h-[520px]">
                            <FaTimes className='absolute top-3 right-3 ' color='#8F8F8F' />
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-[1px]">
                                <img src={logo} className='w-[200px] h-[20px] mx-auto' alt="" />
                                <div className='text-white text-center'>
                                    <h3 className='font-bold 2xl:text-[28px] lg:text-2xl Alliance tracking-wide'>Sign up for AFS Runs</h3>
                                    <h5 className='2xl:text-base lg:text-sm Alliance tracking-wide text-[#FFFFFF99]'>Add your own records for everyone to see</h5>
                                </div>
                                {/* Email field */}
                                <div className="form-control relative">
                                    <input type="email" name='email' {...register("email")} placeholder="Email Address" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                                </div>
                                {/* Error message */}
                                {
                                    error &&
                                    <div role="alert" className="alert alert-warning p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                        <span className='text-xs'>Warning: Invalid email address or password!</span>
                                    </div>
                                }
                                {/* Password Field */}
                                <div className="form-control relative mb-0">
                                    <input type={type} {...register("password")} name='password' placeholder="Password" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                                    <FaEye onClick={() => showCredential(event)} className='text-[#999999] absolute right-4 top-1/2 bottom-1/2 cursor-pointer' style={{ transform: "translateY(-50%)" }} />
                                </div>
                                <div className='flex gap-1'>
                                    <p className='w-fit flex-grow-0' onClick={() => handleReset()}><Link to="/signup" className='text-[#1D98FF] text-sm'>Forgot password?</Link></p>
                                    <img src={Arrow} className='w-[12px] mt-1' alt="" />
                                </div>
                                <div>
                                    <p className='text-center text-[#999999] Alliance text-xs'>OR</p>
                                </div>
                                {/* Google Field */}
                                <div>
                                    <div className='flex items-center px-3 rounded-[10px] bg-white py-1 border-2 border-[#1D98FF] gap-4 cursor-pointer' onClick={handleGoogleLogin}>
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
                            <p className={`text-[#FFFFFF99] Alliance 2xl:text-lg ${error ? 'lg:text-[8px]' : 'lg:text-[16px]'}`}>By signing up, I confirm that I have read and accepted Foil&Co.’s <span className='text-[#1D98FF]'>Terms & Conditions</span> and <span className='text-[#1D98FF]'>Privacy Policy</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;