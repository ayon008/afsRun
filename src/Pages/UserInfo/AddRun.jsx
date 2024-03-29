import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AddRun = () => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1)
    }

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className='p-5 2xl:space-y-5 lg:space-y-3'>
            <button onClick={() => handleNavigate()} className='dim flex items-center 2xl:text-sm lg:text-xs uppercase'><FaArrowLeft /> <span>Back</span></button>
            <div>
                <h3 className='text-white font-bold 2xl:text-3xl lg:text-2xl'>Adding a runs</h3>
                <p className='dim 2xl:text-lg lg:text-sm'>Select an existing run</p>
            </div>
            <div>
                <select className="select text-base input input-bordered border-2 border-[#666] bg-[#1F1F1F] dim text-white Alliance w-full" required name='region'>
                    <option disabled selected className=''>Choose a Run</option>
                    <option>France</option>
                    <option>England</option>
                    <option>Italy</option>
                    <option>Germany</option>
                </select>
            </div>
            <p className='dim'>or use the following fields to add a new run </p>
            {/* Information form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-3 gap-x-3 2xl:gap-y-5 lg:gap-y-3 form-control'>
                    <h3 className='dim col-span-3'>Information</h3>
                    <div className="form-control">
                        <input {...register("runName")} type="text" placeholder="Run Name" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                    </div>
                    <div className="form-control">
                        <select className="select text-base input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white dim Alliance" required {...register("difficulty")}>
                            <option disabled selected>Difficulty Level</option>
                            <option>France</option>
                            <option>England</option>
                            <option>Italy</option>
                            <option>Germany</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <select className="select text-base input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white dim Alliance" required {...register("country")}>
                            <option disabled selected>Country</option>
                            <option>France</option>
                            <option>England</option>
                            <option>Italy</option>
                            <option>Germany</option>
                        </select>
                    </div>
                    <h3 className='dim col-span-3'>Run details</h3>
                    <div className="form-control">
                        <input type="number" {...register("distance")} placeholder="Distance" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                    </div>
                    <div className="form-control">
                        <input type="text" {...register("startingPoint")} placeholder="Starting Point" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                    </div>
                    <div className="form-control">
                        <input type="text" {...register("endingPoint")} placeholder="Ending Point" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                    </div>
                </div>
                <div className="form-control">
                    <input type='submit' className='mt-6 flex items-center gap-2 text-white text-sm bg-[#3D3D3D] p-2 w-fit rounded-md Alliance uppercase btn-color' value={'ADD A RUN'} />
                </div>
            </form>
        </div>
    );
};

export default AddRun;