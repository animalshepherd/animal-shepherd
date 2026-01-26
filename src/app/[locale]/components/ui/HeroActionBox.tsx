"use client";

import { Button } from "./Button";

interface HeroActionBoxProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  buttonVariant?: "primary" | "secondary";
  onClick?: () => void;
}

export const HeroActionBox = ({
  title,
  description,
  buttonLabel,
  buttonHref,
  buttonVariant = "primary",
  onClick,
}: HeroActionBoxProps) => {
  return (
    <section className="relative z-10 -mt-12 px-6 lg:px-20 max-w-6xl mx-auto w-full">
      <div className="bg-secondary p-8 md:p-12 rounded-3xl shadow-2xl text-center min-h-[420px] md:min-h-[280px] flex flex-col justify-center items-center">
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-primary text-2xl md:text-3xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-primary/90 text-lg leading-relaxed mb-8">
            {description}
          </p>

          {buttonLabel && buttonHref && (
            <div className="flex flex-wrap justify-center">
              <Button
                variant={buttonVariant}
                href={buttonHref}
                size="xl"
                onClick={onClick}
              >
                {buttonLabel}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
