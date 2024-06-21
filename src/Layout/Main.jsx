import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer"; 
import Navbar from "../Pages/Navbar/Navbar";



const Main = () => {
    const location = useLocation()
    // console.log(location)

    const noNavbarFooter = location.pathname.includes('login') || location.pathname.includes('registration')
    return (
        <div className="overflow-hidden ">
            <div  >
               { noNavbarFooter || <Navbar />}
            </div>
            <div className="mb-8">
                <Outlet/>
            </div>
            {noNavbarFooter || <Footer />}

        </div>
    );
};

export default Main;