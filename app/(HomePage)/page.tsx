"use client";

import { Foter } from "@/app/_components/Foter/Foter";
import { Navbar } from "@/app/_components/Navbar/Navbar";
import { ApartmentList } from "@/app/admin/main/_components/ApartmentList";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <ApartmentList />
      <Foter />
    </>
  );
};

export default HomePage;
