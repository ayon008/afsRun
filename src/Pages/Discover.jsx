import React, { useState } from 'react';
import Map from '../Components/Map/Map';
import { CiGrid2H, CiLocationOn } from "react-icons/ci";
import { BsGrid } from "react-icons/bs";
// import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Card from '../Components/Card';
import ScrollButton from '../Components/ScrollButton';
import Table from '../Components/Table';

const Discover = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const arr = [];
    for (let i = 0; i <= 23; i++) {
        arr.push(i)
    }

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
            {/* Tab */}
            <div className='text-white mt-10 pb-10'>
                <Tabs className={`${tabIndex === 0 && 'relative'}`} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    {/* Tab Contents */}
                    <TabPanel>
                        <div className='px-10'>
                            <div>
                                <Map></Map>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='px-10 pb-4'>
                            <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 mb-10 gap-6'>
                                {
                                    arr.map(a => <Card key={a}></Card>)
                                }
                            </div>
                            {/* Scroll Button */}
                            <ScrollButton></ScrollButton>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='px-10 pb-4'>
                            <Table />
                            {/* Scroll Button */}
                            <ScrollButton></ScrollButton>
                        </div>
                    </TabPanel>

                    {/* Tab List */}
                    <TabList className={`w-[350px] mx-auto tabs tabs-boxed p-0 bg-[#1F1F1F] rounded-[40px] ${tabIndex === 0 && 'absolute bottom-6 left-1/2 -translate-x-1/2 z-20'}`}>
                        <Tab className={`uppercase tab text-white font-bold h-[50px] tracking-widest ${tabIndex === 0 && 'activeTab'}`} style={{ width: "calc(350px/3)", borderRadius: '40px' }}><CiLocationOn size={'1.3rem'} /><span className='ms-1'>Maps</span></Tab>
                        <Tab className={`uppercase tab text-white font-bold h-[50px] tracking-widest ${tabIndex === 1 && 'activeTab'}`} style={{ width: "calc(350px/3)", borderRadius: '40px' }}><BsGrid size={'1.3rem'} /><span className='ms-1'>grid</span></Tab>
                        <Tab className={`uppercase tab h-[50px] text-white font-bold tracking-widest ${tabIndex === 2 && 'activeTab'}`} style={{ width: "calc(350px/3)", borderRadius: '40px' }}><CiGrid2H size={'1.3rem'} /><span className='ms-1'>List</span></Tab>
                    </TabList>
                </Tabs>
            </div>
        </div>
    );
};

export default Discover;