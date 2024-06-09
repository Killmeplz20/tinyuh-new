import Title from "@/app/components/title";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Activity = () => {
  return (
    <div className="text-main pb-12">
      <Title title="Pesuguhan." />
      <p className="text-2xl mx-20">
        Upacara Pesuguhan is a program that we created in our alternative effort
        as a group of entrepreneur (Coffee, Spices, Tea and Ceramics) to carry
        out trade activities that are packaged performatively and hold solemn
        banquets.
      </p>
      {/* video yt */}
      <div className="my-6">
        <div className="w-full">
          <iframe
            className="mx-auto lg:w-[560px] lg:h-[315px] w-auto h-auto"
            src="https://www.youtube.com/embed/hsobC_yguaY?si=GBbQuTFPrIUYQwEp"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="gap-12 flex items-center justify-center pt-12">
          <Link
            href={"https://www.youtube.com/watch?v=hsobC_yguaY"}
            className="bg-main text-black px-4 py-2 rounded-sm flex items-center gap-2"
          >
            <FaYoutube size={"15"} />
            Visit Us
          </Link>
          <Link
            href={"https://www.instagram.com/tiny_uh/"}
            className="bg-main text-black px-4 py-2 rounded-sm flex items-center gap-2"
          >
            <FaInstagram size={"15"} />
            Visit Us
          </Link>
        </div>
      </div>
      {/* end */}
      <Title title="Sesajian." />
      <p className="text-2xl mx-20">
        &quot;Sesajian&quot; is a media channel that we created as an activity
        to distributed information, knowledge, or the results of our research
        that we conducted from sources that we curated and then distributed it
        in the form of a YouTube vlog, podcast, or zine.
      </p>
      <div className="grid grid-cols-4 gap-4 mt-12">
        <div className="mx-auto col-span-4">
          <Image
            src={"/rempah.svg"}
            alt=""
            width={"50"}
            height={"50"}
            className="mx-auto"
          />
          <p className="font-base text-lg">Rempah Embassy</p>
        </div>
        <div className="mx-auto col-span-2">
          <Image
            src={"/kasungka.svg"}
            alt=""
            width={"50"}
            height={"50"}
            className="mx-auto"
          />
          <p className="font-base text-lg">Kasungka Coffee</p>
        </div>
        <div className="mx-auto col-span-2">
          <Image
            src={"/sampyong.svg"}
            alt=""
            width={"50"}
            height={"50"}
            className="mx-auto"
          />
          <p className="font-base text-lg">Teh Sampyong</p>
        </div>
        <div className="mx-auto col-span-4">
          <Image
            src={"/terakota.svg"}
            alt=""
            width={"50"}
            height={"50"}
            className="mx-auto"
          />
          <p className="font-base text-lg">Terakota Tanaraya</p>
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

export default Activity;
