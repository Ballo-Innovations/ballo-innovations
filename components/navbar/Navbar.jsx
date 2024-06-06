"use client";

// Import Modules
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Import assets
import "./navbar.css";
import logo from "@/public/Ballo Logo New/Ballo logo new copy white.png";
import logo_2 from "@/public/Ballo Logo New/png/Ballo logo new -03.png";
import logo_sm from "@/public/Ballo Logo New/png/Ballo logo new-06.png";
import logo_sm_2 from "@/public/Ballo Logo New/png/Ballo logo new -01.png";
import { categoryPaths } from "@/constants/services";
import SubLinks from "./SubLinks";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [lightBackground, setLightBackground] = useState(true);

  useEffect(() => {
    setLightBackground(pathname.includes("/works/"));

    const onScroll = () => {
      const positionY = window.scrollY;
      if (positionY > 50) {
        setLightBackground(false);
      } else {
        if (pathname.includes("/works/")) {
          setLightBackground(true);
        }
        if (!pathname.includes("/works/")) {
          setLightBackground(false);
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", onScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    // Scrolled page logic
    const onScroll = () => {
      const positionY = window.scrollY;
      if (positionY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", onScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        document.querySelector("body").style.position = "relative";
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Annimation logic
  useGSAP(
    () => {
      gsap.to("#navbar", {
        opacity: 1,
      });

      gsap.to("#blue-mobile-logo", {
        opacity: 1,
        ease: "power1.in",
        delay: 0.15,
        duration: 0.25,
      });

      gsap.fromTo(
        ".nav-item",
        {
          // From object
          y: -50,
          x: 50,
          opacity: 0,
        },
        {
          // To object
          y: 0,
          x: 0,
          opacity: 1,
          ease: "sine.inOut",
          stagger: {
            // Stagger options
            each: 0.1,
            from: "start",
          },
        }
      );
    },
    {
      dependencies: [showMenu],
      revertOnUpdate: true,
    }
  );

  // Function to toggle menu
  const toggleMenu = () => {
    // const body = document.querySelector('body');
    if (!showMenu) {
      // body.style.position = 'fixed';
      setShowMenu(true);
    } else {
      // body.style.position = 'relative';
      setShowMenu(false);
    }
  };

  return (
    <nav
      id="navbar"
      className={`opacity-0 p-0 ${
        lightBackground ? "light-bg-nav" : ""
      } text-white top-0 ${scrolled ? "fixed" : "absolute"} ${
        scrolled || showMenu ? "nav-scrolled" : ""
      }`}
    >
      <div
        id="animate-mobile-menu"
        className={`fixed top-0 right-0 bg-white rounded-bl-full ${
          showMenu ? "w-[calc(100vh+100vw)] h-[calc(100vh+100vw)]" : "w-0 h-0"
        }`}
      />
      <div
        id="nav-social-links"
        className={`flex justify-between border-b-[1px] border-slate-300 w-screen md:px-3 ${
          scrolled || showMenu ? "hidden" : ""
        }`}
      >
        <div className="h-14 flex items-center text-sm">
          <Link
            href="mailto:info@balloinnovations.com"
            className="px-5 font-extralight flex-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <g className="blueIcon" fill="white">
                <path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z"></path>
                <path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z"></path>
              </g>
            </svg>
            <span className="font-extralight hidden md:block">
              info@balloinnovations.com
            </span>
          </Link>
          <Link
            href="tel:+260979611334"
            className="md:px-5 font-extralight flex-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                <path
                  className="blueIcon"
                  fill="white"
                  d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899c.901.9 2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535"
                ></path>
              </g>
            </svg>
            <span className="font-extralight hidden md:block">
              +260979611334
            </span>
          </Link>
        </div>

        <div className="flex-center gap-2 pr-5 md:pr-20">
          <Link
            target="_"
            href="https://www.facebook.com/profile.php?id=100087875482090&mibextid=LQQJ4d"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                className="blueIcon"
                fill="white"
                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
              ></path>
            </svg>
          </Link>
          <Link target="_" href="https://wa.me/+260979611334">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                className="blueIcon"
                fill="white"
                d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
              ></path>
            </svg>
          </Link>
          <Link
            target="_"
            href="https://www.linkedin.com/company/ballo-innovations/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
            >
              <path
                className="blueIcon"
                fill="white"
                d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M6 13H4V6h2zM5 5a1 1 0 1 1 0-2a1 1 0 1 1 0 2m8 8h-2V9a1 1 0 1 0-2 0v4H7V6h2v1.241C9.412 6.675 10.044 6 10.75 6C11.994 6 13 7.119 13 8.5z"
              ></path>
            </svg>
          </Link>
          <Link
            target="_"
            href="https://instagram.com/ballo_zm?igshid=YmMyMTA2M2Y="
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                className="blueIcon"
                fill="white"
                d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="px-10 flex items-center flex-col lg:flex-row">
        <div className="w-screen lg:w-1/4 flex justify-between items-center max-sm:pt-2">
          <Link href="/" className="z-[3]">
            {!lightBackground && (
              <Image
                src={logo}
                alt="Logo"
                quality={100}
                className="hidden lg:block logo-white w-11/12"
              />
            )}

            {lightBackground && (
              <Image
                src={logo_2}
                alt="Logo"
                quality={100}
                id="white-large-logo"
                className="hidden lg:block logo-white w-11/12"
              />
            )}

            <Image
              src={logo_sm}
              alt="Logo"
              quality={100}
              id="white-mobile-logo"
              className={`w-12 lg:hidden logo-white m-2 ${
                showMenu ? "hidden" : ""
              }`}
              style={{
                display:
                  pathname.includes("/works/") && !scrolled ? "none" : "",
              }}
            />

            <Image
              src={logo_sm_2}
              alt="Logo"
              quality={100}
              id="blue-mobile-logo"
              className={`w-12 lg:hidden logo-white m-2 pt-1 opacity-0 ${
                !showMenu ? "hidden" : ""
              }`}
              style={{
                display:
                  pathname.includes("/works/") && !scrolled ? "block" : "",
              }}
            />
          </Link>

          <button className="flex lg:hidden mx-5 z-[3]" onClick={toggleMenu}>
            {!showMenu && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="-5 -7 24 24"
              >
                <path
                  fill={
                    pathname.includes("/works/") && !scrolled
                      ? "#020055"
                      : "white"
                  }
                  d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"
                ></path>
              </svg>
            )}
            {showMenu && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                className="mt-2"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                  <path
                    fill="#04095c"
                    d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
                  ></path>
                </g>
              </svg>
            )}
          </button>
        </div>

        <div
          className={`w-3/4 nav-links ${showMenu ? "openMenu" : "closedMenu"}`}
        >
          <ul
            id="main-menu"
            className="w-100 justify-center mt-2 nav-menu flex m-0 items-center gap-8 lg:gap-16"
          >
            <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
              <Link
                href="/"
                className="nav-link"
                onClick={() => setShowMenu(false)}
              >
                Home
              </Link>
            </li>

            <li className={`nav-item ${pathname === "/about" ? "active" : ""}`}>
              <Link
                href="/about"
                className="nav-link"
                onClick={() => setShowMenu(false)}
              >
                About
              </Link>
            </li>

            <li
              id="works-link"
              className={`nav-item ${
                pathname.includes("/works") ? "active" : ""
              }`}
            >
              <Link
                href="/works"
                className="nav-link"
                onClick={() => setShowMenu(false)}
              >
                Works
              </Link>
              <SubLinks items={categoryPaths} />
            </li>

            <li
              className={`nav-item ${pathname === "/packages" ? "active" : ""}`}
            >
              <Link
                href="/packages"
                className="nav-link"
                onClick={() => setShowMenu(false)}
              >
                Packages
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="#footer"
                className="nav-link"
                onClick={() => setShowMenu(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
