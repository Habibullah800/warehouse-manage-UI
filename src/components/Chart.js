import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const areaChartData = [
        {
            "name": "Page A",
            "uv": 400,
            "pv": 240,
            "amt": 240
        },
        {
            "name": "Page B",
            "uv": 300,
            "pv": 139,
            "amt": 221
        },
        {
            "name": "Page C",
            "uv": 200,
            "pv": 980,
            "amt": 229
        },
        {
            "name": "Page D",
            "uv": 278,
            "pv": 390,
            "amt": 200
        },
        {
            "name": "Page E",
            "uv": 189,
            "pv": 480,
            "amt": 218
        },
        {
            "name": "Page F",
            "uv": 239,
            "pv": 380,
            "amt": 250
        },
        {
            "name": "Page G",
            "uv": 349,
            "pv": 430,
            "amt": 210
        }
    ]

    const barChartData = [
        {
            "name": "Page A",
            "uv": 400,
            "pv": 240
        },
        {
            "name": "Page B",
            "uv": 300,
            "pv": 139
        },
        {
            "name": "Page C",
            "uv": 200,
            "pv": 980
        },
        {
            "name": "Page D",
            "uv": 278,
            "pv": 390
        },
        {
            "name": "Page E",
            "uv": 189,
            "pv": 480
        },
        {
            "name": "Page F",
            "uv": 239,
            "pv": 380
        },
        {
            "name": "Page G",
            "uv": 349,
            "pv": 430
        }
    ]
    return (
        <div className='my-9'>
            <h2 className='font-semibold text-4xl text-[#4cd137] mb-8'>Total Statistics</h2>
            <div className='grid grid-cols-1 px-5 lg:grid-cols-2 gap-4 justify-around '>

                <div class="card flex-1 pt-4  m-0 lg:m-4 h-100 card-compact w-[100%] bg-base-100 shadow-xl">
                    <h2 className='font-semibold text-2xl mb-4 text-[#192a56]'>Sales Vs Stock</h2>
                    <BarChart width={570} height={370} data={barChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div class="card flex-1  pt-4 m-0 lg:m-4  h-100 card-compact w-[100%] bg-base-100 shadow-xl">
                    <h2 className='font-semibold text-2xl mb-4 text-[#192a56]'>Revenue Vs Cost</h2>

                    <AreaChart width={570} height={370} data={areaChartData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Chart;