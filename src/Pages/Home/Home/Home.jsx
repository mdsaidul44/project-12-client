import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Slider from "../Slider/Slider"; 

 

const Home = () => {
    return (
        <div>
            <div><Slider/></div>
            <div><Banner/></div>
            <div className="my-20"><Contact/></div>
        </div>

    );
};

export default Home;