import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  links: { label: string; href: string }[];
}

export const Footer = ({ links }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-secondary py-10">
      <div className="max-w-3xl mx-auto flex justify-center items-center mb-8">
        <Link href="/" className="flex items-start">
          <div className="relative h-12 w-12">
            <Image
              src="/animal-shepherd-logo.jpg"
              fill
              priority
              alt="Logo desktop"
            ></Image>
          </div>
        </Link>
      </div>

      <nav aria-label="Footer navigation">
        <ul className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-primary/80 hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="flex justify-center items-center gap-6 mb-8">
        <li>
          <Link
            href="mailto:info@animalshepherd.org"
            aria-label="Email Animal Shepherd"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image src="/email-icon.svg" alt="" height={24} width={24} />
          </Link>
        </li>

        <li>
          <Link
            href="https://instagram.com/animal.shepherd"
            aria-label="Animal Shepherd on Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image src="/instagram-icon.svg" alt="" height={24} width={24} />
          </Link>
        </li>

        <li>
          <Link
            href="https://linkedin.com/company/animalshepherd"
            aria-label="Animal Shepherd on LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image src="/linkedin-icon.svg" alt="" height={24} width={24} />
          </Link>
        </li>

        <li>
          <Link
            href="https://paypal.me/animalshepherd"
            aria-label="Donate via PayPal"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image src="/paypal-icon.svg" alt="" height={24} width={24} />
          </Link>
        </li>

        <li>
          <Link
            href="https://wa.me/XXXXXXXXXX"
            aria-label="Contact Animal Shepherd on WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image src="/whatsapp-icon.svg" alt="" height={24} width={24} />
          </Link>
        </li>
      </ul>

      <div className="flex flex-col justify-center items-center mb-8">
        <Image
          src="/logo-pedigree-adoptame.png"
          alt="Pedigree Adoptame Logo"
          height={96}
          width={96}
        ></Image>
        <p className="text-xs text-primary/70 mt-2">
          Proud partners of Pedigree Adoptame
        </p>
      </div>

      <div className="flex flex-row justify-center items-center pb-2">
        <p className="text-center md:text-left text-sm">
          &copy; {currentYear}{" "}
          <Link
            href="https://www.greenhousewebdesigns.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Greenhouse Web Designs
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};
