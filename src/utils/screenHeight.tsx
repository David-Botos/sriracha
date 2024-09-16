import { useState, useEffect } from "react";

const useScreenHeight = () => {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenHeight(window.innerHeight);

      const handleResize = () => setScreenHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return screenHeight;
};

export default useScreenHeight;