"use client";

import Image from "next/image";

interface AnimalCardProps {
  image: string;
  alt: string;
}

export const Card = ({ image, alt }: AnimalCardProps) => {
  return (
    <div className="rounded-xl bg-primary shadow-lg overflow-hidden text-center">
      <div className="relative w-full h-56">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
};
