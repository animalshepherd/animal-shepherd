"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from "next-intl";
import { Button } from "./ui/Button";
import { LanguageSwitcher } from "../components/LangToggle";

interface NavBarProps {
  links: { label: string; href: string }[];
}

export const NavBar = ({ links }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const t = useTranslations("Navigation");
  const b = useTranslations("Buttons");

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-16 border-b border-secondary-dark bg-secondary">
      <div className="mx-auto flex h-full max-w-7xl items-center px-4 xl:px-0">
        <div className="flex flex-1 items-center justify-start">
          <Link
            href="/"
            className="flex items-center transition-transform hover:scale-105"
            onClick={closeMenu}
          >
            <div className="relative h-12 w-12">
              <Image
                src="/animal-shepherd-logo-no-text-transparent.png"
                fill
                priority
                alt="Logo Nav"
              />
            </div>
          </Link>
        </div>

        <nav className="hidden lg:flex flex-2 items-center justify-center">
          <ul className="flex items-center gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-primary text-sm font-bold transition-opacity hover:opacity-70 whitespace-nowrap"
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>

          <div className="hidden md:block">
            <Button
              variant="primary"
              href="/donate"
              size="sm"
              className="uppercase tracking-widest whitespace-nowrap"
            >
              {b("donate")}
            </Button>
          </div>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-primary transition-colors hover:bg-secondary-dark lg:hidden"
            aria-expanded={isOpen}
          >
            <span className="sr-only">
              {isOpen ? t("closeMenu") : t("openMenu")}
            </span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-16 z-40 bg-secondary transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex h-full flex-col p-8">
          <ul className="flex flex-col gap-6">
            {links.map((link) => (
              <li
                key={link.label}
                className="border-b border-secondary-dark/20 pb-4"
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block w-full text-2xl font-bold tracking-tight text-primary"
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-6 pb-12">
            <Button
              variant="primary"
              href="/donate"
              className="w-full py-5 uppercase tracking-widest"
              onClick={closeMenu}
            >
              {b("donate")}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
