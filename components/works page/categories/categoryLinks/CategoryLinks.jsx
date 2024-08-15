import Image from "next/image";
import arrow from "@/public/elements small/10.png";
import Link from "next/link";
import "./style.css";

const CategoryLinks = ({ category }) => {
  return (
    <div className="flex-center flex-col lg:w-[30%] mt-10 category-card-container px-3">
      <Link
        href={`${category.path}`}
        className={`flex-center ${
          category.name === "Social Media Management" ? "w-[45%]" : ""
        } ${category.name === "Advertising" ? "w-2/3" : ""} ${
          category.name === "Graphic Design" ? "w-4/5 lg:mr-10" : ""
        } ${
          category.name === "Photography" ? "w-4/5" : ""
        } lg:w-[30vw] lg:h-[50vh] overflow-visible`}
      >
        <Image
          src={category.cover}
          alt="Mission and Values"
          quality={100}
          className="lg:-ml-10 w-[80vh] lg:w-auto h-full object-contain overflow-visible category-cover-img"
        />
      </Link>

      <Link
        href={`${category.path}`}
        className="flex relative gap-5 mt-3 ml-10 lg:ml-0"
      >
        <h2 className="font-bold text-3xl break-words w-min text-center">
          {category.name}
        </h2>
        <span className="arrow flex-center">
          <Image
            src={arrow}
            alt={category.name}
            quality={100}
            className="w-10 lg:opacity-0 lg:opacity-100"
          />
        </span>
      </Link>
    </div>
  );
};

export default CategoryLinks;
