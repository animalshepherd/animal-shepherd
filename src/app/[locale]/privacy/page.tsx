"use client";

import { useTranslations } from "next-intl";

export default function PrivacyPage() {
  const t = useTranslations("PrivacyPage");

  return (
    <div className="w-full bg-primary antialiased">
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-3xl mx-auto space-y-14">
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-secondary-dark">
              {t("title")}
            </h1>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              {t("intro")}
            </p>
          </header>

          <div className="space-y-10 text-secondary text-base leading-relaxed text-center lg:text-left">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-secondary-dark">
                {t("sections.collection.title")}
              </h2>
              <p>{t("sections.collection.p1")}</p>
              <p>{t("sections.collection.p2")}</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-secondary-dark">
                {t("sections.usage.title")}
              </h2>
              <p>{t("sections.usage.p1")}</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-secondary-dark">
                {t("sections.storage.title")}
              </h2>
              <p>{t("sections.storage.p1")}</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-secondary-dark">
                {t("sections.sharing.title")}
              </h2>
              <p>{t("sections.sharing.p1")}</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-secondary-dark">
                {t("sections.analytics.title")}
              </h2>
              <p>{t("sections.analytics.p1")}</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-secondary-dark">
                {t("sections.rights.title")}
              </h2>
              <p>{t("sections.rights.p1")}</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-secondary-dark">
                {t("sections.changes.title")}
              </h2>
              <p>{t("sections.changes.p1")}</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
