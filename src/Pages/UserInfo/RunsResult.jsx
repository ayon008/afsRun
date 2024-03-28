import React from 'react';
import img1 from '../../assets/layout-list.svg';
import img2 from '../../assets/layout-grid.svg';
import { FaGripHorizontal, FaGripLines, FaGripVertical, FaTable } from 'react-icons/fa';
import Table from './Table';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import toGeoJSON from 'togeojson';
import { AuthContext } from '../../Provider/AuthProvider';

const RunsResult = () => {

    const { user } = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const inputFiles = event => {
        const data = event.target.value;
        if (data.endsWith('gpx')) {
            setData(event.target.files[0]);
            setError('');
        }
        else if (!data.endsWith('gpx')) {
            setError('must be gpx format')
        }
    }

    const navigate = useNavigate()
    const handleUpload = () => {
        if (!data) {
            alert('Please select a file.');
            return;
        }
        const reader = new FileReader();
        reader.onload = function (event) {
            const gpxData = event.target.result;
            const domParser = new DOMParser();
            const gpxXml = domParser.parseFromString(gpxData, 'text/xml');
            const geoJSONData = toGeoJSON.gpx(gpxXml);
            geoJSONData.userId = user.uid;
            fetch('http://localhost:5000/allRuns', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(geoJSONData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setData(null)
                        navigate('/')
                        alert('uploaded')
                    }
                })
        };
        reader.readAsText(data);
    }

    return (
        <div className='px-4'>
            <h3 className='text-3xl mt-12 text-white font-bold Alliance pt-1'>Runs Result</h3>
            <p className='text-[#A5A5A5] Alliance mt-2'>Here are the details of run verified by the company for your review and analysis</p>
            <div className='flex items-center gap-1 w-fit pe-3 ms-auto mt-2 mb-4'>
                <NavLink to={"/userInformation/runsResult/approvedResults"} className={({ isActive }) => isActive ? 'text-white' : 'text-[#A5A5A5]'}><FaGripHorizontal /></NavLink>
                <NavLink to={"/userInformation/runsResult"} className={({ isActive }) => isActive ? 'text-white' : 'text-[#A5A5A5]'}> <FaGripLines /></NavLink>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div className='flex items-center gap-2 mt-6'>
                <label htmlFor="my_modal_6" className='p-2 bg-[#1D98FF] text-white text-xs rounded-md Alliance'>ADD RUNS RESULT +</label>
                {/* <button className='p-2 bg-[#1D98FF] text-white text-xs rounded-md Alliance'>ADD RUNS RESULT +</button> */}
                <button className='p-2 bg-[#3D3D3D] text-white text-xs rounded-md Alliance'>ADD A RUNS +</button>
            </div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box bg-[#282828] text-[#999999] relative">
                    <input onChange={inputFiles} type="file" accept=".gpx" />
                    <p className='text-xs text-red-400'>{error}</p>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" onClick={handleUpload} className="btn">Upload</label>
                    </div>
                    <div className="modal-action absolute -top-[30px] right-0">
                        <label htmlFor="my_modal_6" className="btn bg-[#282828] border-none text-[#999999]">X</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RunsResult;











