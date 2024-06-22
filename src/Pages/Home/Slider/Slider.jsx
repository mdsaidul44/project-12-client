import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div>
            <Carousel className="text-center">
                <div className="h-[550px]">
                    <img className="h-full" src="https://i.ibb.co/MkRwKgv/27577819-ravi24-may-8.jpg" />
                </div>
                <div className="h-[550px]">
                    <img className="h-full" src="https://i.ibb.co/3YjxT5H/33759472-8082582.jpg" />
                </div>
                <div className="h-[550px]">
                    <img className="h-full" src="https://i.ibb.co/fkm29v5/18300609-5969415.jpg" />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;


