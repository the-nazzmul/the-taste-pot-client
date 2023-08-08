import 'aos/dist/aos.css'
import Aos from "aos";
import { useEffect } from "react";


const LatestBlogs = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div data-aos="fade-up"  className='mt-20'>
            <h1 className="my-12 text-center font-bold text-5xl">Latest Blogs!</h1>
            <p className="mb-12 text-center w-1/2 mx-auto ">Check out our latest blog.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptate commodi tempora facilis magnam neque omnis ratione amet reiciendis dolorum?</p>

            <div className="grid lg:grid-cols-3 gap-4 mx-auto my-12">
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/head-chef-adding-fresh-chopped-green-herbs-pan-while-cooking-gourmet-dish-restaurant-professional-kitchen-food-industry-workers-preparing-delicious-meal-using-organic-vegetables_482257-40135.jpg?w=1800&t=st=1686753249~exp=1686753849~hmac=90b8f517a509352834dbabaa072e1b546f42386296d824cbc6652a17afb7db61" alt="cooks" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-4">
                            <p><span className="font-bold">By:</span> Jhankar Mahbub</p>
                            <p><span className="font-bold">Date:</span> 12/03/23</p>
                        </div>

                        <h2 className="card-title text-left">Importance of Proper Seasoning!</h2>
                        <div className="card-actions mt-8">
                            <button className="custom-btn">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/close-up-chef-cooking-restaurant-kitchen_329181-16136.jpg?w=1800&t=st=1686753307~exp=1686753907~hmac=8c4caff36a2bcf0db1b71fecc2257e664076053086c9b7c1082d7af11ac0e5cd" alt="chef" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-4">
                            <p><span className="font-bold">By:</span> Gias Uddin</p>
                            <p><span className="font-bold">Date:</span> 12/03/22</p>
                        </div>

                        <h2 className="card-title text-left">Mystery of spices..</h2>
                        <div className="card-actions mt-8">
                            <button className="custom-btn">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/side-view-mix-sushi-rolls-tray-with-ginger-wasabi_141793-14242.jpg?w=1800&t=st=1686753373~exp=1686753973~hmac=7a50496c82b181e53580dbccaf30ecd84e7a71c29d31b660443bc6ee06ab824f" alt="sushi" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-4">
                            <p><span className="font-bold">By:</span> Gopal Bhar</p>
                            <p><span className="font-bold">Date:</span> 12/03/21</p>
                        </div>

                        <h2 className="card-title text-left">Mastering the art of Sushi!</h2>
                        <div className="card-actions mt-8">
                            <button className="custom-btn">Read More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LatestBlogs;