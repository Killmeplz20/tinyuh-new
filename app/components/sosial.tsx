import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Sosial = () => {
  return (
    <div className="flex justify-center items-center gap-6 py-5">
      <Link
        className="bg-main rounded-full lg:w-14 lg:h-14 w-10 h-10 items-center flex justify-center"
        href={"https://web.facebook.com/tinyUH.project/"}
      >
        <FaFacebook className="lg:w-[35px] lg:h-[35px] w-[25px] h-[25px]" />
      </Link>
      <Link
        className="bg-main rounded-full lg:w-14 lg:h-14 w-10 h-10 items-center flex justify-center"
        href={"https://www.instagram.com/tiny_uh/"}
      >
        <FaInstagram className="lg:w-[35px] lg:h-[35px] w-[25px] h-[25px]" />
      </Link>
      <Link
        className="bg-main rounded-full lg:w-14 lg:h-14 w-10 h-10 items-center flex justify-center"
        href={"https://www.youtube.com/@tinyUh"}
      >
        <FaYoutube className="lg:w-[35px] lg:h-[35px] w-[25px] h-[25px]" />
      </Link>
      <Link
        className="bg-main rounded-full lg:w-14 lg:h-14 w-10 h-10 items-center flex justify-center"
        href={"https://tinyuh.bandcamp.com/album/150616841696"}
      >
        <Image alt="" width={"35"} height={"35"} src={"/bc.svg"} />
      </Link>
    </div>
  );
};

export default Sosial;
