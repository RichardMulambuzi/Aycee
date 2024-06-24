"use client";
import React, { useState } from "react";
const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server or display a thank you message
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <div className="mb-4">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full p-2 border rounded-md resize-none"
          rows={4}
          required
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="text-primary  headerDiv transition py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-300 text-sm uppercase font-semibold"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
