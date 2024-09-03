"use client";
import Image from "next/image";
import rooster from "../../public/assets/rooster.svg";
import SrirachaBottle from "./srirachaBottle";
import { useState } from "react";

export function SrirachaNav() {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <div className="w-full flex bg-white px-6 py-3 items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className="w-8">
          <Image src={rooster} alt="rooster" width={30} height={30} />
        </div>
        <h2 className="text-2xl text-redSriracha">David Botos</h2>
      </div>
      <div className="flex" onClick={() => setIsOpen(!isOpen)}>
        <SrirachaBottle isOpen={isOpen} />
      </div>
    </div>
  );
}
