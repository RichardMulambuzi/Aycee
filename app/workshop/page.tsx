/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
};

const workshopsData = [
  {
    id: 1,
    title: "Introduction to Mushroom Cultivation",
    description: "Learn the basics of mushroom cultivation.",
    date: "March 10, 2024",
    price: "K10,000",
  },
  {
    id: 2,
    title: "Intermediate Mushroom Cultivation",
    description: "Take your mushroom cultivation skills to the next level.",
    date: "March 17, 2024",
    price: "K25,000",
  },
  {
    id: 3,
    title: "Advanced Mushroom Cultivation",
    description: "Master advanced techniques in mushroom cultivation.",
    date: "March 14, 2024",
    price: "K57,000",
  },
];

const WorkshopPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">
        Mushroom Cultivation Workshops
      </h1>{" "}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-gray-600 mb-6"
      >
        At Aycee we're thrilled to offer you a unique opportunity to discover
        the secrets of mushroom cultivation through our exclusive training
        program. you will receive:
      </motion.p>{" "}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-gray-600 mb-6"
      >
        Expert guidance from the very best in the industry
      </motion.p>{" "}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-gray-600 mb-6"
      >
        Hands-on Experience to help you gain the practical skills necessary to
        grow a variety of mushrooms.
      </motion.p>{" "}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-gray-600 mb-6"
      >
        Entrepreneurial Opportunity as we teach you to turn new found expertise
        into a triving bussiness or a hoby that pays.
      </motion.p>{" "}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-gray-600 mb-6"
      >
        Mushroom cultivation is not just a skill; its a passion that can lead to
        a world of opportunities. whether you are new or an experienced
        cultivator, the training we provide will empower you with the knowledge
        and skills ypu need to succeed in thr captivating realm of mushrooms.
      </motion.p>
      <p className="text-lg mb-8">
        Explore our upcoming workshops and sign up for one that interests you!
      </p>
      {/* Workshop Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workshopsData.map((workshop) => (
          <div key={workshop.id} className="bg-white p-4 shadow-md">
            <h3 className="text-xl font-semibold">{workshop.title}</h3>
            <p className="text-gray-500">{workshop.description}</p>
            <p className="text-gray-700 mt-2">Date: {workshop.date}</p>
            <p className="text-green-600 font-semibold mt-2">
              Price: {workshop.price}
            </p>
            <a href="#" className="text-primary hover:underline mt-2 block">
              Learn More
            </a>
          </div>
        ))}
      </div>
      {/* Workshop Sign-up Form */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4">Sign Up for a Workshop</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className={`w-full border-gray-300 rounded-md p-2 border ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 mt-1">Name is required</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className={`w-full border-gray-300 rounded-md p-2 border ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-500 mt-1">Valid email is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="workshop"
              className="block font-semibold text-gray-700"
            >
              Select Workshop
            </label>
            <select
              id="workshop"
              name="workshop"
              className="form-select"
              required
            >
              <option value="" disabled>
                Choose a Workshop
              </option>
              {workshopsData.map((workshop) => (
                <option key={workshop.id} value={workshop.title}>
                  {workshop.title}
                </option>
              ))}
            </select>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-primary transition py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-300 text-sm uppercase font-semibold"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkshopPage;
