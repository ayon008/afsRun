import React from 'react';

const RunTable = () => {
    return (
        <div className="overflow-auto">
            <table className="table text-[#A5A5A5]">
                {/* head */}
                <thead>
                    <tr className='text-[#A5A5A5] Alliance text-sm border-b-0'>
                        <th className='ps-0'>Runs Name</th>
                        <th>Ranking Position</th>
                        <th>Avg speed</th>
                        <th className='text-right'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className='text-[#666] Alliance text-sm border-b-0'>
                        <td className='ps-0 py-1'>Cy Ganderton</td>
                        <td className='py-1'>Quality Control Specialist</td>
                        <td className='py-1'>Blue</td>
                        <td className='text-right py-1'>11/02/2024</td>
                    </tr>
                    {/* row 1 */}
                    <tr className='text-[#666] Alliance text-sm border-b-0'>
                        <td className='ps-0 py-1'>Cy Ganderton</td>
                        <td className='py-1'>Quality Control Specialist</td>
                        <td className='py-1'>Blue</td>
                        <td className='text-right py-1'>11/02/2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RunTable;