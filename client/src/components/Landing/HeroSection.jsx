import { Link } from 'react-router-dom';
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Virtual build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for job hunters
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started tod½ay and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center mt-10 gap-10">
        <div className="relative inline-flex  group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-red-800 via-yellow-600 to-red-800 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
          </div>
          <Link to='/register' title="Get quote now"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button">Register
          </Link>
        </div>
        <Link to='/login' className="group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center 
          bg-transparent text-red-500 h-auto w-[170px] overflow-hidden transition-all duration-100"
        >
          <span className="group-hover:w-full absolute left-0 h-full w-5 border-y border-l border-red-500 transition-all duration-500">
          </span>
          <p className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all duration-200">
            Login / Demo
          </p>

          <span className="group-hover:translate-x-0 group-hover:opacity-100 absolute translate-x-full opacity-0 transition-all duration-200">
            On your way
          </span>
          <span
              className="group-hover:w-full absolute right-0 h-full w-5 border-y border-r border-red-500 transition-all duration-500">
          </span>
        </Link>      
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
