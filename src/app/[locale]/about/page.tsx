"use client";

import Image from "next/image";
import { Button } from "../components/ui/Button";
import { HeroActionBox } from "../components/ui/HeroActionBox";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-primary antialiased">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/owner-dog-14.webp"
            alt="The peaceful grounds of Animal Shepherd sanctuary"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Our Mission
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 max-w-2xl mx-auto">
            Fighting for the abandoned, neglected, and injured. We believe every
            life is precious and deserves a chance to thrive.
          </p>
        </div>
      </section>

      <HeroActionBox
        title="Who We Are"
        description="Animal Shepherd is a non-profit, no-kill animal rescue organization committed to animals living with challenges that would otherwise leave them without a chance. From rescue to rehabilitation, we provide a no-cage sanctuary where they can live safely and free from harm."
        buttonLabel="Get Involved"
        buttonHref="/getinvolved"
      />

      <section className="bg-primary py-16 md:py-24 px-6 lg:px-20 border-b border-secondary/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Our Impact & Responsibility
          </h2>
          <div className="text-secondary text-lg leading-relaxed space-y-6">
            <p>
              Each year, we save the lives of more than 200 homeless animals and
              provide daily care for approximately 60 dogs, 40 cats, and
              additional farm residents. Every life is treated with dignity,
              patience, and long-term commitment.
            </p>
            <p className="text-base opacity-80 italic">
              Beyond rescue, we are responsible for investigating cases of
              neglect and abuse. Our work extends to managing feral populations
              and providing alternatives for animals facing euthanasia, focusing
              on prevention and long-term education.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-parchment py-16 md:py-24 px-6 lg:px-20 border-b border-secondary/5">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4 uppercase tracking-wide">
              Our Pillars of Care
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
            <p className="text-secondary max-w-2xl mx-auto mt-6 text-sm md:text-base">
              Our work is structured across three strategic areas to ensure a
              comprehensive approach to animal welfare and community
              sustainability.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-primary-dark/20 border border-secondary-dark/10 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-secondary-dark mb-4 uppercase tracking-wider">
                Rescue & Clinical
              </h3>
              <ul className="space-y-3 text-secondary-dark text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  24-hour emergency response services
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  Veterinary care and spay/neuter programs
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  Adoption and rehabilitation services
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  Hospice care and specialized medical support
                </li>
              </ul>
            </div>

            <div className="p-8 bg-primary-dark/20 border border-secondary-dark/10 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-secondary-dark mb-4 uppercase tracking-wider">
                Sanctuary & Wellness
              </h3>
              <ul className="space-y-3 text-secondary-dark text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  Farm sanctuary and animal shelter
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  Pet hotel, eco camping, and lodging
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  Animal-assisted therapy center
                </li>
              </ul>
            </div>

            <div className="p-8 bg-primary-dark/20 border border-secondary-dark/10 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-secondary-dark mb-4 uppercase tracking-wider">
                Advocacy & Outreach
              </h3>
              <ul className="space-y-3 text-secondary-dark text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  Dog training and behavioral programs
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  Permaculture and sustainable living workshops
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  Community consulting and animal advocacy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24 px-6 lg:px-20 text-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold uppercase tracking-widest">
            Our Sanctuary
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
          <div className="text-lg leading-relaxed space-y-6 opacity-95">
            <p>
              What began as a mission to help cats, dogs, and farm animals has
              grown into a multifaceted sanctuary. Today, Animal Shepherd
              operates a no-cage shelter, pet-assisted therapy center, and
              eco-friendly retreat. Our facilities consist of three main
              buildings and smaller structures designed for comfort, healing,
              and fresh-air access.
            </p>
            <p className="italic opacity-80 text-base text-primary/80">
              Visitors often describe our space as a place of calm. It is a
              refuge where compassion, care, and respect for life are felt
              immediately upon arrival.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:mb-32">
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="text-xs font-bold text-secondary tracking-widest uppercase">
              NATURE & HABITAT
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark uppercase tracking-tight">
              A Legacy of Conservation
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto lg:mx-0 rounded-full" />
            <p className="text-secondary text-lg leading-relaxed">
              Beyond our sanctuary walls, we are dedicated to the protection of
              the ecosystems that sustain all life. Our commitment to the planet
              is as deep as our commitment to its animals. We manage an
              ecological reserve where biodiversity is protected and the natural
              landscape is allowed to flourish.
            </p>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/cat-17.webp"
              alt="Cat in nature"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl order-last lg:order-first">
            <Image
              src="/owner-dog-30.webp"
              alt="Founder of Animal Shepherd with a rescue animal"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <h3 className="text-xs font-bold text-secondary tracking-widest uppercase">
              LAND RESTORATION
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark uppercase tracking-tight">
              Restoring Ecosystems
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto lg:mx-0 rounded-full" />

            <div className="text-secondary text-lg leading-relaxed space-y-4">
              <p>
                Since 2015, we have been actively restoring over 80 hectares of
                local ecosystems. Through strategic reforestation, we have
                planted approximately 5,000 trees, creating a
                carbon-sequestering landscape that serves as a permanent refuge
                for both rescued and wild species.
              </p>
              <p>
                Our approach combines permaculture with environmental management
                to ensure a sustainable future.
              </p>
            </div>

            <blockquote className="border-l-4 border-secondary pl-6 italic text-secondary-dark font-medium py-2 text-left">
              &quot;We promote a deep respect for life and the world we share,
              fostering an ethic of coexistence and shared responsibility.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-primary/90 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-xs font-bold tracking-widest text-primary/40 uppercase mb-6">
            Dedication
          </h2>
          <div className="space-y-4">
            <p className="text-xs italic leading-loose">
              This project is dedicated to the memory of Cioli, &quot;Savior of
              100 lives.&quot; On the shores of Santander, forged by the
              freezing waters of the Bay of Biscay, a young kid born in The
              Netherlands named Ryan learned from this man that duty is
              non-negotiable and that life is defended in silence.
            </p>
            <p className="text-xs italic leading-loose">
              That boy was his best disciple. Today, under the Mexican sky, that
              same will has saved over 1,000 lives.
            </p>
            <p className="pt-2 text-xs font-bold uppercase tracking-widest text-primary">
              Thank you Cioli. The watch continues.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary border-t border-secondary/5">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-secondary-dark mb-6 uppercase tracking-wide">
            Join Our Mission
          </h2>
          <p className="text-secondary mb-12 text-lg">
            There are many ways to support our residents. Whether through
            adoption, volunteering, or donating, you can help us continue our
            commitment to rescue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              variant="primary"
              href="/getinvolved"
              className="px-12 py-4"
            >
              Get Involved
            </Button>
            <Button variant="secondary" href="/adopt" className="px-12 py-4">
              Learn About Adopting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
