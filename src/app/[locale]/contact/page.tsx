"use client";

import Image from "next/image";

import { Button } from "../components/ui/Button";
import { HeroActionBox } from "../components/ui/HeroActionBox";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-primary antialiased">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/animals.webp"
            alt="Contact Animal Shepherd Sanctuary"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 max-w-2xl mx-auto">
            We are always open to new ideas, sharing, and listening to feedback.
            Feel free to send us a message.
          </p>
        </div>
      </section>

      <HeroActionBox
        title="Direct Communication"
        description="If you are interested in the things we do and want to know more, you are just a click away. We are always open to new ideas, sharing and listening to feedback; so, feel free to send us a message."
        buttonLabel="info@animalshepherd.org"
        buttonHref="mailto:info@animalshepherd.org"
        buttonVariant="primary"
      />

      <section className="py-24 px-6 lg:px-20 max-w-4xl mx-auto w-full">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Send a Message
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
        </header>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-secondary-dark uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-2xl bg-secondary/5 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-secondary-dark uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-2xl bg-secondary/5 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-secondary-dark uppercase tracking-wider">
              Subject
            </label>
            <input
              type="text"
              placeholder="How can we help?"
              className="w-full p-4 rounded-2xl bg-secondary/5 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-secondary-dark uppercase tracking-wider">
              Message
            </label>
            <textarea
              rows={6}
              placeholder="Enter your message here..."
              className="w-full p-4 rounded-2xl bg-secondary/5 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
            />
          </div>
          <div className="text-center">
            <Button variant="secondary" href="/donate">
              Send Message
            </Button>
          </div>
        </form>
      </section>

      <section className="bg-secondary/5 py-16 px-6 lg:px-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mt-8">
            <p className="text-secondary-dark font-bold mb-2">
              Sanctuary Hours
            </p>
            <p className="text-secondary">
              Monday — Sunday: 09:00 am - 06:00 pm
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
