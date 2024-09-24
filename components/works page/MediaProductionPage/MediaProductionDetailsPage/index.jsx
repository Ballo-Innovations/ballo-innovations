'use client'

import { useEffect } from "react";
import { mediaProduction } from "@/constants/works";
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
      {project.images && (

        <div id="photography-gallery" className="mt-16">
          <h1 className="text-center">{project.name}</h1>

          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames={"photography-gallery-container"}
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
        </div>
      )}
    </>
  )
}

export default MediaProductionDetailsPage