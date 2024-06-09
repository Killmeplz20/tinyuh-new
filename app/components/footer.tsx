import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Image
        src="/foto-bawah.svg"
        height="2000"
        width="2000"
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Footer;
