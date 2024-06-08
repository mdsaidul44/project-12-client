import { Link } from 'react-router-dom';
import bloodWave from '../../assets/bloodWave.jpg'
import useAuth from '../../Hooks/useAuth';
import { LuLogOut } from "react-icons/lu"; 
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useEffect } from 'react';

const Navbar = () => {
    const { user, logOut } = useAuth() 
    const axiosPublic = useAxiosPublic()
      

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(console.error(error))
    }
    const Navlink = <>
        <Link to='/Alldonation'><li><a>donation requests</a></li></Link>
        <Link to='/blog'><li><a>Blog</a></li></Link>
        {/* <Link to='/dashboard'><li><a>Dashboard</a></li></Link> */}
    </>
    return (
        <div>
            <div className="navbar fixed z-50 lg:w-[1439px] bg-base-300 text-lime-100 font-bold bg-opacity-40  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navlink}
                        </ul>
                    </div>
                    <Link to='/'><a className="btn btn-ghost text-3xl"><img className='w-12 rounded' src={bloodWave} alt="" /><span className="text-red-600 font-bold">Blood</span><span className="text-black font-bold">Wave</span></a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navlink}
                    </ul>
                </div>
                <div className="navbar-end">

                    {user ? <> <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={ user?.photoURL || 'https://i.ibb.co/DppxTgs/52d5d97dd7dd3125df4d7b45d55f2ce3.jpg'} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <div className="avatar ">
                                <div className="w-16 rounded-full ring mx-auto my-4 ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={  user?.photoURL || 'https://i.ibb.co/DppxTgs/52d5d97dd7dd3125df4d7b45d55f2ce3.jpg'} />
                                </div>
                            </div>
                            <div className="text-center font-bold mb-4">
                                <span>Welcome </span>
                                {
                                    user?.displayName ? user?.displayName : 'Back'
                                }
                            </div>
                            <Link to='/'><li><a>Home</a></li></Link>
                            <Link to='/dashboard/homepage'><li><a>Dashboard</a></li></Link>
                            <Link><li onClick={handleLogout}><a className='text-red-500'>Logout<LuLogOut className='mt-1'/></a></li></Link>
                        </ul>
                    </div></> : <Link to='/login'><a className="btn">Login</a></Link>}
                </div>
            </div>

        </div>
    );
};

export default Navbar;