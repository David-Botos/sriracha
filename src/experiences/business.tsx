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

export const bizExperiences: Example[] = [
  {
    startDate: new Date("August 1, 2023"),
    endDate: new Date(),
    title: "Consultant",
    job: "PwC",
    description: `Worked on technical development for two separate projects. In one, I worked as a part of a larger frontend team.  For the other, I provided architectural guidance based on user demands.  Another project had me work with a team across Mexico and the US to implement SAP which stretched my ability to work multi-lingually about a technical product.`,
    hasSamples: false,
  },
  {
    startDate: new Date("March 1, 2023"),
    endDate: new Date("June 1 2024"),
    title: "Co-Founder",
    job: "Jetpack",
    description: `Spearheaded a pivot to serve customer needs that we identified at the conference we attended for Canopay. We made the first cross platform toolkit that allowed travel advisors, a large segment of luxury travel, to modernize and mobilize their businesses with a mobile and desktop app.`,
    hasSamples: true,
    url: 'https://www.usejetpack.com/'
  },
  {
    startDate: new Date("September 1, 2022"),
    endDate: new Date("July 1 2023"),
    title: "Co-Founder",
    job: "Canopay",
    description: `Built and managed a team that created an MVP that we took to a conference to help folks earn, manage, and spend rewards points all in one place. Learned about leadership, design, and how to make a product robust by aligning customer needs with technological roadblocks.`,
    hasSamples: true,
    url: 'https://www.canopay.co/'
  },
  {
    startDate: new Date("March 1, 2020"),
    endDate: new Date("May 1, 2022"),
    title: "Founder",
    job: "Helix",
    description: `HelixCases provided firms like Lyft with recruiting competitions that captured the best college talent. This was my entrepreneurial crash course and my proudest "failure."  I would've gone broke without the money I earned doing this.`,
    hasSamples: false,
  },
];
