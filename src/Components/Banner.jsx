import bannerImage from '../assets/image 26.png'
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import clipImage from '../assets/@arthurhabudzik- Chipri board RIDE-8.jpg'
import ScrollButton from './ScrollButton';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate(link);
    }

    return (
        <div className='Alliance'>
            {/* Banner Image */}
            <div style={{ backgroundImage: `url('${bannerImage}')`, backgroundPosition: 'center calc(10% - 130px)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='min-h-screen max-h-[1300px] h-screen'>
                <div className='text-white flex flex-col h-full'>
                    <div className='lg:my-auto 2xl:mt-[300px] 2xl:px-40 lg:px-28'>
                        <h3 className='font-bold Alliance 2xl:text-7xl lg:text-5xl text-3xl'>Discover the downwind <br /> freeride and its adventure <br /> and discovery aspect</h3>
                        <button className="mt-6 btn btn-info uppercase text-white btn-color">view all runs <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="main_icons/arrow-up-right">
                                <path id="Vector" d="M12 2L2 12M12 2H3M12 2V11" stroke="white" stroke-width="2" />
                            </g>
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Banner Second Section */}
            <div className='bg-black'>
                {/* Transparent Text */}
                <div className='2xl:mx-40 2xl:py-52 lg:py-32 lg:mx-24 border-b border-[#FFFFFF99]'>
                    <h3 className='Alliance 2xl:text-[90px] lg:text-6xl text-white uppercase' style={{ backgroundImage: `url('${clipImage}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom', backgroundClip: 'text', color: 'transparent', WebkitBackgroundClip: 'text' }}>Downwinder is the community app around downwind that accompanies all downwind enthusiasts before and after their outings.</h3>
                </div>
                {/* Horizontal End and a small text appear */}
                <div className='2xl:mx-40 lg:mx-24'>
                    <h5 className='mt-5 uppercase Alliance tracking-widest text-white'>Access comprehensive content</h5>
                </div>
                {/* Card Section Added */}
                <div className='2xl:mt-20 2xl:pb-48 lg:pb-36 lg:mt-14 2xl:mx-40 lg:mx-24 grid 2xl:grid-cols-4 lg:grid-cols-3 gap-5'>
                    {/* Card-1 */}
                    <div className='text-white border-2 border-[#1D98FF99] p-7 rounded-[10px] h-[350px]'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M16.9998 26.9167H23.3748C24.6899 26.9167 25.951 26.3943 26.8809 25.4644C27.8108 24.5345 28.3332 23.2734 28.3332 21.9583C28.3332 20.6433 27.8108 19.3821 26.8809 18.4523C25.951 17.5224 24.6899 17 23.3748 17H12.0415C10.7265 17 9.4653 16.4776 8.53543 15.5477C7.60557 14.6179 7.08317 13.3567 7.08317 12.0417C7.08317 10.7266 7.60557 9.46546 8.53543 8.5356C9.4653 7.60573 10.7265 7.08333 12.0415 7.08333H16.9998M11.3332 26.9167C11.3332 28.4815 10.0646 29.75 8.49984 29.75C6.93503 29.75 5.6665 28.4815 5.6665 26.9167C5.6665 25.3519 6.93503 24.0833 8.49984 24.0833C10.0646 24.0833 11.3332 25.3519 11.3332 26.9167ZM28.3332 7.08333C28.3332 8.64814 27.0646 9.91667 25.4998 9.91667C23.935 9.91667 22.6665 8.64814 22.6665 7.08333C22.6665 5.51853 23.935 4.25 25.4998 4.25C27.0646 4.25 28.3332 5.51853 28.3332 7.08333Z" stroke="#1D98FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className='mt-24'>
                            <h3 className='uppercase Alliance font-bold 2xl:text-[26px] text-xl '>Routes and points of interest</h3>
                            <p className='Alliance mt-3'>Access 300,000 routes and POIs around the world that are aggregated by the community.</p>
                        </div>
                    </div>
                    {/* Card-2 */}
                    <div className='text-white border-2 p-7 border-[#1D98FF99] rounded-[10px] h-[350px]'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M17 11.3333H17.0142M15.5833 17H17V22.6667H18.4167M29.75 17C29.75 24.0416 24.0416 29.75 17 29.75C9.95837 29.75 4.25 24.0416 4.25 17C4.25 9.95837 9.95837 4.25 17 4.25C24.0416 4.25 29.75 9.95837 29.75 17Z" stroke="#1D98FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className='mt-24'>
                            <h3 className='uppercase Alliance font-bold 2xl:text-[26px] text-xl '>Detailed Information</h3>
                            <p className='Alliance mt-3'>You will find plenty of information about each route, such as descriptions, photos, and colors to assess the difficulty level.</p>
                        </div>
                    </div>
                    {/* Card-3 */}
                    <div className='text-white border-2 p-7 border-[#1D98FF99] rounded-[10px] h-[350px]'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M16.9998 26.9167H23.3748C24.6899 26.9167 25.951 26.3943 26.8809 25.4644C27.8108 24.5345 28.3332 23.2734 28.3332 21.9583C28.3332 20.6433 27.8108 19.3821 26.8809 18.4523C25.951 17.5224 24.6899 17 23.3748 17H12.0415C10.7265 17 9.4653 16.4776 8.53543 15.5477C7.60557 14.6179 7.08317 13.3567 7.08317 12.0417C7.08317 10.7266 7.60557 9.46546 8.53543 8.5356C9.4653 7.60573 10.7265 7.08333 12.0415 7.08333H16.9998M11.3332 26.9167C11.3332 28.4815 10.0646 29.75 8.49984 29.75C6.93503 29.75 5.6665 28.4815 5.6665 26.9167C5.6665 25.3519 6.93503 24.0833 8.49984 24.0833C10.0646 24.0833 11.3332 25.3519 11.3332 26.9167ZM28.3332 7.08333C28.3332 8.64814 27.0646 9.91667 25.4998 9.91667C23.935 9.91667 22.6665 8.64814 22.6665 7.08333C22.6665 5.51853 23.935 4.25 25.4998 4.25C27.0646 4.25 28.3332 5.51853 28.3332 7.08333Z" stroke="#1D98FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className='mt-24'>
                            <h3 className='uppercase Alliance font-bold 2xl:text-[26px] text-xl '>Search Filters</h3>
                            <p className='Alliance mt-3'>Filter routes by difficulty, country to quickly find downwind ideas.</p>
                        </div>
                    </div>
                    {/* Login Card-6 */}
                    <div className='text-white border-0 p-7 bg-[#1D98FF] rounded-[10px] h-[350px]'>
                        <div>
                            <h3 className='text-white  Alliance font-bold 2xl:text-[26px] text-xl'>Log in or create a new Downwinder account to take advantage of all the features.</h3>
                        </div>
                        <div className='mt-16'>
                            <div>
                                <button onClick={() => handleClick('/signup')} className="btn w-full mb-2 text-[#00528B] font-semibold text-sm">Sign Up <AiOutlineUser className='mt-1' /></button>
                            </div>
                            <div>
                                <button onClick={() => handleClick('/login')} className="btn w-full bg-[#1D98FF] text-white font-semibold text-sm">Login <BiLogOut />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Scroll Button */}
                <ScrollButton></ScrollButton>
            </div>
        </div>
    );
};

export default Banner;