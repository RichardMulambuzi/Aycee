"use client";
import React from "react";
import BusinessDiscussion from "../pages/business-discussion";
import ContactUs from "./contactus";
const ContactUsPage = () => {
  return (
    <section className="py-16 bg-gray-100">
      <ContactUs/>
        <BusinessDiscussion/>
    </section>
  );
};

export default ContactUsPage;
