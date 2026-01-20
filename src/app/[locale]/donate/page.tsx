"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { HeroActionBox } from "../components/ui/HeroActionBox";

export default function DonatePage() {
  const t = useTranslations("DonatePage");

  return (
    <div className="flex flex-col w-full bg-primary antialiased">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cat-25.webp"
            alt="Animal Shepherd sanctuary residents"
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
        buttonHref="https://www.paypal.me/animalshepherd"
        buttonVariant="primary"
      />

      <section className="py-16 sm:py-20 px-6 lg:px-20 max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            {t("Impact.title")}
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
        </header>

        <div className="space-y-8 text-secondary text-lg leading-relaxed text-center">
          <p>{t("Impact.p1")}</p>
          <p>{t("Impact.p2")}</p>
        </div>
      </section>

      <section className="bg-secondary/5 py-16 sm:py-20 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <header className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-dark mb-2">
                {t("Bank.title")}
              </h2>
              <p className="text-secondary/60 font-medium text-sm uppercase tracking-wide">
                {t("Bank.subtitle")}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-center">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-bold text-secondary/50">
                  {t("Bank.labels.bank")}
                </p>
                <p className="text-lg font-medium text-secondary-dark">
                  BBVA MÉXICO
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-bold text-secondary/50">
                  {t("Bank.labels.holder")}
                </p>
                <p className="text-lg font-medium text-secondary-dark">
                  ANIMAL SHEPHERD AC
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-bold text-secondary/50">
                  {t("Bank.labels.account")}
                </p>
                <p className="text-lg font-mono font-medium text-secondary-dark tracking-tight">
                  0126038646
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-bold text-secondary/50">
                  {t("Bank.labels.clabe")}
                </p>
                <p className="text-lg font-mono font-medium text-secondary-dark tracking-tight">
                  012180001260386468
                </p>
              </div>
              <div className="space-y-1 md:col-span-2">
                <p className="text-xs uppercase tracking-wider font-bold text-secondary/50">
                  {t("Bank.labels.swift")}
                </p>
                <p className="text-lg font-mono font-medium text-secondary-dark">
                  BCMRMXMMPYM
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 text-center space-y-4">
              <p className="text-sm text-secondary/70 italic">
                {t("Bank.footer.note")}
              </p>
              <p className="text-[11px] text-secondary/60 max-w-lg mx-auto leading-relaxed">
                {t("Bank.footer.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-6 lg:px-20 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            {t("OtherWays.title")}
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="flex flex-col p-8 bg-primary border border-gray-100 rounded-3xl text-center space-y-4 h-full">
            <h3 className="font-bold text-secondary-dark text-xl">
              {t("OtherWays.sponsor.title")}
            </h3>
            <div className="flex-1">
              <p className="text-secondary text-sm">
                {t("OtherWays.sponsor.description")}
              </p>
            </div>
          </div>
          <div className="flex flex-col p-8 bg-primary border border-gray-100 rounded-3xl text-center space-y-4 h-full">
            <h3 className="font-bold text-secondary-dark text-xl">
              {t("OtherWays.supplies.title")}
            </h3>
            <div className="flex-1">
              <p className="text-secondary text-sm">
                {t("OtherWays.supplies.description")}
              </p>
            </div>
          </div>
          <div className="flex flex-col p-8 bg-primary border border-gray-100 rounded-3xl text-center space-y-4 h-full">
            <h3 className="font-bold text-secondary-dark text-xl">
              {t("OtherWays.legacy.title")}
            </h3>
            <div className="flex-1">
              <p className="text-secondary text-sm">
                {t("OtherWays.legacy.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
