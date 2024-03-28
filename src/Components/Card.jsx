import { FaArrowRight, FaStar } from 'react-icons/fa';
import ellipse from '../assets/Ellipse 2.svg';
import svg from '../assets/20180616145918!Light_Blue_Circle.svg';

const Card = () => {
    return (
        <div className="card bg-[#292929] text-primary-content" style={{ backdropFilter: '30px' }}>
            <div className="card-body p-5">
                {/* Country */}
                <span className='flex items-center gap-1'><img className='w-[16px] h-[12px]' src="https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg" alt="" /><h2 className="card-title text-[#FFFFFFCC] text-base">France, Brittany</h2></span>
                {/* Run Name */}
                <h1 className='text-[#FFFFFFCC] text-[21px] font-semibold'>Aberliko Run</h1>
                {/* Ratings */}
                <div className='flex items-center gap-2'>
                    <div className='text-blue-500 flex items-center'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div>
                        <p className='dim'><span className='text-[#FFFFFFCC]'>4</span>/<span className='dim'>5</span> (24rider)</p>
                    </div>
                </div>
                {/* Run Places */}
                <p className='flex items-center gap-[10px] pb-5 border-b-2 border-[#00000066]'>
                    <span className='flex items-center gap-[2px]'>
                        <img className='w-[12px] h-[12px]' src={ellipse} alt="" />
                        <span className='text-[#FFF]'>Plouguerneau</span>
                    </span>
                    <FaArrowRight />
                    <span className='flex items-center gap-[2px]'>
                        <img className='w-[12px] h-[12px]' src={svg} alt="" />
                        <span className='text-[#FFF]'>Perroz Plouguerneau</span>
                    </span>
                </p>
                {/* Distance */}
                <div className='flex items-center'>
                    <div className='w-1/2'>
                        <p className='text-sm text-[#FFFFFFCC]'>Distance</p>
                        <p className='text-lg'>3,7<span className='dim'>Km</span></p>
                    </div>
                    <div className='w-1/2'>
                        <p className='text-sm text-[#FFFFFFCC]'>Distance by car</p>
                        <p className='text-lg'>~10,8<span className='dim'>Km</span></p>
                    </div>
                </div>
                {/* <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default Card;