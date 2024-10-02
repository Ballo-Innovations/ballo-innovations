'use client'

import { useEffect } from "react";
import { mediaProduction } from "@/constants/works";
import Link from "next/link";
import Image from "next/image";
import './style.css'

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgVdeo from 'lightgallery/plugins/video';
import lgZoom from "lightgallery/plugins/zoom";
import lgHash from 'lightgallery/plugins/hash';

// import fjGallery from "flickr-justified-gallery";

import brushStroke from "@/public/elements small/brush-stroke-banner-6.svg";

const MediaProductionDetailsPage = ({ params }) => {
  // console.log(mediaProduction, projectId)
  const project = mediaProduction.find(obj => obj.path === params.productionId);

  return (
    <>
      {project && (
        <section id="media-production-details" className="mt-16 blue-black-bg-grandient">
          <div className="flex-center my-5">
            <div className="text-center relative w-fit font-bold py-10 text-[var(--brand-color-2)] px-10">
              <Image
                src={brushStroke}
                alt="ballo innovations"
                className="z-[0] scale-x-[1.5] scale-y-[1.2]"
                fill
                objectFit="cover"
              />
              <h1 className="text-3xl relative z-[1]">Media Production</h1>
              <h2 className="text-2xl relative z-[1]">{project.name}</h2>
            </div>

          </div>
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom, lgVdeo, lgHash]}
            elementClassNames={"media-production-gallery"}
            videojs
            videojsOptions={{ muted: false }}
            hash={false}
          >
            {project.images.map((image, index) => (
              <Link href={image.src} className={`gallery-item ${project.path}-img`} key={`img-${index}`}>
                <Image
                  id="ballo innovations"
                  src={image}
                  alt=""
                  quality={100}
                  className="img-responsive"
                  placeholder="blur"
                />
              </Link>
            ))}

            {project.videos.map((video, index) => (
              <a data-src={video.src} data-poster={video.thumb} data-lg-size="1280-720" className="gallery-item" key={`video-${index}`}>
                <Image
                  src={video.thumb}
                  alt="Ballo Innovtions"
                  quality={100}
                  className="img-responsive"
                  width={320}
                  height={320}
                />
              </a>
            ))}
          </LightGallery>
        </section>
      )}
    </>
  )
}

export default MediaProductionDetailsPage