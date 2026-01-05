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
          <div className="absolute inset-0 bg-black/40" />
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

      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            How to Adopt
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {adoptionSteps.map((step) => (
            <div
              key={step.number}
              className="relative p-8 bg-primary border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <span className="absolute -top-4 left-8 bg-secondary text-primary font-bold px-4 py-1 rounded-full text-sm">
                Step {step.number}
              </span>
              <h3 className="text-xl font-bold text-secondary-dark mt-4 mb-3 group-hover:text-secondary transition-colors">
                {step.title}
              </h3>
              <p className="text-secondary leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="adoption-form"
        className="bg-secondary/5 py-24 px-6 lg:px-20 border-y border-gray-100 scroll-mt-10"
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
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full mt-8" />
          </header>

          <form className="bg-primary p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 gap-10">
              <div className="flex flex-col gap-3">
                <label className="text-[11px] font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  1. Who do you want to adopt and why? *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Cat or Dog and your main reason for adopting"
                  className="w-full p-4 rounded-2xl bg-secondary/5 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[11px] font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  2. Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="First and last name"
                  className="w-full p-4 rounded-2xl bg-secondary/5 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[11px] font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  3. Contact Information *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Phone, Email, and @Instagram"
                  className="w-full p-4 rounded-2xl bg-secondary/5 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[11px] font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  4. Location *
                </label>
                <input
                  required
                  type="text"
                  placeholder="City, Borough/Area, and Neighborhood"
                  className="w-full p-4 rounded-2xl bg-secondary/5 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[11px] font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  5. Housing & Household *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="House or apartment? / Owned or rented? / Do you live with children or other pets?"
                  className="w-full p-4 rounded-2xl bg-secondary/5 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[11px] font-bold text-secondary-dark uppercase tracking-widest ml-1">
                  6. Lifestyle & Routine *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="How many hours will the pet be alone daily and where will they sleep?"
                  className="w-full p-4 rounded-2xl bg-secondary/5 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                />
              </div>

              <div className="flex flex-col items-center gap-6 pt-6 border-t border-secondary/5">
                {/* update button for the on submit */}
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-16"
                  href="/getinvolved"
                >
                  Submit Application
                </Button>
                <p className="text-[10px] text-secondary/50 uppercase tracking-[0.2em] text-center leading-relaxed">
                  By clicking submit, I accept the privacy terms and conditions
                  of Animal Shepherd AC.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section
        id="meet-the-family"
        className="py-24 px-6 lg:px-20 max-w-screen-2xl mx-auto w-full scroll-mt-20"
      >
        <header className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark">
            Meet the Family: Past & Present
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
          <p className="text-secondary max-w-2xl mx-auto text-lg">
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
    </div>
  );
}
