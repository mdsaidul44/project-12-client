import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {
    // const [isAdmin] = true
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-gray-300">
                <ul className="menu text-black">

                    <li><NavLink to='/dashboard/donorHome'><FaHome />Donor HOME</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar />RESERVATION</NavLink></li>
                    <li><NavLink to='/dashboard/paymentHistory'><FaAd />PAYMENT HISTORY</NavLink></li>
                    <li><NavLink to='/dashboard/cart'><FaShoppingCart />MY CART  </NavLink></li>
                    <li><NavLink to='/dashboard/review'><FaMessage /> ADD REVIEW</NavLink></li>
                    <li><NavLink to='/dashboard/booking'><FaList />MY BOOKING</NavLink></li>

                    {/* {role === "a" ?
                        <></>
                        : role === "b" ?
                            <></>
                            : role === "c" &&
                            <></>
                    } */}

                    {/* shared nav link */}
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome />HOME</NavLink></li>
                    <li><NavLink to='/order/salad'><FaSearch />MENU</NavLink></li>
                    <li><NavLink to='/order/contact'><FaEnvelope />CONTACT</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                    <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;