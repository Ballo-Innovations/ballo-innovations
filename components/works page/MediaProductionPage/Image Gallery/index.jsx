"use client";

import photography_1 from "@/public/projects/media-production/photography/1.jpg";
import photography_2 from "@/public/projects/media-production/photography/2.jpg";
import photography_3 from "@/public/projects/media-production/photography/3.jpg";
import photography_4 from "@/public/projects/media-production/photography/4.jpg";
import photography_5 from "@/public/projects/media-production/photography/5.jpg";
import photography_6 from "@/public/projects/media-production/photography/6.jpg";
import photography_7 from "@/public/projects/media-production/photography/7.jpg";
import photography_8 from "@/public/projects/media-production/photography/8.jpg";
import photography_9 from "@/public/projects/media-production/photography/9.jpg";
import photography_10 from "@/public/projects/media-production/photography/10.jpg";
import photography_11 from "@/public/projects/media-production/photography/11.jpg";
import photography_12 from "@/public/projects/media-production/photography/12.jpg";
import photography_13 from "@/public/projects/media-production/photography/13.jpg";
import photography_14 from "@/public/projects/media-production/photography/14.jpg";
import photography_15 from "@/public/projects/media-production/photography/15.jpg";
import photography_16 from "@/public/projects/media-production/photography/16.jpg";
import photography_17 from "@/public/projects/media-production/photography/17.jpg";
import photography_18 from "@/public/projects/media-production/photography/18.jpg";
import photography_19 from "@/public/projects/media-production/photography/19.jpg";
import photography_20 from "@/public/projects/media-production/photography/20.jpg";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// import fjGallery from "flickr-justified-gallery";
import Link from "next/link";
import Image from "next/image";

import "./style.css";
import GalleryItem from "./GalleryItem";

const ImageGallery = () => {
  return (
    <div>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames={"photography-gallery-container"}
      >
        <GalleryItem photo={photography_17} rotation="left" title="Ballo" text="The team that made all this happen. Sic parvis magna!" />        
        <GalleryItem photo={photography_20} rotation="right" title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        <GalleryItem photo={photography_18} rotation="left" title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        <GalleryItem photo={photography_9} title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        <GalleryItem photo={photography_10} rotation="right" title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        <GalleryItem photo={photography_11} rotation="left" title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        <GalleryItem photo={photography_12} title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        <GalleryItem photo={photography_13} rotation="right" title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        <GalleryItem photo={photography_4} rotation="left" title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        <GalleryItem photo={photography_6} title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        <GalleryItem photo={photography_7} rotation="right" title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        <GalleryItem photo={photography_8} rotation="left" title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        <GalleryItem photo={photography_15} title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        <GalleryItem photo={photography_1} rotation="right" title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        <GalleryItem photo={photography_2} rotation="left" title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        <GalleryItem photo={photography_3} title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
        <GalleryItem photo={photography_5} rotation="right"title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />      
      </LightGallery>
    </div>
  );
};

export default ImageGallery;
