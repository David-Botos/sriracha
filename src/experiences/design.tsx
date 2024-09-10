interface Example {
  startDate: Date;
  endDate: Date;
  title: string;
  job: string;
  description: string;
  url?: string;
  icon?: string;
  hasSamples: boolean;
}

export const designExperiences: Example[] = [
  {
    startDate: new Date("March 1, 2023"),
    endDate: new Date("June 1 2024"),
    title: "Co-Founder",
    job: "Jetpack",
    description: `Formalized my design to code handoff process. Designed every screen of the mobile and desktop apps for a cross-platform solution to help travel advisors accomplish their major job responsibilities on the go or at home with an interface that innovated on both the design and experience of working with luxury travel clients.`,
    hasSamples: true,
  },
  {
    startDate: new Date("September 1, 2022"),
    endDate: new Date("July 1 2023"),
    title: "Co-Founder",
    job: "Canopay",
    description: `Worked on my design to code handoff process. Led team discussions and customer interviews to extract insights about points optimizing travelers, turning user requests into an innovative interface that went further than any other product on the market.`,
    hasSamples: true,
  },
  {
    startDate: new Date("March 1, 2020"),
    endDate: new Date("May 1, 2022"),
    title: "Founder",
    job: "Helix",
    description: `This was my first experience designing interfaces where I provided an engineer with basic guidance on how an in-browser IDE should work for a hackathon run for Lyft.`,
    hasSamples: false,
  },
];
