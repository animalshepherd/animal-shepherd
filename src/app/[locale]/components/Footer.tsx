import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  links: { label: string; href: string }[];
}

export const Footer = ({ links }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="mb-12">
          <Link href="/" className="transition-opacity hover:opacity-90">
            <div className="relative h-14 w-14">
              <Image
                src="/animal-shepherd-logo.jpg"
                fill
                priority
                alt="Animal Shepherd Logo"
                className="rounded-full"
              />
            </div>
          </Link>
        </div>

        <nav aria-label="Footer navigation" className="mb-10">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-primary/70 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex justify-center items-center gap-8 mb-16">
          <li>
            <a
              href="mailto:info@animalshepherd.org"
              className="opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Email"
            >
              <Image src="/email-icon.svg" alt="" height={22} width={22} />
            </a>
          </li>
          <li>
            <Link
              href="https://instagram.com/animal.shepherd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image src="/instagram-icon.svg" alt="" height={22} width={22} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/ryancosgayaanimalshepherd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image src="/linkedin-icon.svg" alt="" height={22} width={22} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.paypal.com/paypalme/animalshepherd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PayPal"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image src="/paypal-icon.svg" alt="" height={22} width={22} />
            </Link>
          </li>
          <li>
            <Link
              href="https://wa.me/5532760504"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image src="/whatsapp-icon.svg" alt="" height={22} width={22} />
            </Link>
          </li>
        </ul>

        <div className="w-full max-w-2xl border-t border-primary/10 pt-12 flex flex-col items-center text-center space-y-8">
          <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary/90">
            Animal Shepherd is a Verified Member of the Google for Nonprofits
            Program
          </p>

          <div className="flex flex-col items-center opacity-85 scale-90">
            <Image
              src="/logo-pedigree-adoptame.png"
              alt="Pedigree Adóptame Logo"
              height={70}
              width={70}
              className="brightness-0"
            />
            <p className="text-[10px] uppercase tracking-widest text-primary/60 mt-4">
              Proud Partners of Pedigree Adóptame
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/5 w-full text-center">
          <p className="text-[10px] text-primary/40 uppercase tracking-widest">
            &copy; {currentYear}{" "}
            <Link
              href="https://www.greenhousewebdesigns.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Greenhouse Web Designs
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
