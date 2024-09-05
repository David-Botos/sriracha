import { SrirachaNav } from "@/components/nav";
import Image from "next/image";
import briefcase from "../../public/assets/briefcase.svg";
import takeout from "../../public/assets/takeout.svg";
import { Cheesin } from "@/components/cheesin";
import chevron from "../../public/assets/chevron.svg";
export default function Home() {
  return (
    <div>
      <SrirachaNav />
      <main className="flex min-h-screen flex-col items-center justify-between bg-background">
        {/* TODO: mobile menu */}
        <div className="p-6 gap-8 flex flex-col">
          <div className="flex flex-col gap-4">
            <Cheesin />
            <div className="flex flex-col gap-6 align-middle py-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-center text-3xl">Designing and Building</h2>
                <h2 className="text-center text-3xl">
                  Couture Tech Experiences
                </h2>
              </div>
              <div className="flex gap-4">
                <div className="border-2 border-redSriracha rounded-md w-full flex gap-2 p-1.5 justify-center">
                  <Image src={briefcase} alt="briefcase" />
                  <p className="text-redSriracha font-semibold">View Work</p>
                </div>
                <div className="border-2 border-redSriracha rounded-md w-full flex gap-2 p-1.5 justify-center">
                  <Image src={takeout} alt="briefcase" />
                  <p className="text-redSriracha font-semibold">
                    Let&apos;s Cook!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 w-full justify-center">
            <div className="bg-brownSriracha w-1 h-1 rounded-full"></div>
            <div className="bg-brownSriracha w-1 h-1 rounded-full"></div>
            <div className="bg-brownSriracha w-1 h-1 rounded-full"></div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <div>
              <p>My name is...</p>
              <div className="flex gap-2 items-center">
                <h2 className="text-4xl">~ David Botos</h2>
              </div>
              <div className="border-2 border-dashed p-2 mt-2">
                <div className="flex gap-1 items-center">
                  <p>✌🏻</p>
                  <p className="italic text-xs">
                    Culturally speaking, I&apos;m an illegal alien.
                  </p>
                </div>
                <p className="text-xs">
                  I&apos;m sure I have my papers somewhere... 🙏 for your patience.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold">I am Seattle based:</p>
              <ul className="list-disc ml-4">
                <li className="mb-1">
                  <div className="w-full justify-between flex">
                    <div className="flex gap-2 align-middle">
                      <p className="italic">Founder</p>
                      <p>🧗🏻‍♂️</p>
                      {/* i lead */}
                    </div>
                    <div className="flex gap-2 justify-center opacity-90">
                      <p className="text-sm leading-relaxed">Lessons</p>
                      <Image src={chevron} alt="expandList" />
                    </div>
                  </div>
                </li>
                <li className="mb-1">
                  <div className="flex w-full justify-between">
                    <div className="flex gap-2">
                      <p className="italic">UI/UX Designer</p>
                      <p>👨🏻‍🎨</p>
                      {/* i observe */}
                    </div>
                    <div className="flex gap-2 justify-center opacity-90">
                      <p className="text-sm leading-relaxed">Lessons</p>
                      <Image src={chevron} alt="expandList" />
                    </div>
                  </div>
                </li>
                <li className="mb-1">
                  <div className="flex w-full justify-between">
                    <div className="flex gap-2">
                      <p className="italic">Engineer</p>
                      <p>🛠️</p>
                      {/* i solve */}
                    </div>
                    <div className="flex gap-2 justify-center opacity-90">
                      <p className="text-sm leading-relaxed">Lessons</p>
                      <Image src={chevron} alt="expandList" />
                    </div>
                  </div>
                </li>
                <li className="mb-1">
                  <div className="flex w-full justify-between">
                    <div className="flex gap-2">
                      <p className="italic">Cyclist & Runner</p>
                      <p>🚴🏻‍♂️ ... 🏃🏻‍♂️</p>
                      {/* this is a lil mac reference */}
                    </div>
                    <div className="flex gap-2 justify-center opacity-90">
                      <p className="text-sm leading-relaxed">Lessons</p>
                      <Image src={chevron} alt="expandList" />
                    </div>
                  </div>
                </li>
                <li className="mb-1">
                  <div className="flex w-full justify-between">
                    <div className="flex gap-2">
                      <p className="italic">Practicing Christian</p>
                      <p>✝️ 🏋🏻‍♂️</p>
                      {/* and I am getting better everyday */}
                    </div>
                    <div className="flex gap-2 justify-center opacity-90">
                      <p className="text-sm leading-relaxed">Lessons</p>
                      <Image src={chevron} alt="expandList" />
                    </div>
                  </div>
                </li>
                <li className="mb-1">
                  <div className="flex w-full justify-between">
                    <div className="flex gap-2">
                      <p className="italic">Home Chef</p>
                      <p>👨🏻‍🍳</p>
                      {/* i think good food is important */}
                    </div>
                    <div className="flex gap-2 justify-center opacity-90">
                      <p className="text-sm leading-relaxed">Lessons</p>
                      <Image src={chevron} alt="expandList" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    </div>
  );
}
