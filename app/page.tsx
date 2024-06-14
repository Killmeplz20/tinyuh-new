"use client";
import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Main from "./components/main";
import Sosial from "./components/sosial";
import Loading from "./components/loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Hero />
          <Sosial />
          <Main />
          <Footer />
        </div>
      )}
    </>
  );
}
