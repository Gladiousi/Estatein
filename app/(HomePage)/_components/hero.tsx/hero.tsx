import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full xl:max-w-lg mt-[10%]">
          <div className="flex flex-col">
            <h1 className="text-[60px] font-semibold text-white">
              Discover Your Dream Property with Estatein{" "}
            </h1>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
            <div className="flex gap-x-4 mt-4">
              <Button
                variant={"outline"}
                className="bg-[rgb(38, 38, 38)] border-none text-white shadow-2xl
                ring-1 ring-current hover:bg-[rgb(38, 38, 38)] hover:text-white hover:shadow-2xl
                hover:ring-[#808080] transition-all"
              >
                Learn More
              </Button>
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
        <div className="max-xl:hidden">
          <Image
            src={"/hero.png"}
            width={850}
            height={1000}
            alt="Hero Image"
            className="absolute right-0 top-[10%]"
          />
        </div>
        <div className="block xl:hidden">
          <Image src={"/hero.png"} width={850} height={1000} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};
