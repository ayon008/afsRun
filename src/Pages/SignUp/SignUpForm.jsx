// Second Page
import { useState } from 'react';
import logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaCheck, FaEye, FaTimes } from "react-icons/fa";
import Arrow from '../../assets/main_icons/arrow-up-right.svg'
import { useForm } from 'react-hook-form';
import notify from '../../Js/notify';

const SignUpForm = () => {
    // Error 
    const [error, setError] = useState('');

    // React Hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Navigate
    const navigate = useNavigate();

    // OnSubmit function
    const onSubmit = (data) => {
        const email = JSON.parse(localStorage.getItem('email'));
        const password = data?.password;
        const confirmPassword = data?.confirmPassword;
        if (password !== confirmPassword) {
            setError('password did not match')
            console.log(email, confirmPassword, password, error);
            // React toast 
            notify("Password didn't matched")
            return;
        }
        const userCredentials = JSON.stringify({ email: email, password: password })
        localStorage.setItem('userCredentials', userCredentials);
        navigate('/signup/userDetails');
    }

    // ----------------------------//
    const [toggle, setToggle] = useState(true);
    const [type, setType] = useState('password');

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

    return (
        <div className="card shrink-0 lg:w-1/3 w-full shadow-2xl rounded-lg relative bg-[#1F1F1F]">
            {/* Cross */}
            <FaTimes onClick={() => navigate(-1)} className='absolute top-3 right-3 cursor-pointer' color='#8F8F8F' />
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-2">
                <img src={logo} className='w-[200px] h-[20px] mx-auto' alt="" />
                <div className='text-white text-center'>
                    <h3 className='font-bold text-[28px] Alliance tracking-wide'>Create Your Account</h3>
                    <h5 className='text-base Alliance tracking-wide text-[#FFFFFF99]'>Set your password to continue</h5>
                </div>
                <div className="form-control relative">
                    <label className="label items-center justify-normal bg-[#1F1F1F] px-2 w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                        <span className="label-text text-[#666]   text-sm font-bold py-0">EMAIL</span>
                        <span><FaCheck size={'0.85rem'} color='#2A7029' /></span>
                    </label>
                    <input type="email" name='email' value={JSON.parse(localStorage.getItem('email'))} placeholder="emmma_s@email.com" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                </div>
                <div className="form-control relative">
                    <input type={type} name='password' placeholder="Password" {...register("password", { minLength: 7 })} className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                    <FaEye onClick={() => showCredential(event)} className='text-[#999999] absolute right-4 top-1/2' style={{ transform: "translateY(-50%)" }} />
                </div>
                {
                    errors?.password && notify("Password must be seven characters long")
                }
                <div className="form-control relative">
                    <input type={type}  {...register("confirmPassword")} name='confirmPassword' placeholder="Repeat password" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                    <FaEye onClick={() => showCredential(event)} className='text-[#999999] absolute right-4 top-1/2' style={{ transform: "translateY(-50%)" }} />
                </div>
                <div className="form-control">
                    <button type='submit' className="btn bg-[#1D98FF] border-none text-white Alliance">CONTINUE</button>
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