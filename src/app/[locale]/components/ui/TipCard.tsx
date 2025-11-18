import Image from "next/image";

type TipCardProps = {
  src: string;
  alt: string;
};

export const TipCard = ({ src, alt }: TipCardProps) => {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-9/16 overflow-hidden rounded-3xl">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 400px"
      />
    </div>
  );
};
