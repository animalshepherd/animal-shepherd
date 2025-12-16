import Image from "next/image";

type TipCardProps = {
  id: number;
  title: string;
  heading: string;
  body: string;
  src: string;
  alt: string;
};

export const TipCard = ({ title, heading, body, src, alt }: TipCardProps) => {
  return (
    <div className="w-full rounded-2xl bg-parchment border border-black/15 p-6 flex flex-col">
      <div className="flex flex-col items-center justify-center text-center">
        <span className="text-sm font-medium text-secondary-dark opacity-80">
          {title}
        </span>
        <h3 className="mt-2 text-xl font-semibold text-secondary-dark">
          {heading}
        </h3>
      </div>

      <div className="my-6 flex justify-center">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={1200}
          className="w-full h-auto"
        />
      </div>

      <p className="text-base leading-relaxed text-secondary text-center">
        {body}
      </p>
    </div>
  );
};
