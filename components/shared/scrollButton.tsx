"use client";

import clsx from "clsx";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollButton = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const handleScroll = () => {
    // Check if scrolled down at least 200 pixels
    const scrolledDown = window.scrollY > 200;
    setIsScrolledDown(scrolledDown);
  };

  const handleClick = () => {
    if (isScrolledDown) {
      // If scrolled down, go to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If at top, go to bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Call once to initialize state correctly
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 p-3 bg-gray-100 rounded-full shadow-3xl hover:bg-gray-200 transition-colors cursor-pointer"
      aria-label={isScrolledDown ? "Scroll to top" : "Scroll to bottom"}
    >
      <ArrowUp
        className={clsx({ "rotate-180": !isScrolledDown, transition: true })}
        size={24}
      />
    </button>
  );
};

export default ScrollButton;
