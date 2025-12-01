import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Adopt", href: "/adopt" },
  { label: "Get Involved", href: "/getinvolved" },
  { label: "About", href: "/about" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <NavBar links={navLinks} />
      {children}
      <Footer links={navLinks} />
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return routing.locales.map((l) => ({ locale: l }));
}
