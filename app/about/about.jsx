import React from "react";
import Image from "next/image";
import icon2 from "../../public/icon2.svg";

const AboutSection = () => {
  return (
    <div>
      <section class="body-font overflow-hidden bg-gradient-to-r from-black to-[#413f3f] text-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://i.pinimg.com/564x/d4/6a/44/d46a44807028d77a38df8858091f1eaa.jpg"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-emerald-500 tracking-widest">
                About Us
              </h2>
              <h1 class=" text-white text-4xl title-font font-medium mb-1">
                We Use <span className="text-emerald-500">Creativity </span>to
                Get Our Clients.
              </h1>
              <hr className="h-1 w-16 bg-emerald-500 text-emerald-500 my-2" />

              <p class="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric.{" "}
              </p>
              <div className="flex gap-6">
                <div className="flex mt-3">
                  <Image
                    src={icon2}
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className="mt-[-29px]"
                  />
                  <div className="ml-2">
                    <h1 className="font-bold">Clean Code</h1>
                    <h5>Lorem ipsum dolor sit.</h5>
                    <h5>my name is khan</h5>
                  </div>
                </div>
                <div className="flex mt-3">
                  <Image
                    src={icon2}
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className="mt-[-29px]"
                  />
                  <div className="ml-2">
                    <h1 className="font-bold">Clean Code</h1>
                    <h5>Lorem ipsum dolor sit.</h5>
                    <h5>my name is khan</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
