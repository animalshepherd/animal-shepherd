"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "../components/ui/Button";
import { HeroActionBox } from "../components/ui/HeroActionBox";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  const b = useTranslations("Buttons");

  return (
    <div className="flex flex-col w-full bg-primary antialiased">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/owner-dog-01.webp"
            alt="Sanctuary owner playing with dog"
            fill
            fetchPriority="high"
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
        title={t("WhoWeAre.title")}
        description={t("WhoWeAre.description")}
        buttonLabel={b("getInvolved")}
        buttonHref="/getinvolved"
      />

      <section className="bg-primary py-16 md:py-20 px-6 lg:px-20 border-b border-secondary/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            {t("Impact.title")}
          </h2>
          <div className="text-secondary text-lg leading-relaxed space-y-6">
            <p>{t("Impact.p1")}</p>
            <p className="text-base opacity-80 italic">{t("Impact.p2")}</p>
          </div>
        </div>
      </section>

      <section className="bg-parchment py-16 md:py-20 px-6 lg:px-20 border-b border-secondary/5">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
              {t("Pillars.title")}
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
            <p className="text-secondary max-w-2xl mx-auto mt-6 text-sm md:text-base">
              {t("Pillars.description")}
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-8 bg-primary-dark/20 border border-secondary-dark/10 rounded-3xl shadow-sm">
              <h3 className="text-center sm:text-left text-xl font-bold text-secondary-dark mb-4">
                {t("Pillars.rescue.title")}
              </h3>
              <ul className="space-y-3 text-secondary-dark text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {t("Pillars.rescue.item1")}
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {t("Pillars.rescue.item2")}
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {t("Pillars.rescue.item3")}
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {t("Pillars.rescue.item4")}
                </li>
              </ul>
            </div>

            <div className="p-8 bg-primary-dark/20 border border-secondary-dark/10 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-secondary-dark mb-4">
                {t("Pillars.wellness.title")}
              </h3>
              <ul className="space-y-3 text-secondary-dark text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {t("Pillars.wellness.item1")}
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {t("Pillars.wellness.item2")}
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {t("Pillars.wellness.item3")}
                </li>
              </ul>
            </div>

            <div className="p-8 bg-primary-dark/20 border border-secondary-dark/10 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-secondary-dark mb-4">
                {t("Pillars.outreach.title")}
              </h3>
              <ul className="space-y-3 text-secondary-dark text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {t("Pillars.outreach.item1")}
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {t("Pillars.outreach.item2")}
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {t("Pillars.outreach.item3")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-20 px-6 lg:px-20 text-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">{t("Sanctuary.title")}</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
          <div className="text-lg leading-relaxed space-y-6 opacity-95">
            <p>{t("Sanctuary.p1")}</p>
            <p className="italic opacity-80 text-base text-primary/80">
              &quot;{t("Sanctuary.quote")}&quot;
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:mb-32">
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="text-xs font-bold text-secondary tracking-widest uppercase">
              {t("Conservation.tag")}
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark">
              {t("Conservation.title")}
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto lg:mx-0 rounded-full" />
            <p className="text-secondary text-lg leading-relaxed">
              {t("Conservation.description")}
            </p>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/cat-05.webp"
              alt="Cat in nature"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl order-last lg:order-first">
            <Image
              src="/owner-dog-03.webp"
              alt="Founder of Animal Shepherd with a rescue animal"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <h3 className="text-xs font-bold text-secondary tracking-widest uppercase">
              {t("Restoration.tag")}
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark">
              {t("Restoration.title")}
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto lg:mx-0 rounded-full" />

            <div className="text-secondary text-lg leading-relaxed space-y-4">
              <p>{t("Restoration.p1")}</p>
              <p>{t("Restoration.p2")}</p>
            </div>

            <blockquote className="border-l-4 border-secondary pl-6 italic text-secondary-dark font-medium py-2 text-left">
              &quot;{t("Restoration.quote")}&quot;
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-primary/90 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-xs font-bold tracking-widest text-primary/40 uppercase mb-6">
            {t("Dedication.title")}
          </h2>
          <div className="space-y-4">
            <p className="text-xs italic leading-loose">{t("Dedication.p1")}</p>
            <p className="text-xs italic leading-loose">{t("Dedication.p2")}</p>
            <p className="pt-2 text-xs font-bold uppercase tracking-widest text-primary">
              {t("Dedication.closing")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary border-t border-secondary/5">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-secondary-dark mb-6">
            {t("Join.title")}
          </h2>
          <p className="text-secondary mb-12 text-lg">
            {t("Join.description")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button variant="primary" href="/getinvolved">
              {b("getInvolved")}
            </Button>
            <Button variant="secondary" href="/adopt">
              {b("learnAdopting")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
