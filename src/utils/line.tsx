import React from "react";
import { motion } from "framer-motion";

interface Coordinate {
  x: number;
  y: number;
}

interface LineProps {
  start: Coordinate;
  end: Coordinate;
}

const Line: React.FC<LineProps> = ({ start, end }) => {
  if (!start || !end) {
    return null;
  }

  // Calculate the bounding box for the line
  const minX = Math.min(start.x, end.x);
  const minY = Math.min(start.y, end.y);
  const maxX = Math.max(start.x, end.x);
  const maxY = Math.max(start.y, end.y);

  const width = maxX - minX;
  const height = maxY - minY;

  return (
    <svg
      style={{
        position: "absolute",
        top: minY,
        left: minX,
        width: width,
        height: height,
        overflow: "visible",
      }}
    >
      <motion.line
        x1={start.x - minX}
        y1={start.y - minY}
        x2={end.x - minX}
        y2={end.y - minY}
        stroke="#38B53F"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
      />
    </svg>
  );
};

export default Line;