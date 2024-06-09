import Image from "next/image";
import React from "react";

const Sosial = () => {
  return (
    <div className="flex justify-center items-center gap-6 py-5">
      <Image alt="" width={"50"} height={"50"} src={"/fb.png"} />
      <Image alt="" width={"50"} height={"50"} src={"/ig.png"} />
      <Image alt="" width={"50"} height={"50"} src={"/yt.png"} />
      <Image alt="" width={"50"} height={"50"} src={"/bc.png"} />
    </div>
  );
};

export default Sosial;
