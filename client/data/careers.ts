export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export const OPEN_POSITIONS: JobPosition[] = [
  {
    id: "senior-civil-engineer",
    title: "Senior Civil Engineer",
    department: "Engineering",
    location: "Austin, TX",
    type: "Full-time",
    description: "Lead civil engineering projects from concept through construction. Requires 8+ years of experience and PE license."
  },
  {
    id: "cad-technician",
    title: "CAD Technician / Drafter",
    department: "Design",
    location: "Sydney, AU",
    type: "Full-time",
    description: "Create highly detailed structural and civil CAD drawings for major commercial projects."
  },
  {
    id: "project-manager",
    title: "Project Manager",
    department: "Management",
    location: "Singapore",
    type: "Full-time",
    description: "Oversee international infrastructure projects, manage budgets, and ensure cross-functional team alignment."
  },
  {
    id: "land-surveyor",
    title: "Licensed Land Surveyor",
    department: "Surveying",
    location: "Austin, TX",
    type: "Full-time",
    description: "Conduct boundary, topographic, and construction surveys. Must have RPLS certification."
  }
];

export const BENEFITS = [
  "Comprehensive Healthcare",
  "Generous PTO & Paid Holidays",
  "Professional Development Stipend",
  "Flexible Hybrid Work Model",
  "Performance Bonuses",
  "Global Relocation Opportunities"
];
