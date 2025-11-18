import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { TipCard } from "./TipCard";

type TipCardData = {
  src: string;
  alt: string;
};

export const tipCards: TipCardData[] = [
  { src: "/tip-01.jpg", alt: "tip 1" },
  { src: "/tip-02.jpg", alt: "tip 2" },
  { src: "/tip-03.jpg", alt: "tip 3" },
  { src: "/tip-04.jpg", alt: "tip 4" },
  { src: "/tip-05.jpg", alt: "tip 5" },
  { src: "/tip-06.jpg", alt: "tip 6" },
  { src: "/tip-07.jpg", alt: "tip 7" },
  { src: "/tip-08.jpg", alt: "tip 8" },
  { src: "/tip-09.jpg", alt: "tip 9" },
  { src: "/tip-10.jpg", alt: "tip 10" },
  { src: "/tip-11.jpg", alt: "tip 11" },
];

export function CarouselContainer() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl h-full"
    >
      <CarouselContent>
        {tipCards.map((card, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <TipCard src={card.src} alt={card.alt} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
