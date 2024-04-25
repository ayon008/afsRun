import Map from '../Components/Map/Map';
import logo from '../assets/logo.png';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaClipboardList, FaLock, FaNewspaper, FaSignOutAlt, FaUser } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';

const UserLayout = () => {
    const { user, logOut } = useAuth()
    // sign out user
    const navigate = useNavigate()
    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    // Active Link


    return (
        <div className='relative w-full h-screen'>
            {/* Background Map */}
            <div className='z-10'>
                <Map></Map>
            </div>
            {/* Blur */}
            <div className='w-full h-full inset-0 absolute z-20' style={{ backdropFilter: "blur(15px)" }}>

            </div>
            {/* Left Nav */}
            <div className="hero absolute z-30 w-3/4 h-[90%] bg-red-500 max-h-[600px] max-w-[1060px]" style={{ top: '50%', left: '50%', transform: "translate(-50%, -50%)" }}>
                <div className="w-full h-full flex-col">
                    <div className='w-full h-full'>
                        <div className='rounded-md w-full h-full' style={{ display: "grid", gridTemplateColumns: '2fr 4fr' }}>
                            <div className='p-5 bg-[#111111] h-full'>
                                <img onClick={() => navigate('/')} className='h-auto w-[150px]' src={logo} alt="" />
                                <div className="mt-6 flex flex-col h-full">
                                    <ul className='flex flex-col h-[90%] justify-between'>
                                        <div className='space-y-5'>
                                            {/* User name and email */}
                                            <li>
                                                <Link to='/userInformation/userProfile'>
                                                    <div className='p-2 rounded-sm bg-white Alliance text-[#111111]'>
                                                        <p className='font-semibold'>Hello, {user?.displayName}</p>
                                                        <p>{user?.email}</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            {/* Nav Links */}
                                            <li>
                                                <NavLink to={'/userInformation'} className={({ isActive }) => isActive ? 'text-white  text-xs Alliance' :
                                                    'text-[#A0A0A0] text-xs Alliance'}><span className='flex items-center gap-2'><FaUser /> INFORMATION</span></NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'runsResults'} className={({ isActive }) => isActive ? 'text-white  text-xs Alliance' :
                                                    'text-[#A0A0A0] text-xs Alliance'}><span className='flex items-center gap-2'><FaClipboardList /> MY RUNS </span></NavLink>
                                            </li>
                                        </div>
                                        <div className='space-y-5'>
                                            <li>
                                                <NavLink className={({ isActive }) => isActive ? 'text-white  text-xs Alliance' :
                                                    'text-[#A0A0A0] text-xs Alliance'}><span className='flex items-center gap-2'><FaNewspaper /> SUBSCRIBE TO THE <br />NEWSLETTER</span></NavLink>
                                            </li>
                                            <li>
                                                <NavLink className={({ isActive }) => isActive ? 'text-white  text-xs Alliance' :
                                                    'text-[#A0A0A0] text-xs Alliance'}><span className='flex items-center gap-2'><FaLock /> RESET PASSWORD</span></NavLink>
                                            </li>
                                            <li>
                                                <button onClick={handleLogout} className='text-[#A0A0A0] text-xs Alliance'><span className='flex items-center gap-2'><FaSignOutAlt /> SIGN OUT</span></button>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className='bg-[#1F1F1F] h-full'>
                                <Outlet></Outlet>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLayout;