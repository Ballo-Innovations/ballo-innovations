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
import { Download } from "lucide-react"; // Import the Download icon
import './style.css';

const BalloMagSlider = ({ pages, url }) => {
  useEffect(() => {
    if (window.innerWidth < 768) {
      const firstImage = document.querySelector(".ballo-mag-page-img");
      if (firstImage) {
        firstImage.click();
      }
    }
  }, []);

  const insertDownloadLink = () => {
    setTimeout(() => {
      const toolbar = document.querySelector(".lg-toolbar");
      if (toolbar && !toolbar.querySelector(".custom-download-btn")) {
        const downloadBtn = document.createElement("a");
        downloadBtn.href = url;
        downloadBtn.target = "_blank";
        downloadBtn.className = "custom-download-btn text-white rounded flex items-center gap-1";
        downloadBtn.innerHTML = `<svg width="26" height="26" fill="#999" viewBox="0 0 24 24"><path d="M12 3v12l4-4h-3V3h-2v8H8l4 4zM5 18h14v2H5v-2z"></path></svg>`;

        toolbar.appendChild(downloadBtn);
      }
    }, 500);
  };

  return (
    <div>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        onInit={insertDownloadLink} // Add download button on gallery open
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
