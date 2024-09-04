"use client";

import photography_1 from "@/public/projects/photography/1.jpg";
import photography_2 from "@/public/projects/photography/2.jpg";
import photography_3 from "@/public/projects/photography/3.jpg";
import photography_4 from "@/public/projects/photography/4.jpg";
import photography_5 from "@/public/projects/photography/5.jpg";
import photography_6 from "@/public/projects/photography/6.jpg";
import photography_7 from "@/public/projects/photography/7.jpg";
import photography_8 from "@/public/projects/photography/8.jpg";
import photography_9 from "@/public/projects/photography/9.jpg";
import photography_10 from "@/public/projects/photography/10.jpg";
import photography_11 from "@/public/projects/photography/11.jpg";
import photography_12 from "@/public/projects/photography/12.jpg";
import photography_13 from "@/public/projects/photography/13.jpg";
import photography_14 from "@/public/projects/photography/14.jpg";
import photography_15 from "@/public/projects/photography/15.jpg";
import photography_16 from "@/public/projects/photography/16.jpg";
import photography_17 from "@/public/projects/photography/17.jpg";
import photography_18 from "@/public/projects/photography/18.jpg";
import photography_19 from "@/public/projects/photography/19.jpg";
import photography_20 from "@/public/projects/photography/20.jpg";

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

const ImageGallery = () => {
  return (
    <div>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames={"photography-gallery-container"}
      >        
        <Link href={photography_17.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_17}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>  

        <Link href={photography_20.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_20}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>             

        <Link href={photography_18.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_18}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>

        <Link href={photography_9.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_9}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>

        <Link href={photography_10.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_10}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>

        <Link href={photography_11.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_11}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>

        <Link href={photography_12.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_12}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>

        <Link href={photography_13.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_13}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>

        <Link href={photography_4.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_4}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>

        <Link href={photography_6.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_6}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>

        <Link
          href={photography_7.src}
          className="gallery-item"
        >
          <Image
            id="works-default-bg"
            src={photography_7}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>

        <Link href={photography_8.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_8}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link> 

        <Link href={photography_15.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_15}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>

        <Link href={photography_1.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_1}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>

        <Link href={photography_2.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_2}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>

        <Link href={photography_3.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_3}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>

        <Link href={photography_5.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={photography_5}
            alt=""
            quality={100}
            className="img-responsive"
            placeholder="blur"
          />
        </Link>       
      </LightGallery>
    </div>
  );
};

export default ImageGallery;
