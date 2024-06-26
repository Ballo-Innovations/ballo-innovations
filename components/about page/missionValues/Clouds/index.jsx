import "./style.css";
import cloud1 from "@/public/elements small/cloud-1.png";
import cloud2 from "@/public/elements small/cloud-2.png";
import cloud3 from "@/public/elements small/cloud-3.png";
import cloud4 from "@/public/elements small/cloud-4.png";
import cloud5 from "@/public/elements small/cloud-5.png";
import Image from "next/image";

const Clouds = () => {
  return (
    <div>
      <Image src={cloud1} alt="Cloud" className="cloud hidden sm:flex" />
      <Image src={cloud3} alt="Cloud" className="cloud hidden sm:flex" />
      {/* <Image src={cloud2} alt="Cloud" className="cloud" /> */}

      {/* <Image src={cloud4} alt="Cloud" className="cloud" /> */}
      {/* <Image src={cloud5} alt="Cloud" className="cloud" /> */}
    </div>
  );
};

export default Clouds;
