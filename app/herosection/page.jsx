import React from "react";

const Herosection = () => {
  return (
    <div>
      <section class="body-font bg-black">
        <div class="container w-[80%] mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-[72%] lg:pr-24 md:pr-16 flex flex-wrap flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:w-[100%]">
            <p className="text-emerald-500">Creative Agency</p>
            <h1 class="title-font font-medium w-[80%] mt-2 text-6xl text-white">
              WE ARE <span className="text-emerald-500 ">CREATIVE</span>
              <br />
              DESIGN AGENCY
            </h1>
            <hr className="h-1 w-16 bg-emerald-500 text-emerald-500 mt-2" />
            <p class="leading-relaxed w-[80%] mt-4 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              cum dignissimos, vitae provident quisquam minus voluptates sit,
              enim ipsam sunt nihil explicabo odit quidem quia!
            </p>
            <div className="flex items-center">
              <button class="button bg-emerald-500">
                <svg
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  width="26px"
                >
                  <path
                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <div className="mt-3 ml-3">
                <span className="text-emerald-500 leading-3">About Us</span>
                <p className="text-white">Pranada Studio</p>
              </div>
            </div>
          </div>
          <div class="lg:max-w-md lg:w-[100%] md:w-[100%] ">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://www.shutterstock.com/image-photo/vogue-style-closeup-portrait-beautiful-260nw-292324757.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
