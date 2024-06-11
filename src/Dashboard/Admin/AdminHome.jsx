import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth'; 
import { FaAngleRight } from 'react-icons/fa';
import useUser from '../../Hooks/useUser'; 
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { BiDonateBlood } from 'react-icons/bi';
import { VscGitPullRequestGoToChanges } from 'react-icons/vsc';
import { HiCurrencyDollar } from 'react-icons/hi';

const AdminHome = () => {
    const { user } = useAuth()
    const [users] = useUser()
    const axiosPublic = useAxiosPublic()
    const [requests, setRequests] = useState([])

    useEffect(() => {
        axiosPublic.get('/request')
            .then(res => {
                // console.log(res.data)
                setRequests(res.data)
            })
    }, [])
    return (
        <div className='bg-slate-50 p-4 rounded-lg text-black'>
            <div className='lg:flex justify-between'>
                <div>
                    <h1 className='text-stone-800 font-bold'>Dashboard</h1>
                    <p className='flex gap-2 font-semibold'>Home <FaAngleRight className='mt-1.5' /> Dashboard</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold text-stone-800 uppercase p-4 text-center'>Welcome {user?.displayName ? user?.displayName : 'Back'}</h1>
                </div>
            </div>
            <div className='divider'></div>
            <div>
                <div className="lg:stats sm:stats shadow "> 
                    <div className="stat">
                        <div className="stat-figure text-2xl text-red-600">
                            <BiDonateBlood /> 
                        </div>
                        <div className="lg:stat-title ">Total Donors</div>
                        <div className="stat-value">{users.length}</div>
                        <div className="lg:stat-desc">Jan 1st - Feb 1st</div>
                    </div> 
                    <div className="stat">
                        <div className="stat-figure text-2xl text-red-600">
                        <VscGitPullRequestGoToChanges/>
                        </div>
                        <div className="lg:stat-title">Total Donor Requests</div>
                        <div className="stat-value">{requests.length}</div>
                        <div className="lg:stat-desc">↗︎ 400 (22%)</div>
                    </div> 
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <HiCurrencyDollar/>
                        </div>
                        <div className="lg:stat-title">Total Amount</div>
                        <div className="stat-value">1,200</div>
                        <div className="lg:stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminHome;