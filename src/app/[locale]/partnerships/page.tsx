"use client";

import Image from "next/image";
import { Button } from "../components/ui/Button";
import { HeroActionBox } from "../components/ui/HeroActionBox";

export default function PartnershipsPage() {
  return (
    <div className="flex flex-col w-full bg-primary antialiased">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/animals.webp"
            alt="Animal Shepherd Strategic Alliances"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Strategic Alliances
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 max-w-2xl mx-auto">
            Fostering a vision for shared responsibility through professional
            excellence and coexistence.
          </p>
        </div>
      </section>

      <HeroActionBox
        title="A Vision for Impact"
        description="Animal Shepherd is a non-profit organization dedicated to the protection of animals and nature. We rescue and rehabilitate life while offering high-level consultancy, workshops, and cultural projects."
        buttonLabel="Contact Partnerships"
        buttonHref="mailto:project@animalshepherd.org"
        buttonVariant="primary"
      />

      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6 group">
            <h3 className="text-xl font-bold text-secondary-dark group-hover:text-secondary transition-colors">
              Corporate Wellness
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              Transform your corporate culture in the world’s best office: the
              open field. We offer tailored experiences in mindfulness, stress
              reduction, and animal-assisted therapy that fosters emotional
              support and authentic connection.
            </p>
          </div>

          <div className="space-y-6 group">
            <h3 className="text-xl font-bold text-secondary-dark group-hover:text-secondary transition-colors">
              ESG & Sustainability
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              Invest in measurable results for your brand’s environmental goals.
              Through corporate reforestation and land restoration, we provide
              tangible ways to meet sustainability targets with full
              transparency for your Social Investment (ESG) reports.
            </p>
          </div>

          <div className="space-y-6 group">
            <h3 className="text-xl font-bold text-secondary-dark group-hover:text-secondary transition-colors">
              Education & Exchange
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              We build bridges with universities through specialized workshops.
              From permaculture to animal behavior, our sanctuary serves as a
              living laboratory for environmental management and ethical
              innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24 px-6 lg:px-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <header className="space-y-4">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase opacity-70">
                Art, Culture & Legacy
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                Curating Art to Save Lives
              </h3>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </header>

            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                We integrate Art as a driver for change, starting with an
                international retrospective of{" "}
                <strong>Alejandro Magallanes</strong>, creator of our visual
                identity.
              </p>
              <ul className="space-y-4 border-l border-white/20 pl-6">
                <li className="text-sm italic tracking-wide">
                  <span className="font-bold block text-white not-italic mb-1">
                    Impact:
                  </span>
                  Renowned international artists donating original artwork to
                  fund high-impact surgical units.
                </li>
                <li className="text-sm italic tracking-wide">
                  <span className="font-bold block text-white not-italic mb-1">
                    Global Mandate:
                  </span>
                  Exclusive mandate to manage exhibitions and charitable
                  derivatives for galleries worldwide.
                </li>
                <li className="text-sm italic tracking-wide">
                  <span className="font-bold block text-white not-italic mb-1">
                    Integrity:
                  </span>
                  Managed via Google for Nonprofits framework.
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <p className="text-sm font-bold uppercase tracking-widest text-primary italic">
                &quot;I designed this emblem for Animal Shepherd.&quot;
              </p>
              <p className="text-xs uppercase tracking-widest opacity-50 mt-1">
                — Alejandro Magallanes
              </p>
            </div>
          </div>

          <div className="relative aspect-square bg-primary/5 rounded-[60px] flex items-center justify-center p-12 border border-white/10">
            <div className="relative w-full h-full">
              <Image
                src="/animal-shepherd-logo.jpg"
                alt="Animal Shepherd Emblem by Alejandro Magallanes"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-secondary-dark mb-8">
          Partner with the Guardians
        </h2>
        <p className="text-secondary text-lg mb-12">
          Join a network of global institutions dedicated to professional animal
          welfare and ecological restoration. Let’s build a legacy of
          coexistence together.
        </p>
        <Button
          variant="secondary"
          size="lg"
          href="mailto:project@animalshepherd.org"
          className="px-12"
        >
          Inquire About Strategic Alliances
        </Button>
      </section>
    </div>
  );
}
