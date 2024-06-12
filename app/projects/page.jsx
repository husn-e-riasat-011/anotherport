import React from "react";
import Image from "next/image";
import icon2 from "../../public/icon2.svg";

const Allprojects = () => {
  return (
    <div>
      <section class=" body-font bg-gradient-to-r from-black to-[#413f3f]">
        <div class=" px-5 py-16 mx-auto w-[80%] ">
          <div class="flex flex-wrap justify-around">
            <div class="lg:w-1/4 md:w-1/2 p-4 flex justify-center items-center flex-col">
              <a class="mt-1 ">
                <Image
                  src={icon2}
                  width={60}
                  height={60}
                  alt="Picture of the author"
                  className="mt-[-29px]"
                />
              </a>
              <div class="mt-4 flex justify-center items-center flex-col">
                <h2 class="text-emerald-500 text-2xl font-bold">
                  150 <span className="text-white">+</span>
                </h2>
                <p class="mt-1 text-white">Project Done</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 flex justify-center items-center flex-col">
              <a class="mt-1 ">
                <Image
                  src={icon2}
                  width={60}
                  height={60}
                  alt="Picture of the author"
                  className="mt-[-29px]"
                />
              </a>
              <div class="mt-4 flex justify-center items-center flex-col">
                <h2 class="text-emerald-500 text-2xl font-bold">
                  75 <span className="text-white">+</span>
                </h2>
                <p class="mt-1 text-white">Happy Costumer</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 flex justify-center items-center flex-col">
              <a class="mt-1 ">
                <Image
                  src={icon2}
                  width={60}
                  height={60}
                  alt="Picture of the author"
                  className="mt-[-29px]"
                />
              </a>
              <div class="mt-4 flex justify-center items-center flex-col">
                <h2 class="text-emerald-500 text-2xl font-bold">
                  20 <span className="text-white">+</span>
                </h2>
                <p class="mt-1 text-white">Award Wining</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 flex justify-center items-center flex-col">
              <a class="mt-1 ">
                <Image
                  src={icon2}
                  width={60}
                  height={60}
                  alt="Picture of the author"
                  className="mt-[-29px]"
                />
              </a>
              <div class="mt-4 flex justify-center items-center flex-col">
                <h2 class="text-emerald-500 text-2xl font-bold">
                  40 <span className="text-white">+</span>
                </h2>
                <p class="mt-1 text-white">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Allprojects;
