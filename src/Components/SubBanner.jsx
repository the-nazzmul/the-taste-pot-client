const SubBanner = () => {
  return (
    <div className="text-center sub-bg relative">
        <div className="bg-black absolute opacity-60 w-full h-full"></div>
      <div className="flex flex-col items-center justify-center p-20 absolute w-full h-full z-20 text-white">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Age specific courses
        </h1>
        <p className="my-4 lg:my-12 lg:w-3/4 mx-auto">In Taste Pot, we acknowledge that learning ability depends on age many times. So we are offering age specific cooking courses to provide optimal learning environment to the students.</p>
        <button className="btn custom-btn">Check Courses</button>
      </div>
    </div>
  );
};

export default SubBanner;
