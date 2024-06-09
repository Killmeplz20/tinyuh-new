import React from "react";
import Title from "../../components/title";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="text-main pb-12">
      <Title title="Our Story" />
      <div className="grid grid-cols-4 gap-4 lg:px-20 px-10">
        <Image
          src={"/tinyuh.svg"}
          className="w-full h-auto m-auto p-12 lg:col-span-2 col-span-3"
          alt=""
          width={"2000"}
          height={"2000"}
        />
        <div className="lg:col-span-2 col-span-4">
          <p className="tracking-wider text-xl">
            tinyUH means brew in Sundanese, while there is a small word
            &apos;tiny&apos; whose members consist of small entrepreneurs who
            live in a small city in Indonesia called Majalengka. tinyUH are
            collective of small entrepreneurs of coffee, tea and spices, as well
            as terracotta tableware, while playing their brewed compositions
            solemnly as daily ritual. In addition to playing musical
            compositions, tinyUH also plays economic activities as part of the
            show. tinyUH reconstructs the whole atmosphere of taste, visual,
            aroma, sound, up to the trading process, based on the long history
            of colonialism in Indonesia that intersects through spices, coffee,
            tea and clay.
          </p>
        </div>
      </div>
      <div className="lg:px-20 lg:py-12 px-10 py-6 space-y-10">
        <p className="tracking-wider text-xl">
          We are often presented with various food and beverage products that
          are instant, practical and ready to serve. Are we really set up to not
          be able to know or witness the process of making drinks until they are
          ready to be served? In some cultures such as the Tea Ceremony in
          Japan, we witness a ritual that is considered sacred because there are
          special rules that have certain meanings during the brewing process
          that we can enjoy as an art and even spiritual. With that in mind, we
          are inspired and offer a performance on how the process of making and
          serving food or beverages for us to realize that it is a performance
          art that we can enjoy aesthetically audio (sound) visual (movement,
          appearance) and once ready to serve we enjoy with the senses of smell
          (fragrance) and taste (flavor).
        </p>
        <p className="tracking-wider text-xl">
          The beginning of tinyUh began with an art event held by a
          collaboration of artists from Jatiwangi Art Factory and Artists from
          Japan. Aldizar (JaF) & Gakuji Masui (Japan) presented a joint work
          resulting from a 1-month residency. They made a banquet and
          presentation about pottery/ceramic art entitled &quot;Jawara
          Kawara&quot;. In the event, each of us did a presentation on what was
          presented. Alfi Syahrian (Kasungka Coffee) explained about coffee and
          his interest in coffee research in the Majalengka region. Arman Knaci
          (Rempah Embassy) as a spice concoction also presented spice stories
          and their intersections in the history of the archipelago. Yussan AF,
          meanwhile, did a performative presentation, playing the sounds of tea
          brewing equipment. After the event, Yussan AF thought of inviting
          Arman and Alfi to create a group (ensemble) of brewers who process
          sounds and brew performatively.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-12 mx-20">
        <div className="m-auto text-center text-main space-y-4">
          <Image src={"/yussan.svg"} alt="" height={"300"} width={"300"} />
          <h1 className="font-bold lg:text-3xl text-lg">Yussan A.F</h1>
          <i className="lg:text-lg text-sm font-light">as a Tea Brewer</i>
        </div>
        <div className="m-auto text-center text-main space-y-4">
          <Image src={"/arman.svg"} alt="" height={"300"} width={"300"} />
          <h1 className="font-bold lg:text-3xl text-lg">Arman Knaci</h1>
          <i className="lg:text-lg text-sm font-light">as a Spice Brewer</i>
        </div>
        <div className="m-auto text-center text-main space-y-4">
          <Image src={"/alfi.svg"} alt="" height={"300"} width={"300"} />
          <h1 className="font-bold lg:text-3xl text-lg">Alfi Syahrian</h1>
          <i className="lg:text-lg text-sm font-light">as a Coffe Brewer</i>
        </div>
        <div className="m-auto text-center text-main space-y-4">
          <Image src={"/aldizar.svg"} alt="" height={"300"} width={"300"} />
          <h1 className="font-bold lg:text-3xl text-lg">Aldizar Ahmad</h1>
          <i className="lg:text-lg text-sm font-light">as a Ceramic Artis</i>
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

export default About;
