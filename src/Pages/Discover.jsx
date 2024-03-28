import React from 'react';
import Map from '../Components/Map/Map';
import { motion } from "framer-motion"

const Discover = () => {
    return (
        <div className='bg-black Alliance'>
            {/* Discover Text */}
            <div>
                <h2 className='2xl:pt-44 lg:pt-36 text-center font-bold tracking-wider text-white w-fit mx-auto 2xl:text-7xl lg:text-5xl'>Discover 300,000 routes <br /> and POIs around the world.</h2>
            </div>
            {/* Filter Section */}
            <div>
                <div className='flex items-center gap-5 mt-10 2xl:ms-40 lg:ms-28'>
                    <h3 className='text-white'>Filter :</h3>
                    <select className="select dim bg-[#1F1F1F] uppercase select-bordered w-full max-w-[250px]">
                        <option disabled selected className=''>Level of difficulty</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <select className="select dim bg-[#1F1F1F] uppercase select-bordered w-full max-w-[250px]">
                        <option disabled selected>Country</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
            </div>
            {/* Map */}
            <div className='px-10 pb-10 pt-5'>
                <div>
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default Discover;