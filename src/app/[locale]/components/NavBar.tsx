"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/Button";
import { LanguageSwitcher } from "../components/LangToggle";

interface NavBarProps {
  links: { label: string; href: string }[];
}

export const NavBar = ({ links }: NavBarProps) => {
  const clickButton = () => {
    console.log("hit");
  };

  return (
    <header className="bg-secondary fixed w-full z-20 top-0 left-0 border-b border-secondary-dark h-16">
      <div className="max-w-7xl grid grid-cols-2 lg:grid-cols-3 items-center h-full mx-auto px-4 xl:px-0">
        <Link href="/" className="flex items-center justify-start">
          <div className="flex items-center h-full">
            <div className="relative h-10 w-10">
              <Image
                src="/animal-shepherd-logo.jpg"
                fill
                priority
                alt="Logo Nav"
              ></Image>
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex justify-center">
          <ul className="flex items-center gap-6 font-medium">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-primary font-semibold whitespace-nowrap hover:opacity-80 transition-opacity"
                  aria-current="page"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-4 col-span-1 md:col-span-1">
          <LanguageSwitcher />
          <Button variant="primary" onClick={clickButton}>
            Donate
          </Button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg lg:hidden hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-dark"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
