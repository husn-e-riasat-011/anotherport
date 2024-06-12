import React from "react";

const OurServices = () => {
  return (
    <div>
      <section class="bg-black body-font">
        <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center w-[80%]">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div class="flex flex-col w-full md:justify-start ">
              <p className="text-emerald-500">OUR SEARVICES</p>
              <h1 class="title-font font-medium mt-2 text-6xl text-white">
                What we <span className="text-emerald-500 ">Do.</span>
              </h1>
              <hr className="h-1 w-16 bg-emerald-500 text-emerald-500 mt-2" />
              <p class="leading-relaxed w-[80%] mt-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus cum dignissimos, vitae provident quisquam minus
              </p>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://img.freepik.com/premium-photo/beautiful-girl-listening-music_391052-812.jpg?size=626&ext=jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
