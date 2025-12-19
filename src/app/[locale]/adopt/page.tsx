"use client";

import Image from "next/image";

import { Button } from "../components/ui/Button";
import { AnimalCard } from "../components/ui/AnimalCard";

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

      <section className="relative z-10 -mt-12 px-6 lg:px-20 max-w-6xl mx-auto w-full">
        <div className="bg-secondary p-8 md:p-12 rounded-3xl shadow-2xl text-center">
          <h2 className="text-primary text-2xl md:text-3xl font-bold mb-6">
            A Lifelong Commitment
          </h2>
          <p className="text-primary/90 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Our adoption process is thoughtful and focused on the long-term
            well-being of each animal. We work closely with you to ensure a
            responsible match for your lifestyle and their specific needs.
          </p>
          <Button variant="primary" href="/forms/contrato_de_adopción.pdf">
            Download Application
          </Button>
        </div>
      </section>

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

      <section className="bg-secondary/5 py-24 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-secondary-dark">
            Commitment to Care
          </h2>
          <div className="text-secondary text-lg leading-relaxed space-y-6">
            <p>
              We are committed to helping you find the right dog, cat, or farm
              resident for your family. After reviewing your application, our
              team will be in touch to discuss next steps, answer questions, and
              arrange introductions.
            </p>
            <p>
              Adoption isn&apos;t just about finding a pet; it&apos;s about
              saving a life. Every adoption from Animal Shepherd creates a
              vacancy that allows us to rescue another animal in urgent need.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 lg:px-20 max-w-screen-2xl mx-auto w-full">
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
