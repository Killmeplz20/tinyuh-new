import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div className="hidden lg:block">
        <Image
          src={"/Foto-Baru-Backg.svg"}
          alt=""
          height={"1000"}
          width={"1000"}
          className="w-full h-auto object-center object-cover"
        />
      </div>
      <div className="lg:hidden block">
        <Image
          src={"/Foto-Baru-Backg.svg"}
          alt=""
          height={"1000"}
          width={"1000"}
          className="w-full h-auto object-center object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
