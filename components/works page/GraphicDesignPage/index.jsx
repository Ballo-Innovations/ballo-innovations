import ImageGallery from "./Image Gallery";

const GraphicDesignPage = () => {
  return (
    <section className="pt-[30vh] pb-10 bg-[var(--brand-color-5)] blue-black-bg-grandient-2 md:pl-9 md:pr-15">
      <div className="flex flex-col">
        <div className="md:px-32 text-white text-center lg:text-start">
          <h1 className="font-bold text-8xl">Our Works</h1>
          <h2 className="text-3xl font-bold my-6">Graphic Design</h2>
        </div>

        <div id="graphics-gallery" className="mt-16">
          <ImageGallery />
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignPage;
