'use client'

import { useEffect } from "react";
import LightGallery from "lightgallery/react";

// Import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import Image from "next/image";
import './style.css';

const BalloMagSlider = ({ pages }) => {
  useEffect(() => {
    
    if (window.innerWidth < 768) {  const firstImage = document.querySelector(".ballo-mag-page-img");
      if (firstImage) {
        firstImage.click();
      }
    }
  }, []);

  return (
    <div>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames={"ballo-mag-page-container"}
      >
        {pages.map((page, index) => (
          <Link
            key={index}
            href={page.src}
            className="ballo-mag-page-img absolute opacity-0"
          >
            <Image
              id="works-default-bg"
              src={page}
              alt="Ballo Mag page"
              quality={100}
              className="img-responsive"
              placeholder="blur"
            />
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default BalloMagSlider;
