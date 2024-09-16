import { StaticImageData } from "next/image";

export interface WorkSample {
  title: string;
  company: string;
  desc: string;
}

export interface Example {
  startDate: Date;
  endDate: Date;
  title: string;
  job: string;
  description: string;
  url?: string;
  icon?: string;
  hasSamples: boolean;
}

export interface Skills {
  image: StaticImageData;
  skill: string;
  examples?: Example[];
  details?: string;
}
