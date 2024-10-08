"use client";

import "./style.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "@/components/footer/Footer";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Insizwe from "./Insizwe Insurance";
import MudendaCapital from "./Mudenda Capital";
import Bayport from "./Bayport";
import IVLounge from "./IV Lounge";

const SocialMediaPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const navSocialLinks = document.querySelector("#nav-social-links");
    const navbar = document.querySelector("#navbar");
    const footer = document.querySelector("#footer");

    const initialNavSocialLinksClass = navSocialLinks.className;
    const initialNavbarClass = navbar.className;
    const initialFooterClass = footer.className;

    footer.classList.add("h-screen", "pt-[5em]")

    const navbarState = () => {
      if (scrolled) {
        navSocialLinks.classList.remove("hidden");
        navbar.classList.remove("nav-scrolled");
      } else {
        navSocialLinks.classList.add("hidden");
        navbar.classList.add("nav-scrolled");
      }
    };
    
    if (inView) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
    navbarState();

    return () => {
      navSocialLinks.className = initialNavSocialLinksClass;
      navbar.className = initialNavbarClass;
      footer.className = initialFooterClass;
    };
  }, [inView]);

  return (
    <ReactFullpage
      //fullpage options
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div
              ref={ref}
              className="section blue-black-bg-grandient-2 text-white"
            >
              <div className="px-5 lg:px-32 text-center">
                <h1 className="font-bold text-8xl">Our Works</h1>
                <h2 className="text-3xl font-bold mt-6">
                  Social Media Management
                </h2>
              </div>
            </div>
            <Bayport />
            <Insizwe />
            <MudendaCapital />
            <IVLounge />
            <div className="section blue-black-bg-grandient">
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default SocialMediaPage;
