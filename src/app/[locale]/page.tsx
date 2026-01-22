import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "./components/ui/Button";
import { AnimalCard } from "./components/ui/AnimalCard";
import { CarouselContainer } from "./components/ui/CarouselContainer";
import { TipCard } from "./components/ui/TipCard";

import { tipCards } from "@/data/tips";
import { getTipsData } from "@/lib/getTipsData";
import { lookupTable } from "@/lib/createTipsLookup";

export default function HomePage() {
  const homeHero = useTranslations("HomePage.Hero");
  const stats = useTranslations("HomePage.Stats");
  const work = useTranslations("HomePage.Work");
  const residents = useTranslations("HomePage.Residents");
  const careTips = useTranslations("HomePage.CareTips");
  const tips = useTranslations("HomePage.Tips");
  const buttons = useTranslations("Buttons");

  const tipsArray = getTipsData(tips);
  const TipsCardData = lookupTable(tipsArray, tipCards);

  return (
    <div className="flex flex-col w-full bg-primary antialiased">
      <section className="relative min-h-[600px] md:h-[85vh] w-full flex items-center justify-center overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/homepage-hero.webp"
            fill
            fetchPriority="high"
            alt="Founder interacting with sanctuary dogs"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-5xl px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            {homeHero("title")}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-medium mb-10 text-white/90 max-w-2xl mx-auto">
            {homeHero("paragraph")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <Button variant="secondary" href="/donate" size="lg">
              {buttons("donate")}
            </Button>
            <Button variant="primary" href="/getinvolved" size="lg">
              {buttons("getInvolved")}
            </Button>
          </div>
        </div>
      </section>

      <section className="relative container mx-auto px-6 md:px-4 -mt-10 md:-mt-20">
        <div className="max-w-6xl mx-auto bg-secondary px-6 py-12 md:py-16 rounded-3xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="flex flex-col items-center text-center px-2">
              <div className="bg-primary/20 p-3 rounded-full mb-4">
                <Image
                  src="/paw.svg"
                  alt="paw-icon"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <p className="text-3xl md:text-4xl font-black text-primary mb-1 tracking-tight">
                1000+
              </p>
              <p className="text-primary/80 font-semibold text-xs md:text-sm uppercase tracking-widest leading-tight">
                {stats("rescued")}
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-2">
              <div className="bg-primary/20 p-3 rounded-full mb-4">
                <Image
                  src="/healthcare.svg"
                  alt="healthcare-icon"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <p className="text-3xl md:text-4xl font-black text-primary mb-1 tracking-tight">
                5000+
              </p>
              <p className="text-primary/80 font-semibold text-xs md:text-sm uppercase tracking-widest leading-tight">
                {stats("trees")}
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-2">
              <div className="bg-primary/20 p-3 rounded-full mb-4">
                <Image
                  src="/earth.svg"
                  alt="earth-icon"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <p className="text-3xl md:text-4xl font-black text-primary mb-1 tracking-tight">
                80+
              </p>
              <p className="text-primary/80 font-semibold text-xs md:text-sm uppercase tracking-widest leading-tight">
                {stats("hectares")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark leading-tight">
              {work("title")}
            </h2>
            <div className="text-secondary text-base md:text-lg space-y-6 leading-relaxed">
              <p>{work("p1")}</p>
              <p>{work("p2")}</p>
            </div>
            <div className="pt-2">
              <Button variant="secondary" href="/about">
                {buttons("readStory")}
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[450px] w-full rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/owner-dog-28.webp"
              fill
              alt="Caregiver with animal"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/5 py-16 md:py-20 px-6 lg:px-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            {residents("title")}
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto">
            {residents("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto mb-12">
          <AnimalCard src="/dog-56.webp" alt="Dog sitting" />
          <AnimalCard src="/cat-04.webp" alt="Cat looking" />
          <AnimalCard src="/dog-22.webp" alt="Dog posing" />
          <AnimalCard src="/cat-06.webp" alt="Cat relaxing" />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
          <Button variant="secondary" href="/adopt">
            {buttons("meetResidents")}
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            {careTips("title")}
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-3xl mx-auto">
            {careTips("description")}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <CarouselContainer
            items={TipsCardData}
            renderItem={(item) => <TipCard {...item} />}
          />
        </div>
      </section>
    </div>
  );
}
