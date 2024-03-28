import React, { useEffect, useState } from 'react';

const Runs = () => {
    return (
        <div className='bg-black'>
            <div className='lg:p-20 p-10'>
                <h2 className='lg:text-5xl text-2xl text-white'>All Runs</h2>
                <div className='mt-20'>
                    <div>
                        <div className='flex items-center gap-4 pb-6 text-white' style={{ borderBottom: "2px solid #FFFFFF1A" }}>
                            <img className='w-[20px] h-[15px]' src="https://i.ibb.co/zPvKBmB/download.png" alt="" />
                            <h3 className='text-3xl font-semibold'>Australia</h3>
                        </div>
                        <div className='grid lg:grid-cols-6 grid-cols-1 gap-6'>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Botany Bay to inside of Cronulla Run</h3>
                                <p className='text-[#666666]'>Distance 16 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Gingernut Run</h3>
                                <p className='text-[#666666]'>Distance 16 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Rocky Run</h3>
                                <p className='text-[#666666]'>Distance 8 km</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <div>
                        <div className='flex items-center gap-4 pb-6 text-white' style={{ borderBottom: "2px solid #FFFFFF1A" }}>
                            <img className='w-[20px] h-[15px]' src="https://i.ibb.co/gj5fY5k/download-1.png" alt="" />
                            <h3 className='text-3xl font-semibold'>Brazil</h3>
                        </div>
                        <div className='flex items-center justify-between gap-5'>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Fortaleza to Cumbuco Run </h3>
                                <p className='text-[#666666]'>Distance 30km km</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <div>
                        <div className='flex items-center gap-4 pb-6 text-white' style={{ borderBottom: "2px solid #FFFFFF1A" }}>
                            <img className='w-[20px] h-[15px]' src="https://i.ibb.co/LSs2TKk/download-2.png" alt="" />
                            <h3 className='text-3xl font-semibold'>Canada</h3>
                        </div>
                        <div className='flex items-center justify-between gap-5'>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Canadian Champs</h3>
                                <p className='text-[#666666]'>Distance 20 km</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <div>
                        <div className='flex items-center gap-4 pb-6 text-white' style={{ borderBottom: "2px solid #FFFFFF1A" }}>
                            <img className='w-[20px] h-[15px]' src="https://i.ibb.co/7WC0FK5/360-F-87982766-EIEDz-REWBxca8-CEBOqd-LOn-HMAJ3fd0ph.jpg" alt="" />
                            <h3 className='text-3xl font-semibold'>Caribbean Islands</h3>
                        </div>
                        <div className='grid lg:grid-cols-6 grid-cols-1 gap-6'>
                            <div>
                                <h3 className='text-white text-xl mt-10'>AC Run</h3>
                                <p className='text-[#666666]'>Distance 14 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>KKC Run</h3>
                                <p className='text-[#666666]'>Distance 18 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Soualiga (new) Run</h3>
                                <p className='text-[#666666]'>Distance 23 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Soualiga (old) Run</h3>
                                <p className='text-[#666666]'>Distance 25 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>The Mullet Run</h3>
                                <p className='text-[#666666]'>Distance 12 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Ze Race Run</h3>
                                <p className='text-[#666666]'>Distance 47 km</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <div>
                        <div className='flex items-center gap-4 pb-6 text-white' style={{ borderBottom: "2px solid #FFFFFF1A" }}>
                            <img className='w-[20px] h-[15px]' src="https://i.ibb.co/8zKQGWD/download-3.png" alt="" />
                            <h3 className='text-3xl font-semibold'>England</h3>
                        </div>
                        <div className='grid lg:grid-cols-6 grid-cols-1 gap-6'>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Brixham Shaldon Run</h3>
                                <p className='text-[#666666]'>Distance 17 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Chesil Beach Run</h3>
                                <p className='text-[#666666]'>Distance 29 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Dungeness to Folkestone Run</h3>
                                <p className='text-[#666666]'>Distance 23 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Eastbourne Hastings Run</h3>
                                <p className='text-[#666666]'>Distance 24 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Icon Classic</h3>
                                <p className='text-[#666666]'>Distance 17 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Lizard to Roseland Run</h3>
                                <p className='text-[#666666]'>Distance 31 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Lyme Bay Run</h3>
                                <p className='text-[#666666]'>Distance 31 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Mounts Bay Dark Water Run</h3>
                                <p className='text-[#666666]'>Distance 28 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Old Harry Race</h3>
                                <p className='text-[#666666]'>Distance 20 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Porthleven to Newlyn Run</h3>
                                <p className='text-[#666666]'>Distance 16 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>St Ives to Perranporth Run</h3>
                                <p className='text-[#666666]'>Distance 27 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Walmer/Deal to Ramsgate Run</h3>
                                <p className='text-[#666666]'>Distance 16 km</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <div>
                        <div className='flex items-center gap-4 pb-6 text-white' style={{ borderBottom: "2px solid #FFFFFF1A" }}>
                            <img className='w-[20px] h-[15px]' src="https://i.ibb.co/ZMnF2rg/Flag-of-the-Falkland-Islands-svg.png" alt="" />
                            <h3 className='text-3xl font-semibold'>Falklands</h3>
                        </div>
                        <div className='flex items-center justify-between gap-5'>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Falkland Sound</h3>
                                <p className='text-[#666666]'>Distance 24 km</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <div>
                        <div className='flex items-center gap-4 pb-6 text-white' style={{ borderBottom: "2px solid #FFFFFF1A" }}>
                            <img className='w-[20px] h-[15px]' src="https://i.ibb.co/qdKNZJY/download-5.png" alt="" />
                            <h3 className='text-3xl font-semibold'>France</h3>
                        </div>
                        <div className='grid lg:grid-cols-6 grid-cols-1 gap-6'>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Aberliko Run</h3>
                                <p className='text-[#666666]'>Distance 7 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Etang de Berre Run</h3>
                                <p className='text-[#666666]'>Distance 19 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Guisseny</h3>
                                <p className='text-[#666666]'>Distance 3 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>L'étang de Berre Run</h3>
                                <p className='text-[#666666]'>Distance 20 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>La Ciotat - Six Fours Run</h3>
                                <p className='text-[#666666]'>Distance 18 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Lizard to Roseland Run</h3>
                                <p className='text-[#666666]'>Distance 31 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Le Roux's Downwind Run</h3>
                                <p className='text-[#666666]'>Distance 13 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Mers les Bains Run Hauts de France</h3>
                                <p className='text-[#666666]'>Distance 16 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Radiliko Run</h3>
                                <p className='text-[#666666]'>Distance 10 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Quiberon Run</h3>
                                <p className='text-[#666666]'>Distance 22.5 km</p>
                            </div>
                            <div>
                                <h3 className='text-white text-xl mt-10'>Tour Royal to Almanarre Run</h3>
                                <p className='text-[#666666]'>Distance 18 km</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Runs;