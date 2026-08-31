// PLACEHOLDER CONTENT — replace every field below with your real info.

export const profile = {
  name: "Your Name",
  title: "Your Title (e.g. Software Engineer / Researcher)",
  tagline: "One sentence describing what you do and what you're focused on.",
  bio: [
    "Paragraph one of your bio: background, current role, and what drives your work.",
    "Paragraph two: notable experience, interests, or what you're currently exploring.",
  ],
  location: "City, Country",
  resumeUrl: "/resume.pdf",
  avatarUrl: "https://avatars.githubusercontent.com/u/78790297?v=4",
};

export const socials = {
  email: "ritvikmahapatra4@gmail.com",
  github: "https://github.com/ritvik-123",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "Short description of what this project does and why it's interesting.",
    tags: ["TypeScript", "Next.js"],
    link: "https://example.com",
    repo: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description: "Short description of what this project does and why it's interesting.",
    tags: ["Python", "Machine Learning"],
    repo: "https://github.com/yourusername/project-two",
  },
];

export type Paper = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  abstract?: string;
};

export const papers: Paper[] = [
  {
    title: "Title of Your Paper",
    authors: "Your Name, Co-Author Name",
    venue: "Conference / Journal Name",
    year: "2026",
    link: "https://example.com/paper.pdf",
    abstract: "One or two sentences summarizing the paper's contribution.",
  },
];
