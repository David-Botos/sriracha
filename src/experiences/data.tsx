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

export const dataExamples: Example[] = [
  {
    startDate: new Date("Nov 21, 2024"),
    endDate: new Date(),
    title: "Founder",
    job: "BearHug ʕ•ᴥ•ʔ",
    description: `I have helped industry experts strategize about how to move to a national, high quality directory of resource information with human-in-the-loop techniques applied to both structured and vectorized data for AI applications.`,
    hasSamples: false,
    url: "https://www.linkedin.com/posts/david-botos_bearhug-%CA%95%E1%B4%A5%CA%94-is-using-ai-to-help-improve-activity-7293309296774168579-1s1a",
  },
  {
    startDate: new Date("August 1, 2023"),
    endDate: new Date("October 1, 2024"),
    title: "Consultant",
    job: "PwC",
    description: `I provided architectural guidance for an AI document generation project based on user demands, producing a Visio and other resources to assess and map business requirements to cloud infrastructure.`,
    hasSamples: false,
  },
  {
    startDate: new Date("March 1, 2023"),
    endDate: new Date("June 1 2024"),
    title: "Co-Founder",
    job: "Jetpack",
    description: `Based on interface designs, I was able to hold difficult conversations about data structures that could achieve business needs.`,
    hasSamples: true,
    url: "https://www.usejetpack.com/",
  },
];
