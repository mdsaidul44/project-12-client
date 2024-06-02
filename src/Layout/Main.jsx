import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer"; 
import Navbar from "../Pages/Navbar/Navbar";



const Main = () => {
    return (
        <div>
            <div  >
                <Navbar />
            </div>
            <div className="mb-8">
                <Outlet/>
            </div>
            <Footer />

        </div>
    );
};

export default Main;