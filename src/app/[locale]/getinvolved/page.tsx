"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "../components/ui/Button";
import { HeroActionBox } from "../components/ui/HeroActionBox";

export default function GetInvolvedPage() {
  const t = useTranslations("GetInvolvedPage");

  return (
    <div className="flex flex-col w-full bg-primary antialiased">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dog-01.webp"
            alt="The Animal Shepherd sanctuary grounds"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            {t("Hero.title")}
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 max-w-2xl mx-auto">
            {t("Hero.paragraph")}
          </p>
        </div>
      </section>

      <HeroActionBox
        title={t("Philosophy.title")}
        description={t("Philosophy.description")}
        buttonLabel={t("Philosophy.button")}
        buttonHref="/donate"
        buttonVariant="primary"
      />

      <section className="py-16 sm:py-20 px-6 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          <div className="flex flex-col h-full space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-center md:text-left text-3xl font-bold text-secondary-dark">
                  {t("Volunteer.title")}
                </h3>
                <div className="h-1 w-16 bg-secondary rounded-sm mx-auto md:mx-0" />
              </div>
              <p className="text-secondary text-lg leading-relaxed">
                {t("Volunteer.description")}
              </p>
            </div>

            <div className="flex-1 flex flex-col pt-8 border-t border-secondary/10">
              <div className="flex-1 space-y-6">
                <h4 className="text-center md:text-left text-2xl font-bold text-secondary-dark">
                  {t("Volunteer.programTitle")}
                </h4>
                <p className="text-center md:text-left text-secondary text-base leading-relaxed">
                  {t("Volunteer.programDescription")}
                </p>
              </div>
              <div className="pt-8 flex items-center justify-center md:justify-start">
                <Button
                  variant="secondary"
                  size="lg"
                  href="mailto:info@animalshepherd.org"
                >
                  {t("Volunteer.button")}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-center md:text-left text-3xl font-bold text-secondary-dark">
                  {t("Adopt.title")}
                </h3>
                <div className="h-1 w-16 bg-secondary rounded-sm mx-auto md:mx-0" />
              </div>
              <p className="text-secondary text-lg leading-relaxed text-center md:text-left">
                {t("Adopt.description")}
              </p>
            </div>

            <div className="flex-1 flex flex-col pt-8 border-t border-secondary/10">
              <div className="flex-1 space-y-6">
                <h4 className="text-2xl font-bold text-secondary-dark text-center md:text-left">
                  {t("Adopt.responsibleTitle")}
                </h4>
                <p className="text-secondary text-base leading-relaxed text-center md:text-left">
                  {t("Adopt.responsibleDescription")}
                </p>
                <p className="text-secondary text-base leading-relaxed italic text-center md:text-left">
                  &quot;{t("Adopt.quote")}&quot;
                </p>
              </div>
              <div className="pt-8 flex items-center justify-center md:justify-start">
                <Button variant="primary" size="lg" href="/adopt">
                  {t("Adopt.button")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
