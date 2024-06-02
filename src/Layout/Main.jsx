import Footer from "../Pages/Footer/Footer";
import Home from "../Pages/Home/Home/Home";
import Navbar from "../Pages/Navbar/Navbar";



const Main = () => {
    return (
        <div>
            <div  >
                <Navbar />
            </div>
            <div className="mb-8">
                <Home />
            </div>
            <Footer />

        </div>
    );
};

export default Main;