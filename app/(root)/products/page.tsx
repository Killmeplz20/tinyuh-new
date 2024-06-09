import Title from "@/app/components/title";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaShoppingBag } from "react-icons/fa";

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
          <h1 className="text-2xl pb-6">Rempah Embassy</h1>
          <Link
            href={"https://www.instagram.com/rempahembassy/"}
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
          <h1 className="text-2xl pb-6">Kasungka Coffee</h1>
          <Link
            href={"https://www.instagram.com/kasungkacoffee/"}
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
            href={"https://www.instagram.com/kasungkacoffee/"}
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
            href={
              "https://www.instagram.com/tehsampyong?igsh=MXU5N2E3ZzZnb2R4bg=="
            }
            className="border-2 border-main rounded-xl px-4 py-2 text-2xl"
          >
            Visit
          </Link>
        </div>
        <div className="text-center space-y-3 mx-auto">
          <div className="flex items-center justify-center">
            <FaShoppingBag className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px]" />
          </div>
          <h1 className="text-2xl pb-6">Ecommerce</h1>
          <div className="gap-12 flex items-center justify-center pt-4">
            <Link
              href={"https://www.instagram.com/tiny_uh/"}
              className="bg-main text-black px-4 py-2 rounded-sm flex items-center gap-2"
            >
              <FaInstagram size={"25"} />
              Shop Now
            </Link>
            <Link
              href={"https://www.tokopedia.com/tinyuhstore"}
              className="bg-main text-black px-4 py-2 rounded-sm flex items-center gap-2"
            >
              <Image src={"/tokopedia.svg"} alt="" width={"25"} height={"25"} />
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
