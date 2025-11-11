"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../../../i18n/routing";

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const locales = ["en", "es"];

  function handleSwitch(nextLocale: string) {
    if (nextLocale === locale) return;
    router.replace({ pathname }, { locale: nextLocale });
  }

  return (
    <div className="flex items-center gap-2 mr-4">
      {locales.map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => handleSwitch(lng)}
          className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors duration-200
            ${
              locale === lng
                ? "bg-primary text-secondary-dark"
                : "bg-transparent text-primary hover:bg-secondary-dark hover:text-primary"
            }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
