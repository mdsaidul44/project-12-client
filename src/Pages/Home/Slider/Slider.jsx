import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div>
            <Carousel className="text-center">
                <div className="h-[650px]">
                    <img className="h-full" src="https://i.ibb.co/NTFGZF3/9727715-26842.jpg" />
                </div>
                <div className="h-[650px]">
                    <img className="h-full" src="https://i.ibb.co/7RSC9gP/1000-F-305868293-Yprj4a-HIGhlxkaw-Hovb-UE7y-K4-My-J1-LXP.jpg" />
                </div>
                <div className="h-[650px]">
                    <img className="h-full" src="https://i.ibb.co/CHY9qnp/33759472-8082582.jpg" />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;


