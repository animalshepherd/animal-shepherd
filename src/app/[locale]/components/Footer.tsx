"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Link as IntlLink } from "../../../i18n/navigation";
import { Button } from "../components/ui/Button";

interface FooterProps {
  links: { label: string; href: string }[];
}

export const Footer = ({ links }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Navigation");
  const tf = useTranslations("Footer");

  return (
    <footer className="w-full bg-secondary py-12 text-primary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-4">
            <IntlLink
              href="/"
              className="inline-block transition-transform hover:scale-105"
            >
              <div className="relative h-20 w-20">
                <Image
                  src="/animal-shepherd-logo-transparent.png"
                  fill
                  priority
                  alt="Animal Shepherd Logo"
                />
              </div>
            </IntlLink>
            <p className="mt-8 max-w-xs text-base leading-relaxed text-primary/80">
              {tf("description")}
            </p>
          </div>

          <div className="text-center lg:text-left lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
              {tf("quickLinks")}
            </h3>
            <nav aria-label="Footer navigation" className="mt-8">
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <IntlLink
                      href={link.href}
                      className="block text-sm font-medium text-primary/70 transition-colors hover:text-primary py-1"
                    >
                      {t(link.label)}
                    </IntlLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="text-center lg:text-left lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
              {tf("connect")}
            </h3>
            <div className="mt-8 space-y-8">
              <a
                href="mailto:info@animalshepherd.org"
                className="block text-sm font-medium text-primary/70 hover:text-primary transition-colors"
              >
                info@animalshepherd.org
              </a>
              <div className="flex items-center justify-center gap-4 lg:justify-start">
                <Link
                  href="https://instagram.com/animal.shepherd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  aria-label="Instagram"
                >
                  <Image
                    src="/instagram-icon.svg"
                    alt="instagram-icon"
                    height={24}
                    width={24}
                    className="brightness-0 invert"
                  />
                </Link>
                <Link
                  href="https://wa.me/5532760504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  aria-label="WhatsApp"
                >
                  <Image
                    src="/whatsapp-icon.svg"
                    alt="whatsapp-icon"
                    height={24}
                    width={24}
                    className="brightness-0 invert"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ryancosgayaanimalshepherd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/linkedin-icon.svg"
                    alt="linkedin-icon"
                    height={24}
                    width={24}
                    className="brightness-0 invert"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 p-8 border border-white/10 lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary text-center">
              {tf("support")}
            </h3>
            <p className="mt-4 text-sm italic leading-loose text-primary/80 text-center font-semibold">
              {tf("googleMember")}
            </p>
            <Button
              href="https://www.paypal.com/paypalme/animalshepherd"
              variant="primary"
              className="mt-8 w-full text-xs py-4"
            >
              {tf("paypal")}
            </Button>
          </div>
        </div>

        <div className="mt-20 border-t border-primary/10 pt-10">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:text-left">
              <Image
                src="/logo-pedigree-adoptame.png"
                alt="Pedigree Adóptame Logo"
                height={32}
                width={80}
                className="opacity-80 brightness-0 invert object-contain"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-primary/40">
                {tf("partner")}
              </span>
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-primary/30 text-center">
              &copy; {currentYear}{" "}
              <Link
                href="https://www.greenhousewebdesigns.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline decoration-primary/10 underline-offset-8"
              >
                {tf("designBy")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
