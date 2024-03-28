import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import ellipse from '../assets/Ellipse 2.svg';
import svg from '../assets/20180616145918!Light_Blue_Circle.svg';

const TableRow = () => {
    return (
        <tr className='border-t-[1px]'>
            <th>
                <h1 className='text-[#FFFFFFCC] text-lg font-semibold'>Aberliko Run</h1>
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
            </th>
            <td>
                <span className='flex items-center gap-1'><img className='w-[16px] h-[12px]' src="https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg" alt="" /><h2 className="card-title text-[#FFFFFFCC] text-base">France, Brittany</h2></span>
            </td>
            <td>
                <p className='flex items-center gap-[10px] border-b-2 border-[#00000066]'>
                    <span className='flex items-center gap-[2px]'>
                        <img className='w-[12px] h-[12px]' src={ellipse} alt="" />
                        <span className='text-[#FFF] text-base'>Plouguerneau</span>
                    </span>
                    <FaArrowRight />
                    <span className='flex items-center gap-[2px]'>
                        <img className='w-[12px] h-[12px]' src={svg} alt="" />
                        <span className='text-[#FFF] text-base'>Perroz Plouguerneau</span>
                    </span>
                </p>
            </td>
            <td>
                <div className=''>
                    <p className='text-sm text-[#FFFFFFCC]'>Distance</p>
                    <p className='text-lg'>3,7<span className='dim'>Km</span></p>
                </div>
            </td>
            <td>
                <div className=''>
                    <p className='text-sm text-[#FFFFFFCC]'>Distance by car</p>
                    <p className='text-lg'>~10,8<span className='dim'>Km</span></p>
                </div>
            </td>
            <td>
                <div className='flex items-center gap-1 text-[#1D98FF] font-bold'>
                    <span className='uppercase'>View on the map</span> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="main_icons/arrow-up-right">
                            <path id="Vector" d="M12 2L2 12M12 2H3M12 2V11" stroke="white" stroke-width="2" />
                        </g>
                    </svg>
                </div>
            </td>
        </tr>
    );
};

export default TableRow;