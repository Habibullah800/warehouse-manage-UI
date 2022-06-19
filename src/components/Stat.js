import React from 'react';

const Stat = () => {
    return (
        <div>
            <h2 className='font-semibold text-4xl text-[#4cd137] mb-8'>Application Analysis</h2>
            <div class="stats stats-vertical lg:stats-horizontal shadow h-[480px] lg:h-[150px] ">
                <div class="stat w-[330px] ">
                    <div class="stat-title">Paid Download</div>
                    <div class="stat-value text-[#4cd137]">31K</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>
                <div class="stat w-[330px]">
                    <div class="stat-title">New Users</div>
                    <div class="stat-value text-[#4cd137]">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>
                <div class="stat w-[330px]">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value text-[#4cd137]">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default Stat;