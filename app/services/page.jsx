import React from "react";
import Image from "next/image";
import icon1 from "../../public/icon1.svg";
import icon2 from "../../public/icon2.svg";
const Services = () => {
  return (
    <section class="text-white body-font overflow-hidden bg-black">
      <div class="px-5 py-24 mx-auto w-[80%] md:w-[80%]">
        <div class="flex flex-wrap -m-12">
          <div class="p-10 flex flex-wrap flex-col items-start w-full md:w-1/2">
            <p class="text-emerald-500">OUR SERVICES</p>
            <h1 class="title-font font-medium mt-2 text-4xl md:text-5xl lg:text-6xl text-white">
              What we <span class="text-emerald-500">Do.</span>
            </h1>
            <hr class="h-1 w-16 bg-emerald-500 text-emerald-500 mt-2" />
            <p class="leading-relaxed w-full md:w-[100%] lg:w-3/4 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              cum dignissimos, vitae provident quisquam minus
            </p>
            <p class="leading-relaxed w-full md:w-3/4 lg:w-1/2 mt-4">
              voluptates sit, enim ipsam sunt nihil explicabo odit quidem quia!
            </p>
            <button class="button2 mt-4 ml-[-3px]">
              <p>View All</p>
            </button>
          </div>
          <div class="flex gap-4 justify-center w-full md:w-1/2 p-2 wraping">
            <div>
              <div class="w-50 p-5 mb-2 flex flex-col items-center text-center bg-black">
                <Image
                  src={icon1}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <h1 class="font-bold mt-2">Brand Identity</h1>
                <p class="font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div class="w-50 p-5 mb-2 flex flex-col items-center text-center bg-gradient-to-r from-black to-emerald-500 ">
                <Image
                  src={icon2}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <h1 class="font-bold mt-2">UI & UX Design</h1>
                <p class="font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div>
              <div class="w-50 p-5 mb-2 flex flex-col items-center text-center bg-gradient-to-r from-emerald-500 to-black  mt-4 md:mt-8">
                <Image
                  src={icon2}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <h1 class="font-bold mt-2">Website Design</h1>
                <p class="font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div class="w-50 p-5 mb-2 flex flex-col items-center text-center bg-black">
                <Image
                  src={icon1}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <h1 class="font-bold mt-2">Video Marketing</h1>
                <p class="font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
