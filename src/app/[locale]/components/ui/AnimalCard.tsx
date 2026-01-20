import Image from "next/image";

interface AnimalCardProps {
  src: string;
  alt: string;
}

export const AnimalCard = ({ src, alt }: AnimalCardProps) => {
  return (
    <div className="rounded-xl bg-primary shadow-lg overflow-hidden text-center">
      <div className="relative w-full h-72">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
};
