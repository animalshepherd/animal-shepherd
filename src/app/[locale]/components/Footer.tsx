import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  links: { label: string; href: string }[];
}

export const Footer = ({ links }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-secondary">
      <div className="max-w-3xl mx-auto mb-6 flex justify-center items-center">
        <Link href="/" className="flex items-start">
          <div className="md:px-8 py-3">
            <div className="relative h-12 w-12">
              <Image
                src="/animal-shepherd-logo.jpg"
                fill
                priority
                alt="Logo desktop"
              ></Image>
            </div>
          </div>
        </Link>
      </div>

      <nav>
        <ul className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-row justify-center items-center gap-4 mb-6">
        <Image
          src="/email-icon.svg"
          alt="Email Icon"
          height={24}
          width={24}
        ></Image>

        <Image
          src="/instagram-icon.svg"
          alt="Instagram Icon"
          height={24}
          width={24}
        ></Image>

        <Image
          src="/linkedin-icon.svg"
          alt="LinkedIn Icon"
          height={24}
          width={24}
        ></Image>

        <Image
          src="/paypal-icon.svg"
          alt="PayPal Icon"
          height={24}
          width={24}
        ></Image>

        <Image
          src="/whatsapp-icon.svg"
          alt="WhatsApp Icon"
          height={24}
          width={24}
        ></Image>
      </div>

      <div className="flex flex-row justify-center items-center mb-6">
        <Image
          src="/logo-pedigree-adoptame.png"
          alt="Pedigree Adoptame Logo"
          height={72}
          width={72}
        ></Image>
      </div>

      <div className="flex flex-row justify-center items-center">
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
