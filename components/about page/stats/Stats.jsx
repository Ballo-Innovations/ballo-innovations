"use client";

import Counter from "./counter/Counter";
import "./style.css";
import { Engagement, Leads, Reach, Roi } from "./icon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useState } from "react";
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const Stats = () => {
  const [animateLine, setAnimateLine] = useState(false);
  useGSAP(() => {
    gsap.defaults({ ease: "power4.out" });

    gsap.from("#svg_engagement", {
      scrollTrigger: {
        trigger: ".stats-chart",
        start: "-=350",
        onUpdate: () => {
          if (!animateLine) {
            setAnimateLine(true);
          }
        },
      },
    });

    if (animateLine) {
      gsap.fromTo(
        "#svg_engagement",
        {
          width: "0%",
        },
        {
          width: "100%",
          duration: 15,
        }
      );

      gsap.to("#engagement-text", {
        transformOrigin: "50% 50%",
        opacity: 1,
        duration: 5,
        delay: 1,
        motionPath: {
          path: "#path_engagement",
          align: "#path_engagement",
          alignOrigin: [1, 1],
        },
      });

      gsap.fromTo(
        "#svg_reach",
        {
          width: "0%",
        },
        {
          width: "100%",
          duration: 17,
        }
      );

      gsap.to("#reach-text", {
        transformOrigin: "50% 50%",
        opacity: 1,
        duration: 6,
        delay: 0.5,
        motionPath: {
          path: "#path_reach",
          align: "#path_reach",
          alignOrigin: [1, 0],
        },
      });

      gsap.fromTo(
        "#svg_leads",
        {
          width: "0%",
        },
        {
          width: "100%",
          duration: 12,
          delay: 1,
        }
      );

      gsap.to("#leads-text", {
        transformOrigin: "50% 50%",
        opacity: 1,
        duration: 5,
        delay: 1,
        motionPath: {
          path: "#path_leads",
          align: "#path_leads",
          alignOrigin: [0.5, 1],
        },
      });

      gsap.fromTo(
        "#svg_roi",
        {
          width: "0%",
        },
        {
          duration: 13,
          delay: 0.5,
          width: "100%",
        }
      );

      gsap.to("#roi-text", {
        transformOrigin: "50% 50%",
        opacity: 1,
        duration: 5,
        delay: 1,
        motionPath: {
          path: "#path_roi",
          align: "#path_roi",
          alignOrigin: [-0.2, 0.5],
        },
      });
    }
  }, [animateLine]);

  return (
    <section className="bg-[var(--brand-color-1)] text-white pt-20 pb-14 px-5 md:px-32">
      <div className="flex flex-col" id="svg-line-trigger">
        <h2 className="subheading mb-10 lg:mb-0 lg:text-start z-[3]">
          Grow Your Audience
        </h2>

        <p className="text-center md:text-start">
          We help you reach the full potential of your brand with our marketing
          expertise. We specialise in growing your audience across all
          platforms, from social media to search engines, ensuring maximum
          visibility and engagement. Let us help you reach new heights and
          connect with your target audience like never before!
        </p>

        <div className="stats-chart relative mt-20 overflow-hidden">
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line-container overflow-visible absolute top-0 left-0 h-full w-full">
            <Reach />
            <Roi />
            <Engagement />
            <Leads />
            <span id="reach-text" className="stat-name">
              Reach
            </span>
            <span id="roi-text" className="stat-name">
              ROI
            </span>
            <span id="engagement-text" className="stat-name">
              Engagement
            </span>
            <span id="leads-text" className="stat-name">
              Leads
            </span>
          </div>
        </div>

        <Counter />
      </div>
    </section>
  );
};

export default Stats;
