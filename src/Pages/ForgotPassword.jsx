import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import useAuth from '../Hooks/useAuth';

const ForgotPassword = () => {
    // React form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    // AuthContext
    const { resetPassword } = useAuth();

    // Navigate to next page
    const navigate = useNavigate();

    // Reset password
    const onSubmit = data => {
        const email = data?.email;
        resetPassword(email)
            .then(result => {
                Swal.fire({
                    position: "center",
                    background: '#1F1F1F',
                    color: 'white',
                    icon: "success",
                    title: "Please Check Your Email",
                    showConfirmButton: false,
                    timer: 4000
                });
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="card relative shrink-0 lg:w-1/3 w-full shadow-2xl rounded-lg bg-[#1F1F1F]">
            <FaTimes onClick={() => navigate('/login')} className='absolute top-3 right-3 cursor-pointer' color='#8F8F8F' />
            <div className="card-body space-y-2">
                <img src={logo} className='w-[200px] h-[20px] mx-auto' alt="" />
                <div className='text-white text-center'>
                    <h3 className='font-bold text-[28px] Alliance tracking-wide'>Sign up for AFS Runs</h3>
                    <h5 className='text-base Alliance tracking-wide text-[#FFFFFF99]'>Add your own records for everyone to see</h5>
                </div>
                <div>
                    <p className='text-center Alliance text-xs text-blue-300'>ENTER YOUR EMAIL</p>
                </div>
                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <input type="email" name='email' {...register("email")} placeholder="Email Address" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                    </div>
                    <div className="form-control">
                        <button className="btn bg-[#1D98FF] border-none text-white Alliance">RESET PASSWORD</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ForgotPassword;