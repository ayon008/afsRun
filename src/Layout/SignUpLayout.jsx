import Map from '../Components/Map/Map';
import { Outlet } from 'react-router-dom';

const SignUpLayout = () => {
    return (
        <div>
            <div className='relative'>
                {/* background Map */}
                <div className="z-10">
                    <Map></Map>
                </div>
                {/* Blurry Effect */}
                <div className='w-full h-full inset-0 absolute z-20' style={{ backdropFilter: "blur(15px)" }}>

                </div>

                {/* Shared Section */}
                <div className="hero absolute z-30 w-full" style={{ top: '50%', left: '50%', transform: "translate(-50%, -50%)" }}>
                    <div className="hero-content w-full flex-col">
                        {/* Content */}
                        <Outlet></Outlet>
                        <div className='lg:w-1/3 w-full text-center'>
                            <p className='text-[#FFFFFF99] Alliance'>By signing up, I confirm that I have read and accepted Foil&Co.’s <span className='text-[#1D98FF]'>Terms & Conditions</span> and <span className='text-[#1D98FF]'>Privacy Policy</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpLayout;


