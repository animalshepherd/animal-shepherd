"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimalCard } from "../components/ui/AnimalCard";
import { HeroActionBox } from "../components/ui/HeroActionBox";
import { Button } from "../components/ui/Button";

import { animals } from "@/data/animals";

export default function AdoptPage() {
  const t = useTranslations("AdoptPage");

  const stepsKeys = ["1", "2", "3", "4"] as const;

  return (
    <div className="flex flex-col w-full bg-primary antialiased">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dog-55.webp"
            alt="A happy rescued dog at the sanctuary"
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
        buttonHref="#adoption-form"
        buttonVariant="primary"
      />

      <section
        id="meet-the-family"
        className="py-24 px-6 lg:px-20 max-w-screen-2xl mx-auto w-full scroll-mt-20"
      >
        <header className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark">
            {t("Family.title")}
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
          <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            {t("Family.description")}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {animals.map((animal) => (
            <AnimalCard key={animal.src} src={animal.src} alt={animal.alt} />
          ))}
        </div>
      </section>

      <section className="bg-parchment py-24 px-6 lg:px-20 border-y border-secondary/5">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
              {t("HowToAdopt.title")}
            </h2>
            <div className="h-1.5 w-20 bg-secondary mx-auto rounded-full" />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stepsKeys.map((key) => (
              <div
                key={key}
                className="relative p-8 bg-primary border border-secondary/10 rounded-3xl shadow-sm transition-all hover:shadow-md"
              >
                <span className="absolute -top-4 left-8 bg-secondary text-primary font-bold px-4 py-1 rounded-full text-xs">
                  Step {key}
                </span>
                <h3 className="text-lg font-bold text-secondary-dark mt-4 mb-3">
                  {t(`HowToAdopt.steps.${key}.title`)}
                </h3>
                <p className="text-secondary leading-relaxed text-sm opacity-80">
                  {t(`HowToAdopt.steps.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <header className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-dark mb-4">
                {t("Fees.title")}
              </h2>
              <p className="text-secondary text-sm max-w-md mx-auto">
                {t("Fees.description")}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
              <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                <p className="text-xs uppercase font-bold text-secondary/60 mb-1">
                  {t("Fees.cat")}
                </p>
                <p className="text-3xl font-bold text-secondary-dark">$150</p>
              </div>
              <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                <p className="text-xs uppercase font-bold text-secondary/60 mb-1">
                  {t("Fees.dog")}
                </p>
                <p className="text-3xl font-bold text-secondary-dark">$200</p>
              </div>
              <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                <p className="text-xs uppercase font-bold text-secondary/60 mb-1">
                  {t("Fees.pair")}
                </p>
                <p className="text-3xl font-bold text-secondary-dark">$250</p>
              </div>
            </div>

            <div className="text-center space-y-8">
              <p className="text-sm text-secondary italic opacity-70">
                {t("Fees.note")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="adoption-form"
        className="py-24 px-6 lg:px-20 bg-primary scroll-mt-10"
      >
        <div className="max-w-4xl mx-auto w-full">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-6">
              {t("Form.title")}
            </h2>
            <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              {t("Form.description")}
            </p>
          </header>

          <form className="bg-parchment/30 p-8 md:p-12 rounded-3xl border border-secondary/5 shadow-xs">
            <div className="grid grid-cols-1 gap-10">
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  {t("Form.labels.q1")}
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder={t("Form.labels.q1_placeholder")}
                  className="w-full p-4 rounded-2xl bg-primary border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none text-secondary"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  {t("Form.labels.q2")}
                </label>
                <input
                  required
                  type="text"
                  placeholder={t("Form.labels.q2_placeholder")}
                  className="w-full p-4 rounded-2xl bg-primary border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-secondary"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  {t("Form.labels.q3")}
                </label>
                <input
                  required
                  type="text"
                  placeholder={t("Form.labels.q3_placeholder")}
                  className="w-full p-4 rounded-2xl bg-primary border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-secondary"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  {t("Form.labels.q4")}
                </label>
                <input
                  required
                  type="text"
                  placeholder={t("Form.labels.q4_placeholder")}
                  className="w-full p-4 rounded-2xl bg-primary border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-secondary"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  {t("Form.labels.q5")}
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder={t("Form.labels.q5_placeholder")}
                  className="w-full p-4 rounded-2xl bg-primary border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none text-secondary"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  {t("Form.labels.q6")}
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder={t("Form.labels.q6_placeholder")}
                  className="w-full p-4 rounded-2xl bg-primary border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none text-secondary"
                />
              </div>

              <div className="flex flex-col items-center gap-6 pt-10 border-t border-secondary/10">
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-16"
                  href="/getinvolved"
                >
                  {t("Form.labels.submit")}
                </Button>
                <p className="text-xs text-secondary/50 uppercase tracking-widest text-center leading-relaxed">
                  {t("Form.labels.privacy")}
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
