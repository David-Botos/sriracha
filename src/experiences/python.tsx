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

export const pythonExperiences: Example[] = [
  {
    startDate: new Date("Nov 21, 2024"),
    endDate: new Date(),
    title: "Founder",
    job: "BearHug ʕ•ᴥ•ʔ",
    description: `Developed conversational AI that uses WebRTC and a telephony service for inbound and outbound dialing of community based organizations (CBOs) and homeless shelters.  Currently, hospitals, care workers, and government agencies have no indication of each organizations ability ability to serve one additional client.  Current processes are manual and require social workers or people in need to call and wait on hold for minutes or hours. BearHug builds a near real-time database of availability by using speech-to-text, LLM inference, text-to-speech, and custom AI pipelines to call, inquire, and analyze available capacity at individual CBOs.`,
    hasSamples: false,
    url: "https://www.linkedin.com/posts/david-botos_bearhug-%CA%95%E1%B4%A5%CA%94-is-using-ai-to-help-improve-activity-7293309296774168579-1s1a",
  },
];
