"use client";

import workers_day from "@/public/projects/graphic-design/1.png";
import eu from "@/public/projects/graphic-design/2.png";
import debbie_in_debt from "@/public/projects/graphic-design/3.png";
import iv_winter_tips from "@/public/projects/graphic-design/4.png";
import graphic_5 from "@/public/projects/graphic-design/5.png";
import mining_indaba from "@/public/projects/graphic-design/6.png";
import swr_community_building from "@/public/projects/graphic-design/7.png";
import graphic_8 from "@/public/projects/graphic-design/8.png";
import insizswe_experience_security from "@/public/projects/graphic-design/9.png";
import fiz_tourism_show from "@/public/projects/graphic-design/10.png";
import swr_congrats from "@/public/projects/graphic-design/11.png";
import iv_starts_with_within from "@/public/projects/graphic-design/12.png";
import graphic_13 from "@/public/projects/graphic-design/13.png";
import mudenda_learning from "@/public/projects/graphic-design/14.png";
import fiz_chess from "@/public/projects/graphic-design/15.png";
import insizwe_motor_insurance from "@/public/projects/graphic-design/16.png";
import insizwe_med from "@/public/projects/graphic-design/17.png";
import discover_van_front from "@/public/projects/graphic-design/18.jpg";
import discover_van_front_lg from "@/public/projects/graphic-design/18-full.jpg";
import discover_van_back from "@/public/projects/graphic-design/19.jpg";
import discover_van_back_lg from "@/public/projects/graphic-design/19-full.jpg";
import bayport_banking from "@/public/projects/graphic-design/20.jpg";
import bayport_time_is_money from "@/public/projects/graphic-design/21.jpg";
import grow_your_future from "@/public/projects/graphic-design/22.jpg";

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
// import { useEffect } from "react";
// import $ from "jquery";

import "./style.css";

const ImageGallery = () => {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     $(document).ready(() => {
  //       $(".gallery").each((index, element) => {
  //         fjGallery($(element), {
  //           itemSelector: ".gallery-item",
  //           rowHeight: 450,
  //           lastRow: "start",
  //           gutter: 7,
  //           rowHeightTolerance: 0.1,
  //           calculateItemsHeight: false,
  //         });
  //       });
  //     });
  //   }
  // }, []);

  return (
    <div>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames={"gallery-container"}
      >
        <Link href={workers_day.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={workers_day}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={grow_your_future.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={grow_your_future}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={discover_van_front_lg.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={discover_van_front}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={insizswe_experience_security.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={insizswe_experience_security}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={bayport_time_is_money.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={bayport_time_is_money}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={swr_community_building.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={swr_community_building}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={graphic_5.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={graphic_5}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={discover_van_back_lg.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={discover_van_back}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={graphic_8.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={graphic_8}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={fiz_tourism_show.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={fiz_tourism_show}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={iv_starts_with_within.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={iv_starts_with_within}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={mudenda_learning.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={mudenda_learning}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={debbie_in_debt.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={debbie_in_debt}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={insizwe_motor_insurance.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={insizwe_motor_insurance}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={insizwe_med.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={insizwe_med}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={fiz_chess.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={fiz_chess}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={bayport_banking.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={bayport_banking}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={swr_congrats.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={swr_congrats}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={mining_indaba.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={mining_indaba}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={iv_winter_tips.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={iv_winter_tips}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={eu.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={eu}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>

        <Link href={graphic_13.src} className="gallery-item">
          <Image
            id="works-default-bg"
            src={graphic_13}
            alt=""
            quality={100}
            className="img-responsive"
          />
        </Link>
      </LightGallery>
    </div>
  );
};

export default ImageGallery;
