export interface TeamMember {
  name: string;
  email: string;
  role: string;
  roleKey: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Daniel Rossi",
    email: "adopt@animalshepherd.org",
    role: "Adoption Management",
    roleKey: "adopt",
  },
  {
    name: "Alexander Müller",
    email: "admin@animalshepherd.org",
    role: "Administration & Finance",
    roleKey: "admin",
  },
  {
    name: "Luca Serra",
    email: "art@animalshepherd.org",
    role: "Cultural Projects & Design",
    roleKey: "art",
  },
  {
    name: "Oliver Martin",
    email: "info@animalshepherd.org",
    role: "General Information & Inquiries",
    roleKey: "info",
  },
  {
    name: "Eric Smith",
    email: "media@animalshepherd.org",
    role: "Media Relations & Outreach",
    roleKey: "media",
  },
  {
    name: "Martina Costa",
    email: "press@animalshepherd.org",
    role: "Press & Communications",
    roleKey: "press",
  },
  {
    name: "Isabella Dubois",
    email: "project@animalshepherd.org",
    role: "Project Coordination",
    roleKey: "project",
  },
  {
    name: "Elena Larsson",
    email: "expos@animalshepherd.org",
    role: "Art & Legacy Curation",
    roleKey: "expos",
  },
  {
    name: "Angie Vite",
    email: "angie@animalshepherd.org",
    role: "Executive Coordinator",
    roleKey: "executive",
  },
];
