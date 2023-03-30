import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ConfettiWrapper = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    handleResize(); // call the function once on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <Confetti width={windowWidth} height={windowHeight} />;
};

export default ConfettiWrapper;
