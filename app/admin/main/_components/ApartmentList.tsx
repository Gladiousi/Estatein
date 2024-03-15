import { Button } from "@/components/ui/button";
import { Id } from "@/convex/_generated/dataModel";
import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/useApiMutation";
import { useQuery } from "convex/react";

interface IApartmentList {
  isClient?: boolean;
  access?: boolean;
}

interface IApartment {
  _id: Id<"apartments">;
  _creationTime: number;
  image: string;
  id: string;
  name: string;
  price: number;
}

export const ApartmentList = ({ isClient, access }: IApartmentList) => {
  const data = useQuery(api.apartment.getAllApartments);
  const { mutate, pending } = useApiMutation(api.apartment.deleteApartment);

  const handleClick = (id: string) => {
    toast.success(`ID: ${id}`);
  };

  const handleClickDelete = (id: string) => {
    mutate({ id })
      .then(() => toast.success("Successfully deleted"))
      .catch((e: Error) => toast.error(`Error: ${e.message}`));
  };
  return (
    <div className={cn("w-full", !access && "hidden")}>
      <h1 className="text-4xl font-bold mb-1 text-center text-[rgba(0,0,0,.8)]">
        Apartment List
      </h1>
      <ul>
        {data?.length === 0 && (
          <p className="text-4xl text-center font-semibold bg-gradient-to-r from-red-600 to-violet-900 p-4 text-transparent bg-clip-text">
            There is no data
          </p>
        )}
        <div
          className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 backdrop-filter backdrop-blur-[15px]
          bg-white/10 px-2 py-6 rounded-sm h-max"
        >
          {data?.map((apartment: IApartment) => (
            <li
              key={apartment.id}
              className="flex flex-col w-full items-center mb-16"
            >
              <h2 className="text-2xl font-semibold text-[rgba(0,0,0,.8)] mb-2 w-full text-center">
                {apartment.name}
              </h2>
              <p className="text-xl font-semibold text-[rgba(0,0,0,.8)] mb-2">
                Price: ${apartment.price}
              </p>
              <Image
                src={apartment.image}
                width={400}
                priority
                height={300}
                alt="Apartment"
              />
              {!isClient && (
                <div className="flex flex-col gap-y-2 mt-2">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="border border-black p-6 hover:border-indigo-500 hover:bg-transparent text-lg"
                    onClick={() => handleClick(apartment.id)}
                    disabled={pending}
                  >
                    Show ID
                  </Button>

                  <Button
                    variant="destructive"
                    size="lg"
                    className="border border-black p-6 hover:border-indigo-500 text-lg"
                    disabled={pending}
                    onClick={() => handleClickDelete(apartment.id)}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};
