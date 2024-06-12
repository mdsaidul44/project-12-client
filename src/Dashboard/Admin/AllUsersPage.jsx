import { FaAngleRight } from 'react-icons/fa';
import useUser from '../../Hooks/useUser';
import { GrUserAdmin } from "react-icons/gr";
import { MdVolunteerActivism } from "react-icons/md";
import { MdAutoDelete } from "react-icons/md";
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useEffect } from 'react';


const AllUsersPage = () => {
    const axiosSecure = useAxiosSecure()
    const [users, loading, refetch] = useUser()
    // console.log(users)
    useEffect(()=>{
        document.title  = "Dashboard | AllUsers"

    })

    // user status block 
    const handleBlockUser = async (data) => {

        const userBlock = {
            status: 'Block'
        }
        await axiosSecure.patch(`/user/${data._id}`, userBlock)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    // show success popup 
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'User Block Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    // user unblock toggle
    const handleUnBlockUser = async (data) => {

        const userBlock = {
            status: 'active'
        }
        await axiosSecure.patch(`/user/${data._id}`, userBlock)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    // show success popup 
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'User UnBlock Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    // make admin toggle
    const handleMakeAdmin = (users) => {
        axiosSecure.patch(`/users/admin/${users._id}`)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${users.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // Make volunteer toggle
    const handleMakeVolunteer = (users) => {
        axiosSecure.patch(`/users/volunteer/${users._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${users.name} is an volunteer now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // user delete toggle
    const handleDeleteUser = (users) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${users._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <div className='p-4 bg-gray-900 rounded-lg '>
            <div className='flex justify-between shadow-lg shadow-black bg-slate-800 p-4 rounded-lg'>
                <div className='shadow-lg shadow-slate-500 p-2'>
                    <h1 className='text-stone-400 font-bold'>Admin / Dashboard</h1>
                    <p className='flex gap-2 font-semibold'>Home <FaAngleRight className='mt-1.5' /> Dashboard</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold shadow-lg shadow-slate-500 text-stone-400 uppercase p-4 text-center'> All User: {users.length}</h1>
                </div>
            </div>
            <div className='divider'></div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Menu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                    </div>
                                </td>
                                <td>{item.email}</td>
                                <td>{item.role || 'user'}</td>
                                <td>
                                    <button className='btn-sm'>{item.status || 'Active'}</button>
                                </td>
                                <th>
                                    <div className="dropdown dropdown-bottom">
                                        <div tabIndex={0} role="button" className="btn m-1">More</div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24">
                                            <li><a> {
                                                item.role === 'admin' ? 'admin' :
                                                    <button onClick={() => handleMakeAdmin(item)} className="">< GrUserAdmin className='text-red-600 text-xl' /></button>
                                            }</a></li>
                                            <li><a> {
                                                item.role === 'volunteer' ? 'volunteer' :
                                                    <button onClick={() => handleMakeVolunteer(item)} className="">< MdVolunteerActivism className='text-red-600 text-xl' /></button>
                                            }</a></li>
                                            <li><a>
                                                <button onClick={() => handleDeleteUser(item)} className=""><MdAutoDelete className='text-red-600 text-xl' /></button>
                                            </a></li> <li><a>
                                                <button onClick={() => handleBlockUser(item)} className="">Block</button>
                                            </a></li> <li><a>
                                                <button onClick={() => handleUnBlockUser(item)} className="">UnBlock</button>
                                            </a></li>
                                        </ul>
                                    </div>
                                </th>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsersPage;