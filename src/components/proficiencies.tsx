import React from "react";
import Image, { StaticImageData } from "next/image";
import figma from "../../public/assets/figma.png";
import react from "../../public/assets/react.png";
import ts from "../../public/assets/ts.png";
import dollar from "../../public/assets/dollar.svg";
import circuit from "../../public/assets/circuit.png";
import go from "../../public/assets/go.png";
import rust from "../../public/assets/rust.png";
import htmx from "../../public/assets/htmx.png";
import bulb from "../../public/assets/lightbulb.png";
import quill from "../../public/assets/quill.png";
import pan from "../../public/assets/pan.png";
import solo from "../../public/assets/solo.svg";
import chevron from "../../public/assets/chevron.svg";

export const ProficienciesList = () => {
  interface Skills {
    image: StaticImageData;
    skill: string;
    examples: string[];
    isExamples: boolean;
  }

  const proficiencies: Skills[] = [
    {
      image: dollar,
      skill: "Business Strategy",
      examples: [""],
      isExamples: false,
    },
    { image: figma, skill: "UI/UX Design", examples: [""], isExamples: false },
    { image: react, skill: "React", examples: [""], isExamples: false },
    {
      image: ts,
      skill: "TypeScript / Javascript",
      examples: [""],
      isExamples: false,
    },
    { image: quill, skill: "Poetry", examples: [""], isExamples: false },
  ];

  const practicing: Skills[] = [
    { image: solo, skill: "CUPS Protocol", examples: [""], isExamples: false },
    {
      image: quill,
      skill: "SVG Art and Animation",
      examples: [""],
      isExamples: false,
    },
    {
      image: circuit,
      skill: "RISC-V Architecture",
      examples: [""],
      isExamples: false,
    },
    {
      image: circuit,
      skill: "Embedded Systems",
      examples: [""],
      isExamples: false,
    },
    {
      image: bulb,
      skill: "Basic Circuits",
      examples: [""],
      isExamples: false,
    },
    { image: go, skill: "Golang", examples: [""], isExamples: false },
    { image: rust, skill: "Rust", examples: [""], isExamples: false },
    { image: htmx, skill: "HTMX", examples: [""], isExamples: false },
    { image: pan, skill: "Cooking", examples: [""], isExamples: false },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <p>I consider myself proficient in...</p>
        <ul className="flex flex-col gap-3">
          {proficiencies.map((proficiency) => (
            <li key={proficiency.skill}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Image
                      src={proficiency.image}
                      alt={`${proficiency.skill} icon`}
                    />
                  </div>
                  <h2 className="text-lg">{proficiency.skill}</h2>
                </div>
                <div
                  className={
                    proficiency.isExamples
                      ? "flex items-center gap-2"
                      : "flex items-center gap-2 opacity-50"
                  }
                >
                  <p className="text-sm">Examples</p>
                  <Image
                    src={chevron}
                    alt="expand menu"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <p>I am currently practicing...</p>
        <ul className="flex flex-col gap-3">
          {practicing.map((proficiency) => (
            <li key={proficiency.skill}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Image
                      src={proficiency.image}
                      alt={`${proficiency.skill} icon`}
                    />
                  </div>
                  <h2 className="text-lg">{proficiency.skill}</h2>
                </div>
                <div
                  className={
                    proficiency.isExamples
                      ? "flex items-center gap-2"
                      : "flex items-center gap-2 opacity-50"
                  }
                >
                  <p className="text-sm">Details</p>
                  <Image
                    src={chevron}
                    alt="expand menu"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-2 border-redSriracha rounded-md w-full flex gap-2 p-1.5 justify-center">
        <p className="text-redSriracha font-semibold">Let&apos;s Chat</p>
      </div>
    </div>
  );
};

export default ProficienciesList;
