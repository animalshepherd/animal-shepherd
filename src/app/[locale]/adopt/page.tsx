"use client";

import Image from "next/image";

import { Button } from "../components/ui/Button";

export default function Adopt() {
  const clickButton = () => {
    console.log("hit");
  };
  return (
    <div className="relative min-h-screen w-full pt-16 bg-primary">
      <section className="flex flex-col items-center justify-center">
        <div className="relative w-full h-96">
          <Image
            src="/dog-55.webp"
            alt="Good boy"
            fill
            className="object-cover"
          ></Image>
        </div>
        <h1 className="text-secondary-dark font-bold text-3xl md:text-5xl my-4 pr-0 md:pr-5 text-center">
          Adopt and Change a Life
        </h1>
        <p className="text-secondary text-md font-normal mb-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          malesuada, risus at blandit ultricies, urna orci dignissim purus, sed
          rutrum.
        </p>
        <div className="flex flex-row gap-4 mb-0 md:mb-8">
          <Button variant="secondary" onClick={clickButton}>
            Apply to Adopt
          </Button>
          <Button variant="primary" href="getinvolved">
            Learn About Adopting
          </Button>
        </div>
      </section>
      <section></section>
    </div>
  );
}
