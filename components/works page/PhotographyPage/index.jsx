import phone from "@/public/elements small/phone.png";
import Image from "next/image";
import "./style.css";

const PhotographyPage = () => {
  const works = [phone, phone, phone, phone, phone, phone];
  return (
    <section className="pt-[30vh] blue-black-bg-grandient md:px-32">
      <div className="flex flex-col">
        <div className="md:px-32 text-white text-center lg:text-start">
          <h1 className="font-bold text-8xl">Our Works</h1>
          <h2 className="text-3xl font-bold mt-6">Photography</h2>
        </div>

        <div className="flex-center flex-wrap gap-5 pb-[20vh]">
          {works.map((work, index) => (
            <Image
              key={index}
              src={work}
              alt="photography work"
              quality={100}
              className="flex-center flex-col md:w-[30%] mt-10 md:-ml-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotographyPage;
