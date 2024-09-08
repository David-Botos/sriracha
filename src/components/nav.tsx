"use client";
import Image from "next/image";
import rooster from "../../public/assets/rooster.svg";
import SrirachaBottle from "./srirachaBottle";
import { useState } from "react";
import { motion } from "framer-motion";

export function SrirachaNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative flex flex-col pointer-events-none">
      <div className="w-full flex bg-white px-6 py-3 items-center justify-between border-b border-gray-200">
        <div className="flex gap-4 items-center">
          <div className="w-8">
            <Image src={rooster} alt="rooster" width={30} height={30} />
          </div>
          <h2 className="text-2xl text-redSriracha">David Botos</h2>
        </div>
        <div
          className="flex pointer-events-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <SrirachaBottle isOpen={isOpen} />
        </div>
      </div>
      <motion.div
        className={
          isOpen
            ? "w-screen absolute bg-white z-10 top-full"
            : "w-screen absolute bg-white z-10 hidden"
        }
        // display: "true"
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
      </motion.div>
    </div>
  );
}
