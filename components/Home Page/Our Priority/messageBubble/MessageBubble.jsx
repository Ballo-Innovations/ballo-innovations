"use client";

import { useInView } from "react-intersection-observer";
import LoadingDots from "../loadingDots/LoadingDots";
import "./messagebubble.css";
import { useEffect, useState } from "react";

const MessageBubble = ({ text, direction, margin, loading, delay }) => {
  const [isLoading, setIsLoading] = useState(loading);
  const { inView, ref } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setIsLoading(false);
      }, delay);
    }
  }, [inView]);

  return (
    <div
      className={`relative max-w-[80vw] md:max-w-[50vw] lg:max-w-[32vw] lg:-mt-5 ${
        direction === "left" ? "pointer-left" : "pointer-right"
      } ${margin}`}
    >
      <div ref={ref} className="relative">
        <p className={`messageBubble ${isLoading ? "w-fit" : ""}`}>
          {!isLoading && text}
          {isLoading && <LoadingDots />}
        </p>

        <span className="pointer" />
      </div>

      <div
        style={{ position: "absolute" }}
        className="messageBubble w-fit opacity-0 top-0 left-0"
      >
        {text}
      </div>
    </div>
  );
};

export default MessageBubble;
