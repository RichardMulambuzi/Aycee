/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutUsImage from "@/public/images/aboutus.jpg";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          <div className="md:w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-gray-600 mb-6"
            >
              At Aycee and Tees, our passion for mushrooms goes far beyond the
              farm; its deeply rooted in our commitment to sustainable farming
              and the pursuit of excellence in every harvest. Founded with a
              vision to cultivate the finest quality mushrooms while nurturing
              the environment, we are not just a business but a dedicated
              community. Aycee and Tee's Investments is a passionate advocate
              for sustainable agriculture, specifically in mushroom farming. We
              specialize in providing high-quality fresh, dried, and powdered
              mushrooms to local buyers, commercial buyers, and offer training
              workshops for mushroom cultivation.
            </motion.p>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-8"
            >
              Sustainable farming
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-600 mb-6"
            >
              Our journey began with a simple yet profound belief:sustainable
              farming is not just an opinion; its a responsibility.We have taken
              it upon ourselves to integrate eco-friendly practices into every
              stage of our operations.From optimal land use to responsible
              resource management, we are committed to leaving a positive mark on
              the planet Our mission is to promote sustainable agriculture
              practices and empower individuals with the knowledge and skills to
              grow their own mushrooms. Whether you are a local buyer, a
              business, or someone interested in sustainable agriculture, you
              are in the right place.
            </motion.p>{" "}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-8"
            >
              Quality at its core
            </motion.h1>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-700 mb-6"
            >
              Quality is the cornerstone of our identity. Our team of skiled
              cultivators and dedicated farmers meticuloudly tend to each
              mushroom, ensuring they receive the utmost care and attention,
              resuilting in the finest quality produce. At Aycee and Tee's
              Investments, we believe in quality, sustainability, and
              innovation. Our team is committed to delivering the best products
              to our customers.
            </motion.p>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-lg text-gray-700"
            >
              Our journey is not one we undertake alone. We are committed to
              building a close0-knit community of mushroom enthusiast. we
              believe in sharing the joys of mushroom cultivation with all who
              share our passion.
            </motion.p>
            <motion.p
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              At Aycee and Tees, we invite you to be a part of our ever-growing
              family, to experience the wonders of sustainable farming, and to
              savor he unmatched quality of our mushrooms. Together, we are
              redefining what it means to be a mushroom - producing business,
              elevating it ti higher calling- a mission to cherish , protect and
              celebrate the essence of mushrooms.
            </motion.p>
            <motion.p
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/shop">
                <button className="text-primary headerDiv transition py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-300 text-sm uppercase font-semibold">
                  Explore Our Products
                </button>
              </Link>
            </motion.p>
          </div>
          <motion.div
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="w-full h-auto rounded-md shadow-md"
          >
            <Image
              src={aboutUsImage} // Replace with your contact image URL
              alt="Contact Us"
              width={600}
              height={400} // Adjust the height as needed
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
