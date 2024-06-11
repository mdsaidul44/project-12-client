import React, { useEffect, useState } from 'react';
import { BiDonateBlood } from 'react-icons/bi';
import { HiCurrencyDollar } from 'react-icons/hi';
import { VscGitPullRequestGoToChanges } from 'react-icons/vsc';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useUser from '../../Hooks/useUser';
import { FaAngleRight } from 'react-icons/fa';

const VolunteerHome = () => {

    const { user } = useAuth()
    const [users] = useUser()
    console.log(users)
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
        <div>
            <div className='bg-slate-600 p-4 rounded-lg text-black'>
            <div className='lg:flex justify-between bg-slate-800 rounded-lg p-4 mb-10'>
                <div className='shadow-black shadow-2xl p-4'>
                    <h1 className='text-slate-100   font-bold'>Volunteer / Dashboard</h1>
                    <p className='flex gap-2 font-semibold  text-slate-400'>Home <FaAngleRight className='mt-1.5' /> Dashboard</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold text-stone-400 uppercase p-4 shadow-black shadow-2xl text-center'>Welcome {user?.displayName ? user?.displayName : 'Back'}</h1>
                </div>
            </div>
            <div className='divider'></div>
            <div>
                <div className="lg:stats shadow-black shadow-2xl  sm:stats  "> 
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
        </div>
    );
};

export default VolunteerHome;