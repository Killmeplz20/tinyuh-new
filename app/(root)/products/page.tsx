import Title from "@/app/components/title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div className="text-main pb-12">
      <Title title="Products." />
      <div className="grid grid-cols-1 gap-y-6 lg:gap-y-12">
        <div className="text-center space-y-3 mx-auto">
          <Image
            src={"/rempah.svg"}
            alt=""
            className="mx-auto pt-6 w-auto h-auto lg:w-[250px] lg:h-[250px]"
            width={"1000"}
            height={"1000"}
          />
          <h1 className="text-2xl pb-6">Rempah Embasi</h1>
          <Link
            href={"/"}
            className="border-2 border-main rounded-xl px-4 py-2 text-2xl"
          >
            Visit
          </Link>
        </div>
        <div className="text-center space-y-3 mx-auto">
          <Image
            src={"/kasungka.svg"}
            alt=""
            className="mx-auto pt-6 w-auto h-auto lg:w-[250px] lg:h-[250px]"
            width={"1000"}
            height={"1000"}
          />
          <h1 className="text-2xl pb-6">Kasungka Coffe</h1>
          <Link
            href={"/"}
            className="border-2 border-main rounded-xl px-4 py-2 text-2xl"
          >
            Visit
          </Link>
        </div>
        <div className="text-center space-y-3 mx-auto">
          <Image
            src={"/sampyong.svg"}
            alt=""
            className="mx-auto pt-6 w-auto h-auto lg:w-[250px] lg:h-[250px]"
            width={"1000"}
            height={"1000"}
          />
          <h1 className="text-2xl pb-6">Teh Sampyong</h1>
          <Link
            href={"/"}
            className="border-2 border-main rounded-xl px-4 py-2 text-2xl"
          >
            Visit
          </Link>
        </div>
        <div className="text-center space-y-3 mx-auto">
          <Image
            src={"/terakota.svg"}
            alt=""
            className="mx-auto pt-6 w-auto h-auto lg:w-[250px] lg:h-[250px]"
            width={"1000"}
            height={"1000"}
          />
          <h1 className="text-2xl pb-6">Terakota Tanaraya</h1>
          <Link
            href={"/"}
            className="border-2 border-main rounded-xl px-4 py-2 text-2xl"
          >
            Visit
          </Link>
        </div>
        <div className="text-center space-y-3 mx-auto">
          <h1 className="text-2xl pb-6">Ecommerce</h1>
          <div className="gap-12 flex items-center justify-center pt-4">
            <Link
              href={"/"}
              className="bg-main text-black px-4 py-2 rounded-sm"
            >
              Shop Now
            </Link>
            <Link
              href={"/"}
              className="bg-main text-black px-4 py-2 rounded-sm"
            >
              Shop Now
            </Link>
          </div>
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

export default Products;
