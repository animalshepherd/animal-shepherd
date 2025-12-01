import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  links: { label: string; href: string }[];
}

export const Footer = ({ links }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-secondary">
      <div className="max-w-3xl mx-auto py-4 flex justify-center items-center">
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
        <ul className="flex flex-col md:flex-row items-center justify-center gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-row justify-center items-center">
        <p className="text-center md:text-left text-sm">
          &copy; {currentYear}
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
