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

export const postgresExamples: Example[] = [
  {
    startDate: new Date("Nov 21, 2024"),
    endDate: new Date(),
    title: "Founder",
    job: "BearHug ʕ•ᴥ•ʔ",
    description: `I have architected complex PostgreSQL systems for data quality assurance and organized data retrieval in pursuit of a national directory of community resource data.`,
    hasSamples: false,
    url: "https://www.linkedin.com/posts/david-botos_bearhug-%CA%95%E1%B4%A5%CA%94-is-using-ai-to-help-improve-activity-7293309296774168579-1s1a",
  },
  {
    startDate: new Date("March 1, 2023"),
    endDate: new Date("June 1 2024"),
    title: "Co-Founder",
    job: "Jetpack",
    description: `I worked with other engineers to convert business needs into postgreSQL structured schemas, executing retrieval from postgres using both web and React Native mobile platforms.`,
    hasSamples: true,
    url: "https://www.usejetpack.com/",
  },
];
