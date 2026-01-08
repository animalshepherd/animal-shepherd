"use client";

import Image from "next/image";
import { AnimalCard } from "../components/ui/AnimalCard";
import { HeroActionBox } from "../components/ui/HeroActionBox";
import { Button } from "../components/ui/Button";

import { animals } from "@/data/animals";
import { adoptionSteps } from "@/data/steps";

export default function AdoptPage() {
  return (
    <div className="flex flex-col w-full bg-primary antialiased">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dog-55.webp"
            alt="A happy rescued dog at the sanctuary"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Adopt and Change a Life
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 max-w-2xl mx-auto">
            Every animal deserves security, compassion, and a place to thrive.
            Find your new companion and help us make room for another rescue.
          </p>
        </div>
      </section>

      <HeroActionBox
        title="A Lifelong Commitment"
        description="Our adoption process is thoughtful and focused on the long-term well-being of each animal. We work closely with you to ensure a responsible match for your lifestyle and their specific needs."
        buttonLabel="Start Application"
        buttonHref="#adoption-form"
        buttonVariant="primary"
      />

      <section
        id="meet-the-family"
        className="py-24 px-6 lg:px-20 max-w-screen-2xl mx-auto w-full scroll-mt-20"
      >
        <header className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark">
            Meet the Family: Past & Present
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
          <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            Each face below represents a life protected by our community. These
            are the individuals who have called Animal Shepherd home, from those
            currently seeking families to our cherished success stories.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {animals.map((animal) => (
            <AnimalCard key={animal.src} src={animal.src} alt={animal.alt} />
          ))}
        </div>
      </section>

      <section className="bg-parchment py-24 px-6 lg:px-20 border-y border-secondary/5">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
              How to Adopt
            </h2>
            <div className="h-1.5 w-20 bg-secondary mx-auto rounded-full" />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adoptionSteps.map((step) => (
              <div
                key={step.number}
                className="relative p-8 bg-primary border border-secondary/10 rounded-3xl shadow-sm transition-all hover:shadow-md"
              >
                <span className="absolute -top-4 left-8 bg-secondary text-primary font-bold px-4 py-1 rounded-full text-xs">
                  Step {step.number}
                </span>
                <h3 className="text-lg font-bold text-secondary-dark mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary leading-relaxed text-sm opacity-80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <header className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-dark mb-4">
                Adoption Fees
              </h2>
              <p className="text-secondary text-sm max-w-md mx-auto">
                These fees help cover testing (FIV/Leukemia), vaccines, parasite
                treatment, spay/neuter, and microchipping.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
              <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                <p className="text-xs uppercase font-bold text-secondary/60 mb-1">
                  Cat / Kitten
                </p>
                <p className="text-3xl font-bold text-secondary-dark">$150</p>
              </div>
              <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                <p className="text-xs uppercase font-bold text-secondary/60 mb-1">
                  Dog / Puppy
                </p>
                <p className="text-3xl font-bold text-secondary-dark">$200</p>
              </div>
              <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                <p className="text-xs uppercase font-bold text-secondary/60 mb-1">
                  Pair of Cats/Dogs
                </p>
                <p className="text-3xl font-bold text-secondary-dark">$250</p>
              </div>
            </div>

            <div className="text-center space-y-8">
              <p className="text-sm text-secondary italic opacity-70">
                * Fees may vary based on special medical requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="adoption-form"
        className="py-24 px-6 lg:px-20 bg-primary scroll-mt-10"
      >
        <div className="max-w-4xl mx-auto w-full">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-6">
              Animal Adoption Application
            </h2>
            <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Thank you for choosing to save a life. This form is the first
              step. If your profile is a match, we will contact you for a
              detailed interview and a virtual home visit.
            </p>
          </header>

          <form className="bg-parchment/30 p-8 md:p-12 rounded-3xl border border-secondary/5 shadow-xs">
            <div className="grid grid-cols-1 gap-10">
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  1. What animal do you want to adopt and why? *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Cat or Dog and your main reason for adopting"
                  className="w-full p-4 rounded-2xl bg-primary border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none text-secondary"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  2. Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="First and last name"
                  className="w-full p-4 rounded-2xl bg-primary border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-secondary"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  3. Contact Information *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Phone, Email, and @Instagram"
                  className="w-full p-4 rounded-2xl bg-primary border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-secondary"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  4. Location *
                </label>
                <input
                  required
                  type="text"
                  placeholder="City, Borough/Area, and Neighborhood"
                  className="w-full p-4 rounded-2xl bg-primary border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-secondary"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  5. Housing & Household *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="House or apartment? / Owned or rented? / Do you live with children or other pets?"
                  className="w-full p-4 rounded-2xl bg-primary border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none text-secondary"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  6. Lifestyle & Routine *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="How many hours will the pet be alone daily and where will they sleep?"
                  className="w-full p-4 rounded-2xl bg-primary border border-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none text-secondary"
                />
              </div>

              <div className="flex flex-col items-center gap-6 pt-10 border-t border-secondary/10">
                {/* update button for the on submit */}
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-16"
                  href="/getinvolved"
                >
                  Submit Application
                </Button>
                <p className="text-xs text-secondary/50 uppercase tracking-widest text-center leading-relaxed">
                  By clicking submit, I accept the privacy terms and conditions
                  of Animal Shepherd AC.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
