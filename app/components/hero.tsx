import Image from "next/image";
import React from "react";
import ImageWithLoading from "./ImageWithLoading";

const Hero = () => {
  return (
    <div className="">
<<<<<<< HEAD
      <div className="hidden lg:block">
        <Image
          src={"/Foto-Main-Utama.png"}
          alt=""
          height={"1000"}
          width={"1000"}
          className="w-full h-auto object-center object-cover"
        />
      </div>
      <div className="lg:hidden block">
        <Image
          src={"/Foto-Main-Utama.png"}
          alt=""
          height={"1000"}
          width={"1000"}
          className="w-full h-auto object-center object-cover"
=======
      <div className="block">
        <ImageWithLoading
          src={"/foto-utama.svg"}
          alt=""
          height={1000}
          width={1000}
          className=""
          className2="w-full h-auto object-center object-cover"
>>>>>>> 54565e1833b7a8f37d254647b5a0344b991a5ab7
        />
      </div>
    </div>
  );
};

export default Hero;
