import { FaCheck, FaPen } from 'react-icons/fa';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import useAuth from '../../Hooks/useAuth';
import generateRandomUsername from '../../Utilities/userName';
import axios from 'axios';

const UserInfo = () => {
    const { user } = useAuth()
    const name = user?.displayName;
    const email = user?.email;
    const surName = user?.displayName.split(' ')[1];
    const userName = generateRandomUsername(7);

    const updateInformation = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const surName = event.target.surName.value;
        const userName = event.target.nickname.value;
        const region = event.target.region.value;
        axios.put(`http://localhost:5000/users/${user?.uid}`, { email, name, surName, userName, region })
            .then(data => {
                if (data.data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        background: '#1F1F1F',
                        color: 'white',
                        icon: "success",
                        title: "Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className='px-4'>
            <h3 className='text-3xl mt-12 text-white font-bold Alliance pt-1'>User Information</h3>
            <p className='text-[#A5A5A5] Alliance mt-2'>Here you can enter or edit public information about yourself. The changes you make will be displayed immediately after saving</p>
            <form onSubmit={() => updateInformation(event)}>
                <div className='grid grid-cols-3 mt-6 gap-x-3 gap-y-5 form-control'>
                    <div className="form-control relative">
                        <label className="label items-center justify-normal bg-[#1F1F1F] w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                            <span className="label-text text-[#666]   text-sm font-bold py-0">NAME</span>
                            <span><FaCheck size={'0.85rem'} color='#2A7029' /></span>
                        </label>
                        <input type="text" name='name' placeholder="Emmma" defaultValue={name} className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label items-center justify-normal bg-[#1F1F1F] w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                            <span className="label-text text-[#666]   text-sm font-bold py-0">SURNAME</span>
                            <span><FaCheck size={'0.85rem'} color='#2A7029' /></span>
                        </label>
                        <input type="text" name='surName' defaultValue={surName} placeholder="Schmidt" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label items-center justify-normal bg-[#1F1F1F] w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                            <span className="label-text text-[#666]   text-sm font-bold py-0">NICKNAME</span>
                            <span><FaCheck size={'0.85rem'} color='#2A7029' /></span>
                        </label>
                        <input type="text" name='nickname' defaultValue={userName} placeholder="emmma_s" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label items-center justify-normal bg-[#1F1F1F] w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                            <span className="label-text text-[#666]   text-sm font-bold py-0">EMAIL</span>
                            <span><FaCheck size={'0.85rem'} color='#2A7029' /></span>
                        </label>
                        <input type="email" name='email' defaultValue={email} placeholder="emmma_s@email.com" className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label items-center justify-normal bg-[#1F1F1F] w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                            <span className="label-text text-[#666] text-sm font-bold py-0">COUNTRY/REGION</span>
                            <span><FaCheck size={'0.85rem'} color='#2A7029' /></span>
                        </label>
                        <select className="select text-base input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance" required name='region'>
                            <option disabled selected>Country/Region</option>
                            <option>France</option>
                            <option>England</option>
                            <option>Italy</option>
                            <option>Germany</option>
                        </select>
                    </div>
                </div>
                <div className="form-control">
                    <button className='mt-6 ms-auto flex items-center gap-2 text-white text-sm bg-[#3D3D3D] p-2 w-fit rounded-md Alliance'><span>EDIT INFORMATION</span> <FaPen /></button>
                </div>
            </form>
        </div>
    );
};

export default UserInfo;