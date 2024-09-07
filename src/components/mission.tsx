"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Mission = () => {
  const [amazeExpCoords, setAmazeExpCoords] = useState<number[]>();
  const [excellenceCoords, setExcellenceCoords] = useState<number[]>();
  const [cooperationCoords, setCooperationCoords] = useState<number[]>();
  // TODO: add animations for fun and practice to where the spans are to shoot out emojis like confetti
  return (
    <p>
      ...And I have set my sights on applying my skills to handcrafting{" "}
      <span className="font-semibold underline text-redSriracha">
        amazing experiences
      </span>{" "}
      and inspiring a culture of{" "}
      <span className="font-semibold underline text-redSriracha">
        excellence
      </span>{" "}
      and{" "}
      <span className="font-semibold underline text-redSriracha">
        cooperation
      </span>{" "}
      wherever I go.
    </p>
  );
};
