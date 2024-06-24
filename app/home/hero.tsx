"use client";
import Slider from "react-slick";
import React from "react";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import slider1 from "@/public/images/slider1.jpg";
import slider2 from "@/public/images/slider2.jpg";
import slider3 from "@/public/images/slider3.jpg";
import slider4 from "@/public/images/slider4.jpg";
import slider5 from "@/public/images/slider5.jpg";
import slider6 from "@/public/images/slider6.jpg";
import HeroText from "@/components/HeroText";

type HeroProps = { mobile?: boolean };
const HeroSection: React.FC<HeroProps> = ({ mobile }) => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover-bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };

  const sliderImages = [slider1, slider2, slider3, slider4, slider5, slider6];

  const sliderTitles = [
    "Long-lasting use",
    "Seasonal Offers",
    "Unique Flavor",
    "Long-lasting use",
    "Seasonal Offers",
    "Unique Flavor",
  ];

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {sliderImages.map((image, index) => (
          <div key={index} className="w-full h-full relative">
            <Image
              src={image}
              alt={`banner-${index + 1}`}
              className="w-full h-full relative"
              priority={index === 0}
            />
            <div
              className={`${
                mobile ? "text-center" : " pr-2"
              }`}
            >
              <HeroText title={sliderTitles[index]} />
            </div>
          </div>
        ))}
      </Slider>{" "}
      <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" />
    </div>
  );
};
export default HeroSection;
