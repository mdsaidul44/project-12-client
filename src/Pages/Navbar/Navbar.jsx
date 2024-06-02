import { Link } from 'react-router-dom';
import bloodWave from '../../assets/bloodWave.jpg'

const Navbar = () => {
    const Navlink = <>
        <Link><li><a>donation requests</a></li></Link>
        <Link><li><a>Blog</a></li></Link>
        <li><a>Dashboard</a></li>
    </>
    return (
        <div>
            <div className="navbar fixed z-50 lg:w-[1439px] bg-base-300 text-black font-bold bg-opacity-40  ">
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
                    <Link to='/login'><a className="btn">Login</a></Link>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-slate-300-100 rounded-box w-52">
                        <li><a className="justify-between"> Profile</a></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;