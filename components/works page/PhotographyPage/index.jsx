import phone from "@/public/elements small/phone.png";
import Image from "next/image";
import "./style.css";
import ImageGallery from "./Image Gallery";

const PhotographyPage = () => {
  const works = [phone, phone, phone, phone, phone, phone];
  return (
    <section className="pt-[30vh] pb-5 blue-black-bg-grandient md:px-5 md:pr-10">
      <div className="flex flex-col">
        <div className="md:px-32 flex-center flex-col text-white text-center lg:text-start">
          <h1 className="font-bold text-8xl">Our Works</h1>
          <h2 className="text-3xl font-bold mt-6">Photography</h2>
        </div>

        <div id="photography-gallery" className="mt-16">
          <ImageGallery />
        </div>
      </div>
    </section>
  );
};

export default PhotographyPage;
