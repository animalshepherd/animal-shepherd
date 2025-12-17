import Image from "next/image";

import { useTranslations } from "next-intl";

import { Button } from "./components/ui/Button";
import { AnimalCard } from "./components/ui/AnimalCard";
import { CarouselContainer } from "./components/ui/CarouselContainer";

import { tipCards } from "@/data/tips";
import { TipCard } from "./components/ui/TipCard";

import { getTipsData } from "@/lib/getTipsData";

import { lookupTable } from "@/lib/createTipsLookup";

export default function HomePage() {
  const home = useTranslations("HomePage");
  const tips = useTranslations("Tips");

  const tipsArray = getTipsData(tips);

  const TipsCardData = lookupTable(tipsArray, tipCards);

  return (
    <div className="relative min-h-screen w-full bg-primary">
      <section className="flex flex-col md:flex-row items-center justify-between py-8 md:py-28 gap-8 px-4 md:px-20">
        <div className="md:flex-1 max-w-xl mx-auto md:mx-0">
          <h1 className="text-secondary-dark font-bold text-3xl md:text-6xl my-4 pr-0 md:pr-5 text-center">
            {home("title")}
          </h1>
          <p className="text-secondary text-md font-normal mb-8 text-center">
            {home("paragraph")}
          </p>

          <div className="flex flex-row justify-center items-center gap-4 mb-0 md:mb-8">
            <Button variant="secondary">Donate Now</Button>
            <Button variant="primary" href="getinvolved">
              Get Involved
            </Button>
          </div>
        </div>
        <div className="w-full md:flex-1 justify-center items-center">
          <div className="relative w-full h-[40vh] md:h-[45vh]">
            <Image
              src="/owner-dog-27.webp"
              fill
              alt="Owner with dogs"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-5 text-center text-primary">
            Making a Difference Every day
          </h2>
          <p className="max-w-4xl text-center mb-5 text-shadow-primary text-primary">
            Animal Shepherd is a no-kill, non-profit rescue and sanctuary for
            dogs, cats, and farm animals. We provide lifelong care for the
            abandoned, injured, and neglected while promoting education,
            adoption, and sustainable living.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 max-w-5xl mx-auto">
            <div className="flex flex-col justify-center items-center p-4 bg-primary rounded-lg shadow-md">
              <Image
                src="/paw.svg"
                alt="heart icon"
                width={8}
                height={8}
                className="flex h-10 w-10 items-center justify-center m-2"
              />
              <p className="font-bold mb-2 text-3xl text-secondary-dark">
                400+
              </p>
              <p className="text-secondary">animals rescued annually</p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 bg-primary rounded-lg shadow-md">
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
            <div className="flex flex-col justify-center items-center p-4 bg-primary rounded-lg shadow-md">
              <Image
                src="/healthcare.svg"
                alt="heart icon"
                width={8}
                height={8}
                className="flex h-10 w-10 items-center justify-center m-2"
              />
              <p className="font-bold mb-2 text-3xl">24/7</p>
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

      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-5 text-center text-secondary-dark">
            Our Work
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="md:flex-1 flex flex-col justify-center items-center">
              <div className="max-w-prose text-center text-secondary mb-4 space-y-6">
                <p>
                  Animal Shepherd is a non-profit, no-kill organization founded
                  on the belief that every life is precious. We rescue,
                  rehabilitate, and provide lifelong sanctuary for dogs, cats,
                  and farm animals who have been abandoned, neglected, or
                  injured. What began as a small effort to help the most
                  vulnerable has grown into a safe, no-cage haven where animals
                  can live freely, recover fully, and experience love without
                  fear.
                </p>
                <p>
                  Beyond rescue, Animal Shepherd is a community hub for
                  education, advocacy, and sustainable living. We promote
                  responsible pet care, adoption, and environmental stewardship
                  through our programs in animal welfare, permaculture, and
                  vegan living. From sanctuary care to public outreach, our
                  mission is to protect animals, inspire compassion, and build a
                  world where every creature is valued.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center md:flex-row gap-4 mt-2">
                <Button variant="secondary" href="about">
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

      <section className="bg-secondary px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-5 text-center text-primary">
            Meet our animals
          </h2>
          <p className="max-w-4xl text-center mb-5 text-shadow-primary text-primary">
            Each animal at our sanctuary has a story. Some are healing, some are
            thriving, and all are loved. Together, they make up the heart of
            Animal Shepherd.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-5">
          <AnimalCard src="/dog-01.webp" alt="Dog sitting" />

          <AnimalCard src="/cat-04.webp" alt="Cat looking" />

          <AnimalCard src="/dog-22.webp" alt="Dog posing" />
          <AnimalCard src="/cat-06.webp" alt="Cat relaxing" />
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row gap-4">
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <Button variant="primary" href="adopt">
              Meet the Residents
            </Button>
            <Button variant="primary" href="adopt">
              Learn About Adopting
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-5 text-center text-secondary-dark">
            Tips for caring for your pets
          </h2>
          <p className="max-w-4xl text-center mb-5 text-shadow-primary text-secondary">
            Good care starts with simple daily habits that build trust,
            confidence, and wellbeing. Our sanctuary team has gathered practical
            guidance to help you keep your pets healthy, active, and emotionally
            supported. These easy tips are designed for real life and can make a
            meaningful difference in your pet&apos;s day-to-day happiness.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <CarouselContainer
            items={TipsCardData}
            renderItem={(item) => (
              <TipCard
                id={item.id}
                heading={item.heading}
                title={item.title}
                body={item.body}
                src={item.src}
                alt={item.alt}
              />
            )}
          />
        </div>
      </section>
    </div>
  );
}
