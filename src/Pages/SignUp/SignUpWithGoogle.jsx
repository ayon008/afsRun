// First Page
import logo from '../../assets/logo.png'
import google from '../../assets/main_icons/google.svg'
import { Link, useNavigate } from 'react-router-dom';
import Arrow from '../../assets/main_icons/arrow-up-right.svg'
import axios from 'axios';
import generateRandomUsername from '../../Utilities/userName';
import useAuth from '../../Hooks/useAuth';
import { FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const SignUpWithGoogle = () => {
    // React form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    // AuthContext
    const { createWithGoogle } = useAuth()

    // Navigate to next page
    const navigate = useNavigate();

    // OnSubmit
    const onSubmit = data => {
        const email = data?.email;
        localStorage.setItem('email', JSON.stringify(email));
        axios.post('http://localhost:5000/email', { email })
            .then(response => {
                Swal.fire({
                    position: "center",
                    background: '#1F1F1F',
                    color: 'white',
                    icon: "success",
                    title: "verification email is sent",
                    showConfirmButton: false,
                    timer: null
                });
            })
    }

    const handleGoogleLogin = () => {
        createWithGoogle()
            .then(result => {
                const user = result.user;
                const name = user?.displayName.split(' ');
                const surName = name[1];
                axios.post('http://localhost:5000/users', { email: user?.email, surName: surName, name: user?.displayName, uid: user?.uid, userName: generateRandomUsername(10) })
                    .then(rseponse => {
                        navigate('/discover')
                    })
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="card relative shrink-0 lg:w-1/3 w-full shadow-2xl rounded-lg bg-[#1F1F1F]">
            <FaTimes onClick={() => navigate('/')} className='absolute top-3 right-3 cursor-pointer' color='#8F8F8F' />
            <div className="card-body space-y-2">
                <img src={logo} className='w-[200px] h-[20px] mx-auto' alt="" />
                <div className='text-white text-center'>
                    <h3 className='font-bold text-[28px] Alliance tracking-wide'>Sign up for AFS Runs</h3>
                    <h5 className='text-base Alliance tracking-wide text-[#FFFFFF99]'>Add your own records for everyone to see</h5>
                </div>
                <div className='bg-white rounded-[10px] border-2 border-[#1D98FF] cursor-pointer'>
                    <button className='flex items-center py-1 px-3 gap-4' onClick={handleGoogleLogin}>
                        <img src={google} alt="" />
                        <h3 className='Alliance font-semibold'>Continue with Google</h3>
                    </button>
                </div>
                <div>
                    <p className='text-center text-[#999999] Alliance text-xs'>OR</p>
                </div>
                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <input type="email" name='email' {...register("email")} placeholder="Email Address" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
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