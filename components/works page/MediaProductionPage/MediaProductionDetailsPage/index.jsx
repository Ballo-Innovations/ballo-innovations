'use client'

import { useState } from "react";
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
  const project = mediaProduction.find(obj => obj.path === params.productionId);
  const [showPopup, setShowPopup] = useState(false)
  const [popupContent, setPopupContent] = useState("")
  return (
    <>
      {project && (
        <section id="media-production-details" className="mt-16 blue-black-bg-grandient">
          <div className="flex-center my-5">
            <div className="text-center relative w-fit font-bold py-10 text-[var(--brand-color-2)] sm:px-10">
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
                  src={image}
                  alt=""
                  quality={100}
                  className="img-responsive"
                  placeholder="blur"
                />
              </Link>
            ))}
          </LightGallery>
          <div className="media-production-gallery video-gallery">
            {project.videos.map((video, index) => (
              <div className="gallery-item flex-center relative" key={`img-${index}`} onClick={() => {setPopupContent(video.src); setShowPopup(true);}}>
                <Image
                  src={video.thumb}
                  alt=""
                  quality={100}
                  className="img-responsive"
                  width={560}
                  height={315}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 right-0 bottom-0 z-[2]" width="40" height="40" viewBox="0 0 36 36"><path fill="white" d="M32.16 16.08L8.94 4.47A2.07 2.07 0 0 0 6 6.32v23.21a2.06 2.06 0 0 0 3 1.85l23.16-11.61a2.07 2.07 0 0 0 0-3.7Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
            </div>
            ))}
          </div>

          {/* <iframe width="100vh" height="100vh" className="w-[90vw] h-[90vh]" src="https://www.youtube.com/embed/VmnFWjgji7o?si=6q8DYHM3i6IOq4I1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe> */}

          {showPopup && popupContent && (
            <div id='video-popup' className='flex-center'>
            <iframe className="w-screen h-screen md:w-[85%] md:h-[90%]" src={`https://www.youtube.com/embed/${popupContent}?si=6q8DYHM3i6IOq4I1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <div className="w-screen absolute top-0 left-0 py-5 pr-5 md:pr-10 flex justify-end">
              <span className='cursor-pointer w-fit p-[0.25em] bg-white rounded-full flex-center' onClick={() => {setShowPopup(false); setPopupContent("")}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496"></path></svg>
              </span>
            </div>
          </div>
          )}
        </section>
      )}
    </>
  )
}

export default MediaProductionDetailsPage