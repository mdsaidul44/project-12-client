import { FaEnvelope, FaHome, FaSearch, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { BsSendCheckFill } from "react-icons/bs";
import useUser from "../Hooks/useUser"; 
import useAdmin from "../Hooks/useAdmin";
import { MdOutlineManageSearch } from "react-icons/md";  
import useVolunteer from "../Hooks/useVolunteer"; 



const Dashboard = () => {
    const { user } = useAuth() 
    const [users] = useUser()  
    const item = users.find(data => data) 
    const [isAdmin] = useAdmin()  
    const [isVolunteer]= useVolunteer() 


     

    return (
        <div className="lg:flex">
            <div className="lg:w-64 min-h-screen bg-gray-300">
                <ul className="menu text-black">
                    <div className="avatar ">
                        <div className="w-24 rounded-full ring mx-auto my-4 ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL || 'https://i.ibb.co/DppxTgs/52d5d97dd7dd3125df4d7b45d55f2ce3.jpg'} />
                        </div>
                    </div>
                    <div className="text-center font-bold mb-4">
                        <span>Welcome </span>
                        {
                            item?.name ? user?.displayName : 'Back'
                        }
                    </div>



                    {isAdmin  ?
                        <>
                            <li><NavLink to='/dashboard/adminhome'><FaHome />ADMIN HOME </NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers />ALL USERS</NavLink></li>
                            <li><NavLink to='/dashboard/allrequest'><BsSendCheckFill />ALL REQUEST</NavLink></li>  
                            <li><NavLink to='/dashboard/contentmanage'><MdOutlineManageSearch />CONTENT MANAGEMENT</NavLink></li>
                        </>
                        : isVolunteer  ?
                            <>
                                <li><NavLink to='/dashboard/volunteerhome'><FaHome />VOLUNTEER HOME </NavLink></li>
                                <li><NavLink to='/dashboard/sentrequest'><BsFillRocketTakeoffFill />Sent Request</NavLink></li>
                                <li><NavLink to='/dashboard/myrequest'><BsSendCheckFill />My Request</NavLink></li>
                            </>
                            : user &&
                            <>
                                <li><NavLink to='/dashboard/homepage'><FaHome />HOME PAGE</NavLink></li>
                                <li><NavLink to='/dashboard/sentrequest'><BsFillRocketTakeoffFill />Sent Request</NavLink></li>
                                <li><NavLink to='/dashboard/myrequest'><BsSendCheckFill />My Request</NavLink></li>
                            </>
                    }

                    {/* shared nav link */}
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome />HOME</NavLink></li>
                    <li><NavLink to='/alldonation'><BsSendCheckFill />DONOR REQUEST</NavLink></li>
                    <li><NavLink to='/dashboard/contact'><FaEnvelope />CONTACT</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;