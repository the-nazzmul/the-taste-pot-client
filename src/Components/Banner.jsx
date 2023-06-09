import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from './../assets/Banner/Banner1.jpg'
import banner2 from './../assets/Banner/Banner2.jpg'
import banner3 from './../assets/Banner/Banner3.jpg'
import banner4 from './../assets/Banner/Banner4.jpg'
import banner5 from './../assets/Banner/Banner5.jpg'
import banner6 from './../assets/Banner/Banner6.jpg'

const Banner = () => {
    return (
        <div className="pt-20">
            <Carousel >
                <div>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner2} />
                </div>
                <div>
                    <img src={banner3} />
                </div>
                <div>
                    <img src={banner4} />
                </div>
                <div>
                    <img src={banner5} />
                </div>
                <div>
                    <img src={banner6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;