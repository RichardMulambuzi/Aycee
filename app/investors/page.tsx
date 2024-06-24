"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios"; // Import Axios

const InvestorsPage = () => {
  const handleSubmit = async (values: any) => {
    try {
      // Make the API request using Axios
      const response = await axios.post("/api/sendNotification", {
        type: "investment", // Indicate the type of message (e.g., "investment")
        data: values, // Include the form values as data
      });

      // Handle other actions or redirect the user
      console.log("Email notification sent successfully");
      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log("Form values:", values);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Investors</h1>
      <p className="text-gray-700 mb-4">
        Explore investment opportunities in sustainable mushroom cultivation.
        Are you an investor seeking a unique opportunity that combines
        sustainability, quality, and growth potential? Look no further than
        Aycee and Tees. Our business offers a compelling investment prospect
        with a range of benefits that make us stand out in the market.
      </p>
      <h1 className="text-4xl font-bold mb-4">Sustainable Excellence</h1>
      <p className="text-gray-700 mb-4">
        Investing in Aycee and Tees means investing in sustainable excellence.
        We are dedicated to environmentally responsible farming practices, which
        not only positions us as a responsible corporate citizen but as long
        term minded business. Our Commitment to sustainability is not just a
        trend; its a cornerstone of our business strategy.
      </p>
      <h1 className="text-4xl font-bold mb-4">Quality Assurance</h1>
      <p className="text-gray-700 mb-4">
        Quality is our brand's identity. we take pride in delivering top-tier
        mushrooms with impeccable taste and texture. Our emphasis on quality
        Assurance not only sets us apart in the marketplace but also fosters
        customer loyalty and repeat business. By investing in Aycee and Tees ,
        you're backing a business that consistently offers premium produce,
        resulting in a strong and growing customer base which is predicted to
        rise exponentially into the future.
      </p>
      <h1 className="text-4xl font-bold mb-4">Expanding Product Line</h1>
      <p className="text-gray-700 mb-4">
        Aycee and tees is not just about mushrooms; its about diversification
        and innovation. We are continuously expanding our product line to meet
        the ever-evolving demands of the market. This strategy provides
        investors with the promise of diversification and growth as we explore
        new avenues.
      </p>
      <h1 className="text-4xl font-bold mb-4">Market Potential</h1>
      <p className="text-gray-700 mb-4">
        The mushroom market is ripe for growth. With increasing interest in
        healthy eating, sustainable practices, and the unique flavours mushrooms
        bring to the table , we are positioned to tap into this pulsating
        market. our research and development efforts ensure we stay at the
        forefront of industry trends, presenting significant growth potential
        for investors.
      </p>{" "}
      <h1 className="text-4xl font-bold mb-4">Community Building</h1>
      <p className="text-gray-700 mb-4">
        We believe in the power of community investing in Aycee and Tee's means
        investing in a business that cultivates a dedicated community of
        mushroom enthusiast. Our commitment to nurturing this community offers a
        valuable support network that can enhance brand loyalty, customer
        retention, and market outreach.
      </p>{" "}
      <h1 className="text-4xl font-bold mb-4">Investors</h1>
      <p className="text-gray-700 mb-4">
        Dont miss out this remarkable opportunity to be a part of aycee and
        tees' success story. Our business is not just about mushrooms; its about
        a broader vision of sustainability, quality, and community. if you're an
        investor seeking to aligh your resource with a forward-thinking,
        eco-consious, and quality-driven business, we invite you to connect with
        us today.
      </p>{" "}
      <h1 className="text-4xl font-bold mb-4">Think out of the Box</h1>
      <p className="text-gray-700 mb-4">
        invest in Aycee and Tees and be a part of an exceptional journey where
        the magic of mushrooms meets sustainable growth.
      </p>
      <h1 className="text-4xl font-bold mb-4">
        Contact us now, this is the time to discuss how you can invest with us.
      </h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Investment Details</h2>
        <Formik
          className="max-w-md"
          initialValues={{
            name: "",
            email: "",
            phone: "",
            investmentAmount: "",
            message: "",
          }}
          validate={() => {
            const errors = {};

            // Add validation rules here

            return errors;
          }}
          onSubmit={handleSubmit}
        >
          <Form className="max-w-md">
            {/* ... (rest of the form fields) */}

            <div className="mb-4">
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="text-primary headerDiv transition py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-300 text-sm uppercase font-semibold"
              >
                Apply
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <div className="flex items-center mb-4">
          <FaPhone className="text-xl mr-2" />
          <p>+265 999 952 599</p>
          <p>+265 888 700 909</p>
        </div>
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-xl mr-2" />
          <p>Cecilia.Chalamanda@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default InvestorsPage;
