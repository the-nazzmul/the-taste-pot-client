import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from './../assets/Banner/Banner1.jpg'
import banner2 from './../assets/Banner/Banner2.jpg'
import banner3 from './../assets/Banner/Banner3.jpg'
import banner4 from './../assets/Banner/Banner4.jpg'
import banner5 from './../assets/Banner/Banner5.jpg'
import banner6 from './../assets/Banner/Banner6.jpg'
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="pt-20">
            <Carousel >
                <div className="relative">
                    <img src={banner1} />
                    <div className="legend">
                        <h2 className="text-3xl font-bold text-white mx-auto">We believe anyone can cook!</h2>
                        <Link><button className="bg-gradient-to-r from-[#E67907] to-[#EAC41B] border-none rounded-lg btn text-white btn-sm lg:my-4" >Ceck our Courses</button></Link>
                    </div>
                </div>
                <div>
                    <img src={banner2} />
                    <div className="legend">
                        <h2 className="text-3xl font-bold text-white mx-auto">We believe anyone can cook!</h2>
                        <Link><button className="bg-gradient-to-r from-[#E67907] to-[#EAC41B] border-none rounded-lg btn text-white btn-sm lg:my-4" >Ceck our Courses</button></Link>
                    </div>
                </div>
                <div>
                    <img src={banner3} />
                    <div className="legend">
                        <h2 className="text-3xl font-bold text-white mx-auto">We believe anyone can cook!</h2>
                        <Link><button className="bg-gradient-to-r from-[#E67907] to-[#EAC41B] border-none rounded-lg btn text-white btn-sm lg:my-4" >Ceck our Courses</button></Link>
                    </div>
                </div>
                <div>
                    <img src={banner4} />
                    <div className="legend">
                        <h2 className="text-3xl font-bold text-white mx-auto">We believe anyone can cook!</h2>
                        <Link><button className="bg-gradient-to-r from-[#E67907] to-[#EAC41B] border-none rounded-lg btn text-white btn-sm lg:my-4" >Ceck our Courses</button></Link>
                    </div>
                </div>
                <div>
                    <img src={banner5} />
                    <div className="legend">
                        <h2 className="text-3xl font-bold text-white mx-auto">We believe anyone can cook!</h2>
                        <Link><button className="bg-gradient-to-r from-[#E67907] to-[#EAC41B] border-none rounded-lg btn text-white btn-sm lg:my-4" >Ceck our Courses</button></Link>
                    </div>
                </div>
                <div>
                    <img src={banner6} />
                    <div className="legend">
                        <h2 className="text-3xl font-bold text-white mx-auto">We believe anyone can cook!</h2>
                        <Link><button className="bg-gradient-to-r from-[#E67907] to-[#EAC41B] border-none rounded-lg btn text-white btn-sm lg:my-4" >Ceck our Courses</button></Link>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;