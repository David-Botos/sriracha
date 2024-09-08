"use client";
import { useState } from "react";
import Image from "next/image";
import cheesin from "../../public/assets/Cheesinv2.png";

export const Cheesin = () => {
  const [originLine, setOriginLine] = useState();
  const [endLine, setEndLine] = useState();
  const [boxLeftCorner, setBoxLeftCorner] = useState();
  
  {/* TODO: Position the line and box to responsively remain at the same position near my mouth */}
  return (
    <div className="flex justify-center mr-6 relative">
      <Image src={cheesin} alt="cheesin" />
      <div className="absolute border-2 p-2 rounded-md border-greenSriracha">
        {/* TODO: add line and position */}
        <h2 className="text-greenSriracha">I&apos;m David!</h2>
      </div>
    </div>
  );
};
