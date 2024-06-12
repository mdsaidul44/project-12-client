import { FaEnvelope, FaHome, FaSearch, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { BsSendCheckFill } from "react-icons/bs";
import useUser from "../Hooks/useUser"; 
import useAdmin from "../Hooks/useAdmin";
import { MdOutlineManageSearch } from "react-icons/md";  
import useVolunteer from "../Hooks/useVolunteer"; 
import { BiSolidContact } from "react-icons/bi";
import { SiAwssecretsmanager } from "react-icons/si";



const Dashboard = () => {
    const { user } = useAuth() 
    const [users] = useUser()  
    const item = users.find(data => data) 
    const [isAdmin] = useAdmin()  
    const [isVolunteer]= useVolunteer() 


     

    return (
        <div className="lg:flex">
            <div className="lg:w-64 min-h-screen bg-gray-400">
                <ul className="menu text-black">
                    <div className="avatar ">
                        <div className="w-24 rounded-full ring mx-auto my-4 ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL || 'https://i.ibb.co/DppxTgs/52d5d97dd7dd3125df4d7b45d55f2ce3.jpg'} />
                        </div>
                    </div>
                    <div className="text-center shadow-lg p-4 rounded-lg shadow-gray-700 font-bold mb-4">
                        <span className="text-xl">Welcome </span>
                        {
                            item?.name ? user?.displayName : 'Back'
                        }
                    </div>



                    {isAdmin  ?
                        <>
                            <li className="font-bold shadow-lg hover:shadow-black mt-4 mb-2 rounded-lg"><NavLink to='/dashboard/adminhome'><FaHome />ADMIN HOME </NavLink></li>
                            <li className="font-bold shadow-lg hover:shadow-black mb-2 rounded-lg"><NavLink to='/dashboard/allusers'><FaUsers />ALL USERS</NavLink></li>
                            <li className="font-bold shadow-lg hover:shadow-black mb-2 rounded-lg"><NavLink to='/dashboard/allrequest'><BsSendCheckFill />ALL REQUEST</NavLink></li>  
                            <li className="font-bold shadow-lg hover:shadow-black mb-2 rounded-lg"><NavLink to='/dashboard/contentmanage'><MdOutlineManageSearch />CONTENT MANAGEMENT</NavLink></li>
                        </>
                        : isVolunteer  ?
                            <>
                                <li className="font-bold shadow-lg hover:shadow-black mt-4 mb-2 rounded-lg"><NavLink to='/dashboard/volunteerhome'><FaHome />VOLUNTEER HOME </NavLink></li>
                                <li className="font-bold shadow-lg mb-2 hover:shadow-black rounded-lg"><NavLink to='/dashboard/alldonor'><BsFillRocketTakeoffFill />ALL DONOR REQUEST</NavLink></li>
                                <li className="font-bold mb-2 rounded-lg shadow-lg hover:shadow-black"><NavLink to='/dashboard/volunteerManage'><SiAwssecretsmanager />CONTENT MANAGEMENT</NavLink></li>
                            </>
                            : user &&
                            <>
                                <li className="shadow-lg hover:shadow-black font-bold rounded-lg mb-2"><NavLink to='/dashboard/homepage'><FaHome />HOME PAGE</NavLink></li>
                                <li className="shadow-lg hover:shadow-black mb-2 font-bold rounded-lg"><NavLink to='/dashboard/sentrequest'><BsFillRocketTakeoffFill />Sent Request</NavLink></li>
                                <li className="shadow-lg hover:shadow-black font-bold rounded-lg"><NavLink to='/dashboard/myrequest'><BsSendCheckFill />My Request</NavLink></li>
                            </>
                    }

                    {/* shared nav link */}
                    <div className="divider"></div>
                    <li className="shadow-lg hover:shadow-black mb-2 font-bold rounded-lg"><NavLink to='/'><FaHome />HOME</NavLink></li>
                    <li className="shadow-lg hover:shadow-black font-bold mb-2 rounded-lg"><NavLink to='/alldonation'><BsSendCheckFill />DONOR REQUEST</NavLink></li>
                    <li className="shadow-lg hover:shadow-black font-bold rounded-lg"><NavLink to='/dashboard/contact'><BiSolidContact />CONTACT</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;