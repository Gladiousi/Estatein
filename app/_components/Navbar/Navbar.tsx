"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const toggleMenu = () => {
    setActive((prevActive) => !prevActive);
  };
  return (
    <header className="flex justify-between items-center h-[10vh] ">
      <div className="ml-4">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" priority width={100} height={100} />
        </Link>
      </div>
      <nav className="flex gap-x-4 text-white">
        <Link
          href="/"
          className={cn("p-4 rounded-2xl", active && "bg-zinc-950")}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cn("p-4 rounded-2xl", active && "bg-zinc-950")}
        >
          About Us
        </Link>
        <Link
          href="/properties"
          className={cn("p-4 rounded-2xl", active && "bg-zinc-950")}
        >
          Properties
        </Link>
        <Link
          href="/servises"
          className={cn("p-4 rounded-2xl", active && "bg-zinc-950")}
        >
          Servises
        </Link>
      </nav>
      <div className="contact">
        <Button
          size="lg"
          variant="default"
          className={cn("p-4 rounded-2xl bg-zinc-950", active && "bg-blue-700")}
        >
          Contact Us
        </Button>
      </div>
      <div className={"block md:hidden"}>
        <Button
          size="lg"
          variant="default"
          onClick={() => {
            toggleMenu();
          }}
          className="w-12 h-12 bg-cover bg-center rounded-full"
          style={{ backgroundImage: "url('/Icon.svg')" }}
        ></Button>
      </div>
    </header>
  );
};
