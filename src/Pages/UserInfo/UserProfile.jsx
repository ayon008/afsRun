import img from '../../assets/24897aeca69e1dba7d7a8c8964cb6a7c.png';
import logo1 from '../../assets/profileIcon2.svg';
import logo2 from '../../assets/profileIcon.svg';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/userInformation/runsResults')
    }
    return (
        <div className='h-full flex'>
            <img className='w-1/2 h-full max-h-[600px]' src={img} alt="" />
            <div className='w-1/2 px-8 py-16 space-y-6'>
                <div className='flex items-center'>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                </div>
                <div>
                    <h2 className='2xl:text-3xl lg:text-2xl text-white font-bold'>Get ready for foiling adventures!</h2>
                    <p className='dim mt-[10px] 2xl:text-lg lg:text-sm'>Hooray! 🌊 Your request to add a new run is already in progress!</p>
                </div>
                <button onClick={() => handleNavigate()} className='text-white flex gap-1 items-center 2xl:text-sm lg:text-xs uppercase'><FaArrowLeft /> <span>Back to runs</span></button>
            </div>
        </div>
    );
};

export default UserProfile;