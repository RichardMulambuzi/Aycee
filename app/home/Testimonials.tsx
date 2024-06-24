import React from "react";

// Define an array of testimonials
const testimonials = [
  {
    name: "John Phili",
    position: "Chef at a 5-star restaurant",
    comment:
      "I've been using Aycee and Tee's mushrooms for years, and they never disappoint. The freshness and quality are unmatched. Highly recommended!",
  },
  {
    name: "Jane Moyo",
    position: "Home Cook",
    comment:
      "As a home cook, I always rely on Aycee and Tee's mushrooms for my recipes. They're not only delicious but also delivered right to my doorstep. A must-try!",
  },
  {
    name: "Mike Katsabola",
    position: "Investor",
    comment:
      "I've invested in Aycee and Tee's sustainable agriculture initiatives, and it's been a rewarding experience. Their commitment to quality and sustainability is impressive.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100  py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg"
            >
              <p className=" mb-4">{testimonial.comment}</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-gray-600">{testimonial.position}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
