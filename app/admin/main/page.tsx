"use client";

import React, { useState } from "react";

import { ApartmentList } from "./_components/ApartmentList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/useApiMutation";

const AdminPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [access, setAccess] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const { mutate, pending } = useApiMutation(api.apartment.create);

  const handleSubmit = () => {
    if (
      !name ||
      !price ||
      price < 0 ||
      name.trim().length <= 5 ||
      name.trim().length >= 50
    ) {
      toast.error("Invalid input");
      return;
    }
    mutate({ name, price })
      .then(() => toast.success("success to create"))
      .catch(() => toast.error("Failed to create"));
  };

  const handleSubmitModal = () => {
    if (inputValue === process.env.NEXT_PUBLIC_SECRET_KEY_ADMIN!) {
      toast.success("Access granted!");
      setShowModal(false);
      localStorage.setItem("access", JSON.stringify(true));
      setAccess(true);
    } else {
      toast.error("Invalid secret key");
    }
  };

  return (
    <div className="w-full min-h-screen z-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 h-max">
      {showModal && !access && (
        <div className=" absolute z-2 inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Enter secret key</h2>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border border-gray-400 rounded-md p-2 mb-4 w-full"
            />
            <div className="flex justify-end">
              <Button
                onClick={handleSubmitModal}
                className="px-4 py-2"
                disabled={pending}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}

      <div
        className={cn(
          "backdrop-filter backdrop-blur-[15px] bg-white/30 px-2 py-6 rounded-3xl",
          !access && "hidden"
        )}
      >
        <div className="flex justify-center mb-8">
          <h1 className=" text-4xl font-bold">Generate Apartment</h1>
        </div>
        <div className="flex flex-col gap-y-4 w-[50vw] mx-auto">
          <Input
            name="name"
            type="text"
            placeholder="Apartment Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            name="price"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
          <Button onClick={handleSubmit} className="px-4 py-2">
            Submit
          </Button>
        </div>
      </div>
      <div className="w-[80vw] mx-auto mt-8 p-6 backdrop-filter backdrop-blur-[30px] bg-white/30 shadow-lg rounded-3xl">
        <ApartmentList access={access} />
      </div>
    </div>
  );
};

export default AdminPage;
