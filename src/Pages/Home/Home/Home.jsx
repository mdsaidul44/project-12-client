import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import SearchSection from "../SearchSection/SearchSection";
import Slider from "../Slider/Slider"; 


const Home = () => {
    useEffect(()=>{
        document.title  = "Home | Home"
    },[])
    return (
        <div>
            <div><Slider/></div> 
            <div><Banner/></div>
            <div className="my-20"><Contact/></div>
        </div>

    );
};

export default Home;