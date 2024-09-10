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

export const reactExperiences: Example[] = [
  {
    startDate: new Date("Sept 1, 2024"),
    endDate: new Date(),
    title: "Webmaster",
    job: "this portfolio",
    description: `This portfolio is written and maintained using React and Typescript.`,
    hasSamples: false,
  },
  {
    startDate: new Date("March 1, 2023"),
    endDate: new Date("June 1 2024"),
    title: "Co-Founder",
    job: "Jetpack",
    description: `I found a natural knack for frontend engineering from the 1,000s of hours I spent designing code ready interfaces and learning from my teammates who were receiving their BSEs at Michigan.  I definitely got my reps in here.`,
    hasSamples: true,
    url: "https://www.usejetpack.com/",
  },
];
