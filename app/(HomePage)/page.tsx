"use client";

import { ApartmentList } from "../admin/main/_components/ApartmentList";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <ApartmentList isClient access={true} />
    </div>
  );
};

export default HomePage;
