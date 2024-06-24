"use client"
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import aboutUs from "@/public/images/aboutus.jpg";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      {" "}
      <div className="container mx-auto">
        <div className="max-w-9xl mx-auto px-10">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-center mb-8"
          >
            About Aycee and Tee's Investments
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-gray-700 mb-6"
              >
                Aycee and Tee's Investments is a business that specializes in
                the mushroom industry. We grow and sell fresh, dried, and
                powdered mushrooms while also providing training in sustainable
                mushroom cultivation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-gray-700 mb-6"
              >
                We cater various audiences, including local buyers, commercial
                buyers, potential training participants, and investors.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-gray-700 mb-6"
              >
                We are committed to providing high-quality products and training
                services. Feel free to explore our website and contact us for
                any inquiries or collaborations.
              </motion.p>
            </div>{" "}
            <div>
              <Image
                src={aboutUs} // Replace with your contact image URL
                alt="About Us"
                width={500}
                height={300}
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
};

export default AboutUs;
