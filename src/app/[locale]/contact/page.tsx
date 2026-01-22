"use client";

import { useActionState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { teamMembers } from "@/data/team";
import { Button } from "../components/ui/Button";
import { HeroActionBox } from "../components/ui/HeroActionBox";
import { sendContactEmail, FormState } from "../../actions/email";

const initialState: FormState = {
  success: false,
  error: "",
};

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      alert("Message sent successfully!");
      formRef.current?.reset();
    } else if (state.error) {
      alert(state.error);
    }
  }, [state.success, state.error]);

  return (
    <div className="flex flex-col w-full bg-primary antialiased">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dogs.webp"
            alt="Dogs relaxing in the sanctuary"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            {t("Hero.title")}
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 max-w-2xl mx-auto">
            {t("Hero.paragraph")}
          </p>
        </div>
      </section>

      <HeroActionBox
        title={t("HeroAction.title")}
        description={t("HeroAction.description")}
        buttonLabel="info@animalshepherd.org"
        buttonHref="mailto:info@animalshepherd.org"
        buttonVariant="primary"
      />

      <section className="py-16 sm:py-20 px-6 lg:px-20 max-w-7xl mx-auto w-full">
        <header className="text-center mb-16">
          <h2 className="text-xs font-bold text-secondary tracking-widest uppercase mb-4">
            {t("Team.tag")}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-6">
            {t("Team.title")}
          </h3>
          <p className="text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            {t("Team.description")}
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mt-8" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.email}
              className="p-8 bg-secondary/5 rounded-3xl border border-gray-100 flex flex-col items-center text-center"
            >
              <p className="font-bold text-secondary-dark text-lg mb-1">
                {member.name}
              </p>
              <p className="text-secondary/60 text-[10px] uppercase tracking-widest font-bold mb-6">
                {t(`Team.roles.${member.roleKey}`)}
              </p>
              <a
                href={`mailto:${member.email}`}
                className="text-sm font-medium text-secondary hover:text-secondary-dark transition-colors border-b border-secondary/10 hover:border-secondary-dark pb-1"
              >
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/5 py-16 sm:py-20 px-6 lg:px-20 border-y border-gray-100">
        <div className="max-w-4xl mx-auto w-full">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
              {t("Form.title")}
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
          </header>

          <form ref={formRef} action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-2"
                >
                  {t("Form.labels.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  defaultValue={state.fields?.name}
                  placeholder={t("Form.labels.name_placeholder")}
                  className="w-full p-4 rounded-2xl bg-primary border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-2"
                >
                  {t("Form.labels.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  defaultValue={state.fields?.email}
                  placeholder={t("Form.labels.email_placeholder")}
                  className="w-full p-4 rounded-2xl bg-primary border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-2"
              >
                {t("Form.labels.subject")}
              </label>
              <input
                id="subject"
                name="subject"
                required
                type="text"
                defaultValue={state.fields?.subject}
                placeholder={t("Form.labels.subject_placeholder")}
                className="w-full p-4 rounded-2xl bg-primary border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs font-bold text-secondary-dark uppercase tracking-widest ml-2"
              >
                {t("Form.labels.message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                defaultValue={state.fields?.message}
                placeholder={t("Form.labels.message_placeholder")}
                className="w-full p-4 rounded-2xl bg-primary border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
              />
            </div>
            <div className="text-center pt-4">
              <Button
                variant="secondary"
                size="lg"
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Sending..." : t("Form.labels.submit")}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-6 lg:px-20 max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary-dark uppercase tracking-widest">
              {t("Info.visitTitle")}
            </h2>
            <div className="h-1 w-12 bg-secondary mx-auto rounded-full" />
            <p className="text-secondary-dark font-medium italic">
              {t("Info.appointment")}
            </p>
            <p className="text-secondary leading-relaxed">
              {t("Info.address")}
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary-dark uppercase tracking-widest">
              {t("Info.hoursTitle")}
            </h2>
            <div className="h-1 w-12 bg-secondary mx-auto rounded-full" />
            <p className="text-secondary leading-relaxed pt-2">
              {t("Info.days")}
              <br />
              {t("Info.time")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
