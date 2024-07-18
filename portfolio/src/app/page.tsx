import Image from "next/image";
import { poppins } from "./layout";

export default function Home() {
  return (
    <div className="flex flex-col bg-white p-4 gap-10 w-screen">
      <div className="min-h-screen flex flex-col p-5 gap-8">
        <div className="w-full h-fit gap-6 py-2 items-center flex flex-col">
          <div className="w-80 h-80 bg-gray-300"></div>
          <div className="w-full gap-4 flex flex-col">
            <div className="flex flex-col items-center text-graySriracha text-2xl">
              <span>I Design and Build</span>
              <span>Michelin Star Software</span>
              <p className="text-lg">(and sriracha)</p>
            </div>
            <div className="flex flex-row gap-3 items-center justify-center text-graySriracha">
              <div className="flex flex-row items-center gap-2 border-2 p-2 rounded-md border-graySriracha">
                <div className="w-2 h-2 bg-graySriracha rounded-sm"></div>
                <span className="text-lg">View Work</span>
              </div>
              <div className="flex flex-row items-center gap-2 border-2 p-2 rounded-md border-graySriracha">
                <div className="w-2 h-2 bg-graySriracha rounded-sm"></div>
                <span className="text-lg">Order Work</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 self-center">
          <div className="w-1 h-1 rounded-full bg-graySriracha"></div>
          <div className="w-1 h-1 rounded-full bg-graySriracha"></div>
          <div className="w-1 h-1 rounded-full bg-graySriracha"></div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1 text-graySriracha">
            <span className={`${poppins.className} text-sm`}>
              My name is...
            </span>
            <span className="text-2xl">David Botos 👋</span>
          </div>
          <div className="flex flex-col gap-4 text-graySriracha">
            <p className={`${poppins.className} text-sm`}>
              I am a Seattle-based Designer and Engineer with an undergrad BBA
              from Michigan Ross School of Business.
            </p>
            <p className={`${poppins.className} text-sm`}>
              Through college, I started three businesses. I am proudest of my
              work with my best friends Matthew and Husain on usejetpack.com
              which provides revolutionary software for a niche in the travel
              industry.
            </p>
            <p className={`${poppins.className} text-sm`}>
              I always have many projects in flight, but reorganize my schedule
              to fit in work I find meaningful.
            </p>
          </div>
          <div className="flex justify-center py-2 mt-5 border-2 rounded-md border-redSriracha">
            <span className="text-redSriracha">My Active Projects</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-5">
        <div className="flex flex-col text-graySriracha text-sm">
          <p className={`${poppins.className}`}>My proficiencies include...</p>
          <div className="flex flex-row justify-between text-graySriracha">
            <span className="text-xl">Figma & Design</span>
            <div className="flex flex-row items-center gap-3">
              <p className={`${poppins.className} text-xs`}>See Examples</p>
              <div className="w-1 h-1 bg-graySriracha"></div>
            </div>
          </div>
          <div className="flex flex-row justify-between text-graySriracha">
            <span className="text-xl">Frontend Engineering</span>
            <div className="flex flex-row items-center gap-3">
              <p className={`${poppins.className} text-xs`}>See Examples</p>
              <div className="w-1 h-1 bg-graySriracha"></div>
            </div>
          </div>
          <div className="flex flex-row justify-between text-graySriracha">
            <span className="text-xl">Backend Engineering</span>
            <div className="flex flex-row items-center gap-3">
              <p className={`${poppins.className} text-xs`}>See Examples</p>
              <div className="w-1 h-1 bg-graySriracha"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-graySriracha text-sm">
          <p className={`${poppins.className}`}>I am currently learning...</p>
          <div className="flex flex-row justify-between text-graySriracha">
            <span className="text-xl">Golang</span>
            <div className="flex flex-row items-center gap-3">
              <p className={`${poppins.className} text-xs`}>Read more</p>
              <div className="w-1 h-1 bg-graySriracha"></div>
            </div>
          </div>
          <div className="flex flex-row justify-between text-graySriracha">
            <span className="text-xl">Applied Linear Algebra</span>
            <div className="flex flex-row items-center gap-3">
              <p className={`${poppins.className} text-xs`}>Read more</p>
              <div className="w-1 h-1 bg-graySriracha"></div>
            </div>
          </div>
          <div className="flex flex-row justify-between text-graySriracha">
            <span className="text-xl">Embedded Systems / IoT</span>
            <div className="flex flex-row items-center gap-3">
              <p className={`${poppins.className} text-xs`}>Read more</p>
              <div className="w-1 h-1 bg-graySriracha"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-graySriracha">
          <div className="flex flex-row gap-2 items-center">
            <p className={`${poppins.className} text-sm`}>📝</p>
            <p className={`${poppins.className} text-base`}>
              I wrote my thoughts on these subjects:
            </p>
          </div>
          <ul className={`${poppins.className} list-disc ml-8 mt-2`}>
            <li className="text-redSriracha mt-1">
              <a className="underline">Radical Simplicity</a>
            </li>
            <li className="text-redSriracha mt-1">
              <a className="underline">Radical Hospitality</a>
            </li>
            <li className="text-redSriracha mt-1">
              <a className="underline">Radical Honesty</a>
            </li>
            <li className="text-redSriracha mt-1">
              <a className="underline">The Engineer&apos;s Hippocratic Oath</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-graySriracha">
          <div className="flex flex-row gap-2 items-center">
            <p className={`${poppins.className} text-sm`}>📚</p>
            <p className={`${poppins.className} text-base`}>
              Here is what I am reading:
            </p>
          </div>
          <ul className={`${poppins.className} list-disc ml-8 mt-2`}>
            <li className="text-redSriracha mt-1">
              <div className="flex flex-row gap-0.5 items-center">
                <a className="underline">
                  Introduction to Applied Linear Algebra
                </a>
                <span className="text-graySriracha text-sm">
                  - Boyd & Vandenberghe
                </span>
              </div>
            </li>
            <li className="text-redSriracha mt-1">
              <div className="flex flex-row gap-0.5 items-center">
                <a className="underline">Unreasonable Hospitality</a>
                <span className="text-graySriracha text-sm">
                  - Will Guidara
                </span>
              </div>
            </li>
            <li className="text-redSriracha mt-1">
              <div className="flex flex-row gap-0.5 items-center">
                <a className="underline">Poor Charlie&apos;s Almanack</a>
                <span className="text-graySriracha text-sm">
                  - Peter D. Kaufman
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center p-2">
        <div className="flex flex-row gap-4 w-fit">
          <div className="h-20 w-20 bg-gray-200"></div>
          <div className={`${poppins.className} text-graySriracha`}>
            <p className="font-semibold">TLDR Haiku:</p>
            <div className="text-sm">
              <p>I am David B.</p>
              <p>I don&apos;t put my name on B.S.</p>
              <p>I love Sriracha</p>
            </div>
          </div>
        </div>
        <div className="text-graySriracha flex flex-row gap-2 items-center">
          <span>Back to Top</span>
          <div className="w-3 h-3 bg-graySriracha"></div>
        </div>
      </div>
    </div>
  );
}
