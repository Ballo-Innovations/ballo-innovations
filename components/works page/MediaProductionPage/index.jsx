import phone from "@/public/elements small/phone.png";
import Image from "next/image";
import "./style.css";
import ImageGallery from "./Image Gallery";
import { mediaProduction } from "@/constants/works";
import Link from "next/link";

const MediaProductionPage = () => {
  return (
    <section id="media-production" className="pt-[30vh] pb-5 blue-black-bg-grandient md:px-5 md:pr-10">
      <div className="flex flex-col">
        <div className="md:px-32 flex-center flex-col text-white text-center lg:text-start">
          <h1 className="font-bold text-8xl">Our Works</h1>
          <h2 className="text-3xl font-bold mt-6 mb-20">Media Production</h2>
        </div>

        <div>
          <ul className="flex-center flex-wrap gap-1">
            {mediaProduction.map((work, index) => (
              <li id={`media-${work.path}`} className="card" style={{background: `url(${work.cover.src})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                <Link 
                  href={`media-production/${work.path}`}
                  key={index}
                  className="content h-full w-full flex-center flex-col"
                >
                  <p class="card-title">{work.name}</p>
                  <p class="small-desc">
                    {work.description}
                  </p>
                </Link>
                <div className="go-corner">
                  {work.logo ? (
                    <Image src={work.logo} alt="Ballo Innovations" className="w-10 h-auto -mt-4 ml-3" />
                  ) : (
                    <div className="-mt-4 ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 12 12"><path fill="white" d="M1.5 6a.75.75 0 0 1 .75-.75h5.94L6.22 3.28a.75.75 0 0 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06L7.28 9.78a.75.75 0 0 1-1.06-1.06l1.97-1.97H2.25A.75.75 0 0 1 1.5 6"></path></svg>
                    </div>
                  )}
                </div>
              </li>
            ))}  
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MediaProductionPage;
