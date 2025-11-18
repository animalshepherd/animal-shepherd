"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";

import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { CarouselContainer } from "./components/ui/Carousel";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const clickButton = () => {
    console.log("hit");
  };
  return (
    <div className="relative min-h-screen w-full pt-16 bg-primary">
      <section className="flex flex-col md:flex-row items-center justify-between py-8 md:py-28 gap-8 px-4 md:px-20">
        <div className="md:flex-1">
          <h1 className="text-secondary-dark font-bold text-3xl md:text-6xl leading-tight my-4 pr-0 md:pr-5 max-sm:break-all text-center">
            {t("title")}
          </h1>
          <p className="text-secondary text-m font-normal mb-8 text-center">
            {t("paragraph")}
          </p>
          <div className="flex flex-col items-center justify-center md:flex-row gap-4">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Button variant="secondary" onClick={clickButton}>
                Donate Now
              </Button>
              <Button variant="primary" href="getinvolved">
                Get Involved
              </Button>
            </div>
          </div>
        </div>
        <div className="md:flex-1 justify-center items-center">
          <div className="relative w-full h-96">
            <Image
              src="/owner-dogs.webp"
              fill
              alt="Owner with dogs"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary p-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-5 text-center leading-tight text-primary">
            Making a Difference Every day
          </h1>
          <p className="max-w-4xl text-center mb-5 text-shadow-primary text-primary">
            Animal Shepherd is a no-kill, non-profit rescue and sanctuary for
            dogs, cats, and farm animals. We provide lifelong care for the
            abandoned, injured, and neglected while promoting education,
            adoption, and sustainable living.
          </p>
          <div className="flex flex-col md:flex-row gap-8 mb-5 max-w-full">
            <div className="flex flex-col justify-center items-center p-4 w-72 bg-primary rounded-lg shadow-md">
              <Image
                src="/paw.svg"
                alt="heart icon"
                width={8}
                height={8}
                className="flex h-10 w-10 items-center justify-center mb-2"
              />
              <p className="font-bold mb-2 text-3xl text-secondary-dark">
                400+
              </p>
              <p className="text-secondary">animals rescued annually</p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 w-72 bg-primary rounded-lg shadow-md">
              <Image
                src="/heart.svg"
                alt="heart icon"
                width={8}
                height={8}
                className="flex h-10 w-10 items-center justify-center m-2"
              />
              <p className="font-bold mb-2 text-3xl text-secondary-dark">
                100+
              </p>
              <p className="text-secondary">
                dogs and cats cared for every day
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 w-72 bg-primary rounded-lg shadow-md">
              <Image
                src="/healthcare.svg"
                alt="heart icon"
                width={8}
                height={8}
                className="flex h-10 w-10 items-center justify-center mb-2"
              />
              <p className="font-bold m-2 text-3xl">24/7</p>
              <p className="text-secondary">emergency rescue service</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mb-0">
            <Button variant="primary" href="/getinvolved">
              Get Involved Today
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col p-8">
          <h1 className="text-3xl font-bold mb-5 text-center text-secondary-dark">
            Our Work
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="md:flex-1 flex flex-col justify-center items-center">
              <p className="max-w-prose text-center text-secondary mb-4">
                Animal Shepherd is a non-profit, no-kill organization founded on
                the belief that every life is precious. We rescue, rehabilitate,
                and provide lifelong sanctuary for dogs, cats, and farm animals
                who have been abandoned, neglected, or injured. What began as a
                small effort to help the most vulnerable has grown into a safe,
                no-cage haven where animals can live freely, recover fully, and
                experience love without fear.
              </p>
              <p className="max-w-prose text-center text-secondary mb-4">
                Beyond rescue, Animal Shepherd is a community hub for education,
                advocacy, and sustainable living. We promote responsible pet
                care, adoption, and environmental stewardship through our
                programs in animal welfare, permaculture, and vegan living. From
                sanctuary care to public outreach, our mission is to protect
                animals, inspire compassion, and build a world where every
                creature is valued.
              </p>
              <div className="flex flex-col items-center justify-center md:flex-row gap-4 mt-2">
                <Button variant="secondary" href="treatments">
                  Read Our Story
                </Button>
              </div>
            </div>
            <div className="md:flex-1 relative w-full h-96">
              <Image
                src="/owner-dog-02.webp"
                fill
                alt="Owner with dogs"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary p-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-5 text-center leading-tight text-primary">
            Meet our animals
          </h1>
          <p className="max-w-4xl text-center mb-5 text-shadow-primary text-primary">
            Each animal at our sanctuary has a story. Some are healing, some are
            thriving, and all are loved. Together, they make up the heart of
            Animal Shepherd.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-5">
          <Card image="/dog-01.webp" alt="Dog sitting" />

          <Card image="/cat-04.webp" alt="Cat looking" />

          <Card image="/dog-22.webp" alt="Dog posing" />

          <Card image="/cat-06.webp" alt="Cat relaxing" />
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row gap-4">
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <Button variant="primary" href="animals">
              Meet the Residents
            </Button>
            <Button variant="primary" href="treatments">
              Learn About Adopting
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary p-16 md:p-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-5 text-center leading-tight text-secondary-dark">
            Tips for caring for your pets
          </h1>
          <p className="max-w-4xl text-center mb-5 text-shadow-primary text-secondary">
            Good care starts with simple daily habits that build trust,
            confidence, and wellbeing. Our sanctuary team has gathered practical
            guidance to help you keep your pets healthy, active, and emotionally
            supported. These easy tips are designed for real life and can make a
            meaningful difference in your pet&apos;s day-to-day happiness.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <CarouselContainer />
        </div>
      </section>
    </div>
  );
}
