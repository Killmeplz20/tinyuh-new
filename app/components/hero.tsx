import Image from "next/image";
import React from "react";
import ImageWithLoading from "./ImageWithLoading";

const Hero = () => {
  return (
    <div className="">
      <div className="block">
        <ImageWithLoading
          src={"/foto-utama.svg"}
          alt=""
          height={1000}
          width={1000}
          className=""
          className2="w-full h-auto object-center object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
