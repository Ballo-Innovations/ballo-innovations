"use client";

import { graphicDesignWorks } from "@/constants/works";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useCallback, useState } from "react";
import "./style.css";

const GraphicDesignPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = ({ photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <section className="pt-[30vh] pb-10 bg-[var(--brand-color-5)] blue-black-bg-grandient-2 pl-9 pr-15">
      <div className="flex flex-col">
        <div className="md:px-32 text-white text-center lg:text-start">
          <h1 className="subheading">Our Works</h1>
          <h2 className="text-3xl font-bold my-6">Graphic Design</h2>
        </div>

        <div id="graphics-gallery">
          <Gallery photos={graphicDesignWorks} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignPage;
