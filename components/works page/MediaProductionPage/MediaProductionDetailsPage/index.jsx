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
import lgZoom from "lightgallery/plugins/zoom";

// import fjGallery from "flickr-justified-gallery";

import brushStroke from "@/public/elements small/brush-stroke-banner-6.svg";

const MediaProductionDetailsPage = ({ params }) => {
  // console.log(mediaProduction, projectId)
  const project = mediaProduction.find(obj => obj.path === params.productionId);
  const projectExample = mediaProduction[0].images
  useEffect(() => {
    
    console.log(projectExample)
    
  }, [])
  
  console.log(params)
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
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames={"media-production-gallery"}
          >
            {project.images.map((image, index) => (
              <Link href={image.src} className="gallery-item big" key={`img-${index}`}>
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
          </LightGallery>
        </section>
      )}
    </>
  )
}

export default MediaProductionDetailsPage