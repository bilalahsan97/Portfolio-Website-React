import React from "react";
import CalculatorImg from "../assets/calculator_2.JPG";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-screen bg-[#0a192f] text-gray-300 min-[500px]:pl-[70px]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[rgb(223,162,32)]">
            Work
          </p>
          <p className="py-4">//Check out some of my projects.</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Grid Item  #1*/}
          <div
            style={{ backgroundImage: `url(${CalculatorImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="flex text-center text-2xl font-bold text-white tracking-wider">
                Calculator Application using HTML, CSS & JavaScript
              </span>
              <div className="pt-20 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/bilalahsan97/Calculator-Project"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item  #2*/}
          <div
            style={{ backgroundImage: `url(${CalculatorImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="flex text-center text-2xl font-bold text-white tracking-wider">
                Calculator Application using HTML, CSS & JavaScript
              </span>
              <div className="pt-20 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/bilalahsan97/Calculator-Project"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
