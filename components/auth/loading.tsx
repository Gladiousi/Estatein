import Image from "next/image";

export const Loading = () => {
  return (
    <div
      className="w-full h-full flex flex-col 
      justify-center items-center"
    >
      <Image
        src="/favicon.ico"
        alt="logo"
        priority
        width={240}
        height={240}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
