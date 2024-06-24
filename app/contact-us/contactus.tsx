"use client";
import React from "react";
import contactUs from "@/public/images/contectus.jpg";
import Image from "next/image";
import ContactUsForm from "@/components/ContactUsForm";
const ContactUs= () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <ContactUsForm />
          </div>
          <div>
            <Image
              src={contactUs} // Replace with your contact image URL
              alt="Contact Us"
              width={500}
              height={300}
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
