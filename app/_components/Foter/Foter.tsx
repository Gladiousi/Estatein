"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export const Foter = () => {
  return (
    <footer className="w-full bg-[#262626]">
      <div className="ml-[10%] mr-[10%] justify-center flex flex-wrap md:flex-wrap md:flex">
        <div className="mt-[10%] md:mt-[5%] block w-full md:w-fit">
          <Image src="/logo.svg" alt="logo" priority width={100} height={100} />
          <div className="flex gap-3 p-3 mt-5 border-zinc-600 border-2 rounded-lg">
            <div className="w-full  ">
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="focus:outline-none"
              />
            </div>
            <div className="flex items-center">
              <Link href="#">
                <Image
                  src="/Favicon/tg.svg"
                  alt="tg"
                  priority
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-slate-500 text-sm  lg:text-md md:flex lg:flex-wrap md:gap-x-5 m-[5%] lg:gap-x-10 columns-2">
          <div>
            <div className="text-white text-lg xl:text-2xl md:mt-5 mt-0 mb-3 lg:mt-0">
              Home
            </div>
            <div className="flex flex-col gap-y-3">
              <Link href="#">Hero Section</Link>
              <Link href="#">Features</Link>
              <Link href="#">Properties</Link>
              <Link href="#">Testimonials</Link>
              <Link href="#">FAQ`s</Link>
            </div>
          </div>
          <div>
            <div className="text-white text-lg xl:text-2xl mt-5 mb-3 lg:mt-0">
              About Us
            </div>
            <div className="flex flex-col gap-y-3">
              <Link href="#">Our Story</Link>
              <Link href="#">Our Works</Link>
              <Link href="#">How It Works</Link>
              <Link href="#">Our Team</Link>
              <Link href="#">Our Clients</Link>
            </div>
          </div>
          <div>
            <div className="text-white text-lg xl:text-2xl mt-5 mb-3 lg:mt-0">
              Properties
            </div>
            <div className="flex flex-col gap-y-3">
              <Link href="#">Portfolio</Link>
              <Link href="#">Categories</Link>
            </div>
          </div>
          <div>
            <div className="text-white text-lg xl:text-2xl mt-5 mb-3 lg:mt-0">
              Services
            </div>
            <div className="flex flex-col gap-y-3">
              <Link href="#">Valuation Mastery</Link>
              <Link href="#">Strategic Marketing</Link>
              <Link href="#">Negotiation Wizardry</Link>
              <Link href="#">Closing Success</Link>
              <Link href="#">Property Management</Link>
            </div>
          </div>
          <div>
            <div className="text-white text-lg xl:text-2xl mt-5 mb-3 lg:mt-0">
              Contact
            </div>
            <div className="flex flex-col gap-y-3">
              <Link href="#">Contact Form</Link>
              <Link href="#">Our Offices</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-800 flex text-sm justify-around p-5 flex-col-reverse gap-y-5 gap-x-10  md:flex-row items-center">
        <div className="text-white gap-x-1 w-full md:flex justify-center flex-wrap items-center md:justify-start md:ml-[10%]">
          <div className="text-center">
            <span>@2023 Estatein. All Rights Reserved.</span>
          </div>
          <div className="text-center">
            <span>Terms & Conditions</span>
          </div>
        </div>
        <div className="button section gap-x-5 flex md:mr-[10%] items-center">
          <Link href="#">
            <Button className="rounded-full p-5 bg-[url('/Favicon/Icon.svg')] bg-cover bg-center "></Button>
          </Link>
          <Link href="#">
            <Button className="rounded-full p-5 bg-[url('/Favicon/Button-2.svg')] bg-cover bg-center "></Button>
          </Link>
          <Link href="#">
            <Button className="rounded-full p-5 bg-[url('/Favicon/Button-1.svg')] bg-cover bg-center "></Button>
          </Link>
          <Link href="#">
            <Button className="rounded-full p-5 bg-[url('/Favicon/Button.svg')] bg-cover bg-center "></Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};
