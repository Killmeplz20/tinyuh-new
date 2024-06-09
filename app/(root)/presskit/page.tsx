import Title from "@/app/components/title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Presskit = () => {
  return (
    <div className="text-main pb-12">
      <Title title="Reqruitment." />
      <div className="grid grid-cols-4 gap-y-6 lg:gap-y-12">
        <div className="text-center space-y-3 mx-auto col-span-2">
          <Image
            src={"/photo-icon.svg"}
            alt=""
            className="mx-auto pt-6 w-auto h-auto lg:w-[150px] lg:h-[150px]"
            width={"1000"}
            height={"1000"}
          />
          <h1 className="text-2xl pb-6">Photo</h1>
          <Link
            href={"/"}
            className="border-2 border-main rounded-xl px-4 py-2 text-2xl"
          >
            Visit
          </Link>
        </div>
        <div className="text-center space-y-3 mx-auto col-span-2">
          <Image
            src={"/logo-icon.svg"}
            alt=""
            className="mx-auto pt-6 w-auto h-auto lg:w-[150px] lg:h-[150px]"
            width={"1000"}
            height={"1000"}
          />
          <h1 className="text-2xl pb-6">Logo</h1>
          <Link
            href={"/"}
            className="border-2 border-main rounded-xl px-4 py-2 text-2xl"
          >
            Visit
          </Link>
        </div>
        <div className="text-center space-y-3 mx-auto col-span-4">
          <Image
            src={"/tech-icon.svg"}
            alt=""
            className="mx-auto pt-6 w-auto h-auto lg:w-[150px] lg:h-[150px]"
            width={"1000"}
            height={"1000"}
          />
          <h1 className="text-2xl pb-6 ">Tech Riders</h1>
          <Link
            href={"/"}
            className="border-2 border-main rounded-xl px-4 py-2 text-2xl"
          >
            Visit
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center py-20">
        <Link
          href={"/"}
          className="border-2 border-main rounded-full px-4 py-2 text-2xl"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Presskit;
