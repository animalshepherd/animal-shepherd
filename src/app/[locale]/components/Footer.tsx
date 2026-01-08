import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/Button";

interface FooterProps {
  links: { label: string; href: string }[];
}

export const Footer = ({ links }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary py-12 text-primary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-center text-center md:items-start md:text-left lg:col-span-4">
            <Link
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
            </Link>
            <p className="mt-8 max-w-xs text-base leading-relaxed text-primary/80">
              Dedicated to the rescue, rehabilitation, and rehoming of animals
              in need. Every life deserves a second chance.
            </p>
          </div>

          <div className="text-center md:text-left lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation" className="mt-8">
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block text-sm font-medium text-primary/70 transition-colors hover:text-primary py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="text-center md:text-left lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
              Connect
            </h3>
            <div className="mt-8 space-y-8">
              <a
                href="mailto:info@animalshepherd.org"
                className="block text-sm font-medium text-primary/70 hover:text-primary transition-colors"
              >
                info@animalshepherd.org
              </a>
              <div className="flex items-center justify-center gap-4 md:justify-start">
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
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary text-center md:text-left">
              Support Our Mission
            </h3>
            <p className="mt-4 text-xs italic leading-loose text-primary/60 text-center md:text-left">
              Animal Shepherd is a Verified Member of the Google for Nonprofits
              Program.
            </p>
            <Button
              href="https://www.paypal.com/paypalme/animalshepherd"
              variant="primary"
              size="md"
              className="mt-8 w-full text-xs py-4"
            >
              Donate via PayPal
            </Button>
          </div>
        </div>

        <div className="mt-20 border-t border-primary/10 pt-10">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <Image
                src="/logo-pedigree-adoptame.png"
                alt="Pedigree Adóptame Logo"
                height={32}
                width={80}
                className="opacity-80 brightness-0 invert object-contain"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-primary/40">
                Proud Partners of Pedigree Adóptame
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
                Greenhouse Web Designs
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
