"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const toggleMenu = () => {
    setActive((prevActive) => !prevActive);
  };
  const [position, setPosition] = React.useState("bottom");
  return (
    <header className="flex justify-around items-center h-[10vh] bg-[#262626]">
      <div className="">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" priority width={100} height={100} />
        </Link>
      </div>
      <nav className="hidden md:block gap-x-3 text-white">
        <Link
          href="/"
          className={cn(
            "p-4 rounded-2xl hover:bg-zinc-700",
            active && "bg-zinc-950"
          )}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cn(
            "p-4 rounded-2xl hover:bg-zinc-700",
            active && "bg-zinc-950"
          )}
        >
          About Us
        </Link>
        <Link
          href="/properties"
          className={cn(
            "p-4 rounded-2xl hover:bg-zinc-700",
            active && "bg-zinc-950"
          )}
        >
          Properties
        </Link>
        <Link
          href="/servises"
          className={cn(
            "p-4 rounded-2xl hover:bg-zinc-700",
            active && "bg-zinc-950"
          )}
        >
          Servises
        </Link>
      </nav>
      <div className="hidden md:block">
        <Link href="/contact">
          <Button
            size="lg"
            variant="default"
            className={cn(
              "p-4 rounded-2xl bg-zinc-950 hover:bg-violet-700",
              active && "bg-[#703BF7]"
            )}
          >
            Contact Us
          </Button>
        </Link>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-[url(/Icon.svg)] bg-color-none focus:bg-zinc-950 border-0 p-5 bg-cover bg-center block md:hidden"></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-zinc-950 text-white">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">
              <Link href="/">Home</Link>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="never">
              <Link href="/about">About Us</Link>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">
              <Link href="/properties">Properties</Link>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="left">
              <Link href="/servisies">Servisies</Link>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">
              <Link href="/contact">Contact Us</Link>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
