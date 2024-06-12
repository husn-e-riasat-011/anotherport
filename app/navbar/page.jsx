import React from "react";

const Navbarcomponent = () => {
  return (
    <div>
      <header class="bg-[#202C33] text-white body-font">
        <div class="container w-[80%] mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center ">
          <a
            href=""
            class="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0"
          >
            <h1 class="ml-3 text-xl font-bold text-emerald-500">Criativo</h1>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="" class="mr-5 hover:text-emerald-500">
              Home
            </a>
            <a href="" class="mr-5 hover:text-emerald-500">
              About
            </a>
            <a href="" class="mr-5 hover:text-emerald-500">
              Services
            </a>
            <a href="" class="mr-5 hover:text-emerald-500">
              portfolio
            </a>
            <a href="" class="mr-5 hover:text-emerald-500">
              pages
            </a>
            <a href="" class="mr-5 hover:text-emerald-500">
              Contect US
            </a>
          </nav>
          <div class="input-wrapper">
            <button class="icon">
              <svg
                width="19px"
                height="19px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22 22L20 20"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <input
              type="text"
              name="text"
              className="input bg-emerald-500"
              placeholder="search.. "
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbarcomponent;
