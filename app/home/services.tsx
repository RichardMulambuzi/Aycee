import React from "react";
import Image from "next/image";
import product1Image from "@/public/images/product4.jpg";
import product2Image from "@/public/images/workshop.jpg";
import product3Image from "@/public/images/powder.jpg";
import product4Image from "@/public/images/powder1.jpg";
import product5Image from "@/public/images/product6.jpg";

const services = [
  {
    title: "Fresh Mushrooms",
    description:
      "High-quality, farm-fresh mushrooms ready for your culinary adventures.",
    imageUrl: product1Image, // Use the imported image
  },
  {
    title: "Mushroom Workshops",
    description:
      "Learn mushroom cultivation techniques from experts in our workshops.",
    imageUrl: product2Image, // Use the imported image
  },
  {
    title: "Mushroom Powder",
    description:
      "Transform mushrooms into convenient and delicious powdered form.",
    imageUrl: product3Image, // Use the imported image
  },
  {
    title: "Recipes",
    description:
      "Discover delightful mushroom recipes for your cooking inspiration.",
    imageUrl: product4Image, // Use the imported image
  },
  {
    title: "Investments",
    description:
      "Explore investment opportunities in sustainable agriculture with us.",
    imageUrl: product5Image, // Use the imported image
  },
];

const Section1 = () => {
  return (
    <section className="bg-gray-100 py-17">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white  w-full h-full rounded-lg p-4 shadow-md"
            >
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={700}
                height={400}
                className="w-full h-90 object-cover group-hover:scale-110 duration-200 rounded-t-lg"
              />

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
