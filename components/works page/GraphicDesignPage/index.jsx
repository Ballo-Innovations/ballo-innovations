"use client";

import phone from "@/public/elements small/phone.png";
import Image from "next/image";
import { graphicDesignWorks } from "@/constants/works";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useCallback, useState } from "react";

const GraphicDesignPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 1,
      height: 1,
    },
  ];

  return (
    <section className="pt-[30vh] bg-[var(--brand-color-5)] blue-black-bg-grandient-2">
      <div className="flex flex-col">
        <div className="md:px-32 text-white text-center lg:text-start">
          <h1 className="subheading">Our Works</h1>

          <h2 className="text-3xl font-bold my-6">Graphic Design</h2>
        </div>

        <div>
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
