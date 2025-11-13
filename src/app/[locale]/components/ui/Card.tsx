"use client";

import Image from "next/image";

interface AnimalCardProps {
  image: string;
  title: string;
  description: string;
}

export const Card = ({ image, title, description }: AnimalCardProps) => {
  return (
    <div className="rounded-xl bg-primary shadow-lg overflow-hidden text-center">
      <div className="relative w-full h-56">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="w-full p-6">
        <h5 className="text-xl font-semibold font-manrope text-gray-900 mb-4">
          {title}
        </h5>
        <p className="text-sm font-medium text-gray-600">{description}</p>
      </div>
    </div>
  );
};
