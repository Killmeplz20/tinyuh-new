import Title from "@/app/components/title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Works = () => {
  return (
    <div className="text-main pb-12">
      <Title title="Album." />
      <div className="text-center mx-auto">
        <h1 className="text-2xl">“ 150616841696 “</h1>
        <p>2023</p>
        <Image
          src={"/album.svg"}
          alt=""
          className="mx-auto pt-6 w-auto h-auto lg:w-[500px] lg:h-[500px]"
          width={"1000"}
          height={"1000"}
        />
        <div className=" flex items-center justify-center pt-12">
          <Link
            href={"/"}
            className="border-2 border-main px-4 py-2 rounded-sm"
          >
            Stream
          </Link>
        </div>
      </div>
      <div className="my-6">
        <Title title="Single." />
        <iframe
          className="mx-auto w-auto h-auto lg:w-[560px] lg:h-[315px]"
          src="https://www.youtube.com/embed/jUkoL9RE72o?si=xa529lSXgxr04dn1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="flex items-center justify-center pt-12">
          <Link href={"/"} className="bg-main text-black px-4 py-2 rounded-sm">
            Visit Us
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

export default Works;
