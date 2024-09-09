"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import cheesin from "../../public/assets/Cheesinv2.png";
import useScreenWidth from "@/utils/screenWidth";
import Line from "@/utils/line";

export const Cheesin = () => {
  interface Coordinate {
    x: number;
    y: number;
  }
  const [lineCoordinates, setLineCoordinates] = useState<{
    start: Coordinate;
    end: Coordinate;
  } | null>(null);
  const speechBubbleRef = useRef<HTMLDivElement>(null);
  const cheesinRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    const updateLineCoordinates = () => {
      console.log("Updating line coordinates...");
      console.log("speechBubbleRef exists:", !!speechBubbleRef.current);
      console.log("cheesinRef exists:", !!cheesinRef.current);

      if (
        speechBubbleRef.current &&
        cheesinRef.current &&
        containerRef.current
      ) {
        const containerRect = containerRef.current?.getBoundingClientRect();
        const bubbleRect = speechBubbleRef.current.getBoundingClientRect();
        const cheesinRect = cheesinRef.current.getBoundingClientRect();

        console.log("Bubble rect:", bubbleRect);
        console.log("Cheesin rect:", cheesinRect);

        const newCoordinates = {
          start: {
            x: cheesinRect.width * 0.7 + cheesinRect.left - containerRect.left,
            y: cheesinRect.height * 0.3 + cheesinRect.top -containerRect.top,
          },
          end: {
            x: bubbleRect.left - containerRect.left,
            y: bubbleRect.bottom - containerRect.top,
          },
        };
        setLineCoordinates(newCoordinates);
      } else {
        console.log("One or both refs are null. Cannot update coordinates.");
      }
    };

    updateLineCoordinates();

    const timeoutId = setTimeout(updateLineCoordinates, 100);
    return () => clearTimeout(timeoutId);
  }, [screenWidth]);

  return (
    <div ref={containerRef} className="flex justify-center mr-6 relative">
      <Image ref={cheesinRef} src={cheesin} alt="cheesin" priority={true} />
      {lineCoordinates && (
        <Line start={lineCoordinates.start} end={lineCoordinates.end} />
      )}
      <div
        ref={speechBubbleRef}
        className="absolute left-full -translate-x-20 border-2 p-2 rounded-md border-greenSriracha"
      >
        <h2 className="text-greenSriracha text-nowrap">I&apos;m David!</h2>
      </div>
    </div>
  );
};
