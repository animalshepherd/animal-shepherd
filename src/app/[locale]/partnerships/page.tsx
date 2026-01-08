"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "../components/ui/Button";
import { HeroActionBox } from "../components/ui/HeroActionBox";

export default function PartnershipsPage() {
  const t = useTranslations("PartnershipsPage");

  return (
    <div className="flex flex-col w-full bg-primary antialiased">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/animals.webp"
            alt="Animal Shepherd Strategic Alliances"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
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
        title={t("HeroAction.title")}
        description={t("HeroAction.description")}
        buttonLabel={t("HeroAction.button")}
        buttonHref="mailto:project@animalshepherd.org"
        buttonVariant="primary"
      />

      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6 group">
            <h3 className="text-xl font-bold text-secondary-dark group-hover:text-secondary transition-colors">
              {t("Pillars.corporate.title")}
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              {t("Pillars.corporate.description")}
            </p>
          </div>

          <div className="space-y-6 group">
            <h3 className="text-xl font-bold text-secondary-dark group-hover:text-secondary transition-colors">
              {t("Pillars.esg.title")}
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              {t("Pillars.esg.description")}
            </p>
          </div>

          <div className="space-y-6 group">
            <h3 className="text-xl font-bold text-secondary-dark group-hover:text-secondary transition-colors">
              {t("Pillars.education.title")}
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              {t("Pillars.education.description")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24 px-6 lg:px-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <header className="space-y-4">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase opacity-70">
                {t("Art.tag")}
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                {t("Art.title")}
              </h3>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </header>

            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>{t("Art.description")}</p>
              <ul className="space-y-4 border-l border-white/20 pl-6">
                <li className="text-sm italic tracking-wide">
                  <span className="font-bold block text-white not-italic mb-1">
                    {t("Art.impact.label")}
                  </span>
                  {t("Art.impact.text")}
                </li>
                <li className="text-sm italic tracking-wide">
                  <span className="font-bold block text-white not-italic mb-1">
                    {t("Art.mandate.label")}
                  </span>
                  {t("Art.mandate.text")}
                </li>
                <li className="text-sm italic tracking-wide">
                  <span className="font-bold block text-white not-italic mb-1">
                    {t("Art.integrity.label")}
                  </span>
                  {t("Art.integrity.text")}
                </li>
              </ul>
            </div>

            <div className="pt-4 space-y-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-primary italic">
                  &quot;{t("Art.quote")}&quot;
                </p>
                <p className="text-xs uppercase tracking-widest opacity-50 mt-1">
                  — Alejandro Magallanes
                </p>
              </div>
              <Button
                size="sm"
                href="https://www.instagram.com/p/CGK7p-un-R-/"
                className="text-white border-white/20 hover:bg-white/10"
              >
                {t("Art.button")}
              </Button>
            </div>
          </div>

          <div className="relative aspect-square bg-white/5 rounded-3xl flex items-center justify-center p-12 border border-white/10">
            <div className="relative w-full h-full">
              <Image
                src="/animal-shepherd-logo.jpg"
                alt="Animal Shepherd Emblem by Alejandro Magallanes"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-secondary-dark mb-8">
          {t("CTA.title")}
        </h2>
        <p className="text-secondary text-lg mb-12">{t("CTA.description")}</p>
        <Button variant="secondary" size="lg" href="/contact" className="px-12">
          {t("CTA.button")}
        </Button>
      </section>
    </div>
  );
}
