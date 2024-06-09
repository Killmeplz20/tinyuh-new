import Image from "next/image";
import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div className="relative lg:py-20">
      <div className="lg:flex inset-0 items-center hidden justify-center">
        <Image
          src={"/logo-utama.svg"}
          className="mx-auto mt-40 absolute"
          height={400}
          width={400}
          alt=""
        />
      </div>
      <div className="flex lg:justify-between justify-center gap-6  items-center lg:mx-72 my-5">
        <Link
          href="/about"
          className="text-main border lg:text-4xl text-lg border-main px-4 py-2 rounded-full"
        >
          <span className=" font-bold">About </span>
          <i className=" font-extralight">us</i>
        </Link>
        <Link
          href={"/products"}
          className="text-main border lg:text-4xl text-lg border-main px-4 py-2 rounded-full"
        >
          <span className=" font-bold">Our </span>
          <i className=" font-extralight">product</i>
        </Link>
      </div>
      <div className=" flex lg:justify-between justify-center gap-6 items-center lg:mx-80 my-5">
        <Link
          href={"/activity"}
          className="text-main border lg:text-4xl text-lg border-main px-4 py-2 rounded-full"
        >
          <span className=" font-bold">Act</span>
          <i className=" font-extralight">ivity</i>
        </Link>
        <Link
          href={"/works"}
          className="text-main border lg:text-4xl text-lg border-main px-4 py-2 rounded-full"
        >
          <span className=" font-bold">Our </span>
          <i className=" font-extralight">works</i>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:mt-32 lg:space-y-10 space-y-4">
        <Link
          href={"/presskit"}
          className="text-main mx-auto  border lg:text-4xl text-lg border-main px-4 py-2 rounded-full"
        >
          <span className=" font-bold">Press</span>
          <i className=" font-extralight">kit</i>
        </Link>
        <Link
          href={"/contact"}
          className="text-main mx-auto  border lg:text-4xl text-lg border-main px-4 py-2 rounded-full"
        >
          <span className=" font-bold">Contact </span>
          <i className=" font-extralight">us</i>
        </Link>
      </div>
    </div>
  );
};

export default Main;
