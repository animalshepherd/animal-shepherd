export interface AdoptionStep {
  number: number;
  title: string;
  description: string;
}

export const adoptionSteps: AdoptionStep[] = [
  {
    number: 1,
    title: "Adoption Form",
    description:
      "Complete our streamlined 6-field application to share your lifestyle and preferences with our team.",
  },
  {
    number: 2,
    title: "Discovery Call",
    description:
      "We will schedule a brief phone interview to discuss your application and answer any initial questions.",
  },
  {
    number: 3,
    title: "Meet & Greet",
    description:
      "Arrange an appointment to visit the sanctuary, meet our residents, and find your perfect companion.",
  },
  {
    number: 4,
    title: "Finalize",
    description:
      "Once a match is confirmed, we complete the adoption agreement and prepare for your new friend's arrival.",
  },
];
