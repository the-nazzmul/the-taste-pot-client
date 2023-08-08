import img from "./../../../assets/Event.jpeg";

import TopSecForSmall from "./TopSecForSmall";
import TopSection from "./TopSection";

const Events = () => {
  return (
    <>
      <div className="my-12 text-center">
        <h1 className="text-5xl font-bold">Our Events</h1>
        <p className="w-3/4 mx-auto my-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          quas numquam a alias itaque dolore ab neque ipsa est, dicta enim,
          ipsum culpa obcaecati eos eaque? Corrupti maxime, suscipit veritatis,
          nostrum velit voluptatibus quis accusantium repudiandae, possimus
          eaque vero facilis autem odio in explicabo amet. Laborum excepturi
          fugiat eaque laboriosam.
        </p>
      </div>

      {/* top section */}
      <div className="my-2 hidden md:block">
        <TopSection></TopSection>
      </div>
      <div className="md:hidden">
        <TopSecForSmall></TopSecForSmall>
      </div>

      {/* bottom section */}
      <div className="grid grid-cols-1 lg:gap-0 xl:grid-cols-2">
        {/* left side */}
        <div>
          <img src={img} alt="event photo" />
        </div>

        {/* right side */}
        <div className="  flex items-center">
          <div className="pl-12 xl:pl-32 my-12">
            <h1 className="text-4xl font-bold 2xl:w-1/2 mb-6">
              The Future of Cooking
            </h1>
            <p className="xl:w-3/4 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <button className="btn custom-bg border-0 rounded-[50px] text-white hover:text-black hover:scale-110">
              Registration
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
