"use client";

import Image from "next/image";

import { HeroActionBox } from "../components/ui/HeroActionBox";

export default function DonatePage() {
  return (
    <div className="flex flex-col w-full bg-primary antialiased">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cat-25.webp"
            alt="Animal Shepherd sanctuary residents"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Every Life is Precious
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 max-w-2xl mx-auto">
            Animal Shepherd relies on the support of animal-loving friends in
            our community. Your contribution directly funds the safety and care
            of every resident.
          </p>
        </div>
      </section>

      <HeroActionBox
        title="Make a Transformation Possible"
        description="Choose between a one-time gift or become a Sustaining Supporter with a recurring monthly donation to ensure long-term stability for our rescues. Every dollar given goes directly to the animals, providing them with the medical care, food, and shelter they deserve."
        buttonLabel="Donate via PayPal"
        buttonHref="https://www.paypal.me/animalshepherd"
        buttonVariant="primary"
      />

      <section className="py-24 px-6 lg:px-20 max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            How Your Support Is Used
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
        </header>

        <div className="space-y-8 text-secondary text-lg leading-relaxed text-center">
          <p>
            All funds used to feed and provide veterinary care for the animals
            come through our own personal savings, the earnings of our public
            services, and private donations. With a strict no-kill philosophy,
            every resident at Animal Shepherd is cared for until a permanent
            home is found.
          </p>
          <p>
            While the sanctuary is not open to the general public, founders,
            donors, and regular supporters are invited to visit once a month by
            appointment between 09:00 am and 06:00 pm.
          </p>
        </div>
      </section>

      <section className="bg-secondary/5 py-24 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-dark mb-10 text-center">
              Direct Bank Transfer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-center">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-bold text-secondary/50">
                  Bank
                </p>
                <p className="text-lg font-medium text-secondary-dark">
                  Banco Santander (México) S.A.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-bold text-secondary/50">
                  Account Holder
                </p>
                <p className="text-lg font-medium text-secondary-dark">
                  Ryan Cosgaya
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-bold text-secondary/50">
                  Account Number / CLABE
                </p>
                <p className="text-lg font-mono font-medium text-secondary-dark tracking-tight">
                  014580200047831470
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider font-bold text-secondary/50">
                  Swift Code
                </p>
                <p className="text-lg font-mono font-medium text-secondary-dark">
                  BSCHESMM
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
              <p className="text-sm text-secondary/70 italic">
                Please include your name as a reference so we may properly
                acknowledge your gift.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Other Ways to Help
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-primary border border-gray-100 rounded-3xl text-center space-y-4">
            <h3 className="font-bold text-secondary-dark text-xl">
              Sponsor a Resident
            </h3>
            <p className="text-secondary text-sm">
              Provide monthly support specifically for one animal&apos;s food
              and medical needs.
            </p>
          </div>
          <div className="p-8 bg-primary border border-gray-100 rounded-3xl text-center space-y-4">
            <h3 className="font-bold text-secondary-dark text-xl">
              Donate Supplies
            </h3>
            <p className="text-secondary text-sm">
              We are always in need of high-quality food, bedding, and medical
              supplies for our sanctuary.
            </p>
          </div>
          <div className="p-8 bg-primary border border-gray-100 rounded-3xl text-center space-y-4">
            <h3 className="font-bold text-secondary-dark text-xl">
              Legacy Giving
            </h3>
            <p className="text-secondary text-sm">
              Include Animal Shepherd in your estate planning to ensure the
              future of our mission.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
