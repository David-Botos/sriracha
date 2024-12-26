"use client";
import React, { useCallback, useReducer } from "react";
import Image, { StaticImageData } from "next/image";
import figma from "../../public/assets/figma.svg";
import react from "../../public/assets/react.svg";
import ts from "../../public/assets/ts.svg";
import chip from "../../public/assets/chip.svg";
import osChip from "../../public/assets/osChip.svg";
import go from "../../public/assets/go.png";
import python from "../../public/assets/python.png"
import rust from "../../public/assets/rust.png";
import htmx from "../../public/assets/htmx.png";
import bulb from "../../public/assets/bulb.svg";
import quill from "../../public/assets/quill.svg";
import pan from "../../public/assets/cheffin.svg";
import solo from "../../public/assets/solo.svg";
import chevron from "../../public/assets/chevron.svg";
import cyberSec from "../../public/assets/cyberSec.svg";
import pAndL from "../../public/assets/pAndL.svg";
import { bizExperiences } from "@/experiences/business";
import { designExperiences } from "@/experiences/design";
import { reactExperiences } from "@/experiences/react";
import { pythonExperiences } from "@/experiences/python";
import { goExperiences } from "@/experiences/go";
import { tsExperiences } from "@/experiences/ts";
import { months } from "@/utils/months";
import Link from "next/link";
import { WorkSample, Skills, Example } from "@/contexts/interfaces";
const TOGGLE_MENU = "TOGGLE_MENU";

type MenuState = { [key: string]: boolean };

type MenuAction = {
  type: typeof TOGGLE_MENU;
  id: string;
};


function menuReducer(state: MenuState, action: MenuAction): MenuState {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        [action.id]: !state[action.id],
      };
    default:
      return state;
  }
}

export const ProficienciesList = ({
  actions,
  setActions,
  email,
}: {
  actions: WorkSample[];
  setActions: React.Dispatch<React.SetStateAction<WorkSample[]>>;
  email: string;
}) => {
  const proficiencies: Skills[] = [
    {
      image: pAndL,
      skill: "Business Models & Technology Operations",
      examples: bizExperiences,
    },
    { image: figma, skill: "UI/UX Design", examples: designExperiences },
    { image: react, skill: "React", examples: reactExperiences },
    {
      image: ts,
      skill: "TypeScript / Javascript",
      examples: tsExperiences,
    },
    { 
      image: go,
      skill: "Golang",
      examples: goExperiences
    },
    { 
      image: python,
      skill: "Python",
      examples: pythonExperiences
    },
    // { image: quill, skill: "Poetry" },
    { image: pan, skill: "Cooking" },
  ];

  const practicing: Skills[] = [
    // { image: solo, skill: "CUPS Protocol" },
    {
      image: quill,
      skill: "SVG Art and Animation",
    },
    {
      image: cyberSec,
      skill: "Cyber Security",
    },
    {
      image: osChip,
      skill: "RISC-V Architecture",
    },
    {
      image: chip,
      skill: "Embedded Systems",
    },
    {
      image: bulb,
      skill: "Basic Circuits",
    },
    { image: rust, skill: "Rust" },
    { image: htmx, skill: "HTMX" },
  ];

  const initialState = proficiencies.reduce(
    (acc, prof) => ({
      ...acc,
      [prof.skill]: false,
    }),
    {}
  );

  const [state, dispatch] = useReducer(menuReducer, initialState);

  // const handleAddWorkSample = useCallback(
  //   async (example: Example) => {
  //     const newWorkSample: WorkSample = {
  //       title: example.title,
  //       company: example.job,
  //       desc: example.description,
  //     };

  //     if (email) {
  //       setActions((prevActions) => [...prevActions, newWorkSample]);
  //     } else {
  //       const userEmail = await openEmailModal();
  //       if (userEmail) {
  //         setActions((prevActions) => [...prevActions, newWorkSample]);
  //       } else {
  //         handleModalClose();
  //         // Handle the case where the user didn't provide an email
  //       }
  //     }
  //   },
  //   [email, openEmailModal]
  // );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <p>I am proficient in...</p>
        <ul className="flex flex-col gap-3">
          {proficiencies.map((proficiency) => (
            <li key={proficiency.skill}>
              <div className="flex flex-col gap-2">
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
                      proficiency.examples
                        ? "flex items-center gap-2 cursor-pointer"
                        : "flex items-center gap-2 opacity-50 cursor-not-allowed"
                    }
                    onClick={() =>
                      proficiency.examples &&
                      dispatch({ type: TOGGLE_MENU, id: proficiency.skill })
                    }
                  >
                    <p className="text-sm">Examples</p>
                    <Image
                      src={chevron}
                      alt="expand menu"
                      width={16}
                      height={16}
                      className="transition-all"
                      style={{
                        rotate: state[proficiency.skill] ? "-180deg" : "0deg",
                      }}
                    />
                  </div>
                </div>
                {proficiency.examples && state[proficiency.skill] && (
                  <div className="flex flex-col gap-5">
                    {proficiency.examples.map((example) => (
                      <div
                        className="flex flex-col gap-1 pl-7"
                        key={example.description}
                      >
                        <div className="flex w-full gap-5 items-center">
                          <div className="flex flex-col w-full">
                            <p className="text-sm">
                              {months[example.startDate.getMonth()]}{" "}
                              {example.startDate.getFullYear()} -{" "}
                              {example.endDate.getFullYear() ===
                                new Date().getFullYear() &&
                              example.endDate.getMonth() ===
                                new Date().getMonth() &&
                              example.endDate.getDate() === new Date().getDate()
                                ? "Present"
                                : `${
                                    months[example.endDate.getMonth()]
                                  } ${example.endDate.getFullYear()}`}
                            </p>
                            <p className="font-semibold">
                              {example.title} @{" "}
                              {example.url ? (
                                <Link href={example.url} className="underline">
                                  {example.job}
                                </Link>
                              ) : (
                                <span>{example.job}</span>
                              )}
                            </p>
                          </div>
                          <a href="mailto:david.m.botos@gmail.com">
                            <div className="border-2 px-2 py-1 rounded-md">
                              <p className="text-nowrap text-sm">
                                Let&apos;s Chat
                              </p>
                            </div>
                          </a>
                        </div>
                        <p className="text-sm">{example.description}</p>
                      </div>
                    ))}
                  </div>
                )}
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
                {/* TODO: Implement details on each of these things */}
                {/* <div
                  className={
                    proficiency.examples
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
                </div> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <a href="mailto:david.m.botos@gmail.com">
        <div className="border-2 border-redSriracha rounded-md w-full flex gap-2 p-1.5 justify-center">
          <p className="text-redSriracha font-semibold">Let&apos;s Chat</p>
        </div>
      </a>
    </div>
  );
};

export default ProficienciesList;
