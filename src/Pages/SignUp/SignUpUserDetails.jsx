// Third Page
import { useState } from 'react';
import logo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import Arrow from '../../assets/main_icons/arrow-up-right.svg'
import { updateProfile } from 'firebase/auth';
import useAuth from '../../Hooks/useAuth';
import { FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import notify from '../../Js/notify';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import Loader from '../../Components/Loader';

const SignUpUserDetails = () => {
    // AuthContext
    const { logOut } = useAuth();

    // Error message
    const [error, setError] = useState('');

    // Auth
    const { createAccount, user } = useAuth();

    const [isLoading, setLoading] = useState(false);

    // React form hook
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    //Navigate 
    const navigate = useNavigate();

    // OnSubmit function
    const onSubmit = (data) => {
        setLoading(true)
        const name = data?.name;
        const surName = data?.surName;
        const userName = data?.userName;
        axios.post('http://localhost:5000/userName', { userName })
            .then(response => {
                if (!response?.data?.result) {
                    const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
                    const { email, password } = userCredentials;
                    createAccount(email, password)
                        .then(result => {
                            localStorage.removeItem('userCredentials');
                            localStorage.removeItem('email');
                            const user = result.user;
                            updateProfile(user, {
                                displayName: name
                            })
                                .then()
                                .catch(error => {
                                    console.log(error.message);
                                });
                            const uid = user.uid;
                            const userData = { email, name, surName, userName, uid };
                            axios.post(`http://localhost:5000/users`, userData)
                                .then(response => {
                                    logOut()
                                        .then(result => {
                                            setLoading(false);
                                            if (response) {
                                                setLoading(false);
                                                Swal.fire({
                                                    position: "center",
                                                    background: '#1F1F1F',
                                                    color: 'white',
                                                    icon: "success",
                                                    title: "Signed Up, Please Login",
                                                    showConfirmButton: false,
                                                    timer: 2500
                                                });
                                                navigate('/login')
                                                reset();
                                            }
                                        })
                                })
                            console.log(user);
                        })
                        .catch(error => {
                            setError(error.message);
                            setLoading(false);
                            notify('Email is already in used');
                        })
                }
                else {
                    notify("Username is not available");
                    setLoading(false);
                }

            })

    }


    // Loader
    if (isLoading) {
        return (
            <Loader />
        )
    }

    return (
        <div className="card shrink-0 lg:w-1/3 w-full shadow-2xl rounded-[10px] bg-[#1F1F1F]">
            <FaTimes onClick={() => navigate(-2)} className='absolute top-3 right-3 cursor-pointer' color='#8F8F8F' />
            <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-2">
                <img src={logo} className='w-[150px] h-[20px] mx-auto' alt="" />
                <div className='text-white text-center'>
                    <h3 className='font-bold text-[28px] Alliance tracking-wide'>Create Your Account</h3>
                    <h5 className='text-base Alliance tracking-wide text-[#FFFFFF99]'>Your name will be seen in the leaderboard</h5>
                </div>
                <div className="form-control relative">
                    <input type="text" name='name' {...register("name")} placeholder="Name" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                </div>
                <div className="form-control relative">
                    <input type="text" name='surName' {...register("surName")} placeholder="Surname" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                </div>
                <div className="form-control relative">
                    <input type="text" name='userName' {...register("userName")} placeholder="User Name" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                </div>
                <div className="form-control">
                    <button type='submit' className="btn bg-[#1D98FF] border-none text-white Alliance">CREATE ACCOUNT</button>
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

export default SignUpUserDetails;