import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const StartRealEstate = () => {
  return (
    <section className="w-full h-full mt-[10%]">
      <div className="">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-white xl:text-3xl dark:text-white">
            Start Your Real Estate Journey Today
          </h2>

          <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <Button
              variant={"outline"}
              className="bg-purple-800 ring-1 ring-purple-800 border-none transition-all text-white shadow-2xl
                hover:bg-[rgb(112, 59, 247)] hover:text-white hover:ring-white hover:shadow-2xl"
            >
              Browse Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartRealEstate;
