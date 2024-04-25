import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const DashBoard = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = (data) => {
        axios.post('http://localhost:5000/allRuns', data)
            .then(response => {
                alert('upload success')
            })
        reset();
    };

    return (
        <div className='bg-black h-screen flex flex-col'>
            <form className='w-3/4 m-auto' onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center text-white text-3xl">Admin DashBoard</h1>
                <div className='grid grid-cols-3 gap-x-3 2xl:gap-y-5 lg:gap-y-3 form-control'>
                    <h3 className='dim col-span-3'>Information</h3>
                    <div className="form-control">
                        <input {...register("runName")} type="text" placeholder="Run Name" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance disabled" required />
                    </div>
                    <div className="form-control">
                        <select className="select text-base input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white dim Alliance disabled" required {...register("difficulty")}>
                            <option disabled selected>Difficulty Level</option>
                            <option>France</option>
                            <option>England</option>
                            <option>Italy</option>
                            <option>Germany</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <select className="select text-base input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white dim Alliance disabled" required {...register("country")}>
                            <option disabled selected>Country</option>
                            <option>France</option>
                            <option>England</option>
                            <option>Italy</option>
                            <option>Germany</option>
                        </select>
                    </div>
                    <h3 className='dim col-span-3'>Run details</h3>
                    <div className="form-control">
                        <input type="number" {...register("distance")} placeholder="Distance" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance disabled" required />
                    </div>
                    <div className="form-control">
                        <input type="text" {...register("startingPoint")} placeholder="Starting Point" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance disabled" required />
                    </div>
                    <div className="form-control">
                        <input type="text" {...register("endingPoint")} placeholder="Ending Point" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance disabled" required />
                    </div>
                </div>
                <div className="form-control">
                    <input type='submit' className='mt-6 w-full text-white text-sm bg-[#3D3D3D] p-2 rounded-md Alliance uppercase btn-color' value={'ADD A RUN'} />
                </div>
            </form>
        </div>
    );
};

export default DashBoard;