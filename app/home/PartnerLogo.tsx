import Image from "next/image";
import React from "react";
import sponsor1Image from "@/public/images/1.png";
import sponsor2Image from "@/public/images/2.png";
import paymentMethod1Image from "@/public/images/3.png";
import paymentMethod2Image from "@/public/images/4.png";
import yourCompanyLogoImage from "@/public/images/5.png";
import developer1Image from "@/public/images/6.png";
import developer2Image from "@/public/images/7.png";

const PartnerLogosSection = () => {
  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-start items-center">
          {/* Sponsors' Logos */}
          <div className="flex items-center justify-center mx-4 my-2">
            <Image
              width={100}
              height={300}
              src={sponsor1Image}
              alt="Sponsor 1"
              className="h-8"
            />
          </div>{" "}
          {/* Developer Logos */}
          <div className="flex items-center justify-center mx-4 my-2">
            <Image
              width={100}
              height={300}
              src={sponsor2Image}
              alt="Sponsor 2"
              className="h-8"
            />
          </div>
          {/* Payment Method Icons */}
          <div className="flex items-center justify-center mx-4 my-2">
            <Image
              width={100}
              height={300}
              src={paymentMethod1Image}
              alt="Payment Method 1"
              className="h-8"
            />
          </div>{" "}
          {/* Developer Logos */}
          <div className="flex items-center justify-center mx-4 my-2">
            <Image
              width={100}
              height={300}
              src={paymentMethod2Image}
              alt="Payment Method 2"
              className="h-8"
            />
          </div>
          {/* Your Company Logo */}
          <div className="flex items-center justify-center mx-4 my-2">
            <Image
              width={100}
              height={300}
              src={yourCompanyLogoImage}
              alt="Your Company Logo"
              className="h-12"
            />
          </div>
          {/* Developer Logos */}
          <div className="flex items-center justify-center mx-4 my-2">
            <Image
              width={100}
              height={300}
              src={developer1Image}
              alt="Developer 1"
              className="h-8"
            />
          </div>{" "}
          {/* Developer Logos */}
          <div className="flex items-center justify-center mx-4 my-2">
            <Image
              width={100}
              height={300}
              src={developer2Image}
              alt="Developer 2"
              className="h-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;
