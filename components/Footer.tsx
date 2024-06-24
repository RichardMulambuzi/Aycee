/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import NextLink from "next/link";
import React from "react";

interface Link {
  title: string;
  href: string;
}
const Footer = () => {
  const links: Link[] = [
    { title: "Shop Now", href: "/shop" },
    { title: "Get Skills", href: "/workshop" },
    { title: "Checkout Our Recipes", href: "/recipes" },
    { title: "Get Bulk Orders", href: "/bulk" },
    { title: "Invest with us", href: "/investors" },
  ];
    const privacyAndTermslinks: Link[] = [
      { title: "Privacy Policy", href: "/policy" },
      { title: "Terms Of Use", href: "/terms" }, 
      { title: "FAQ", href: "/faq" },
      { title: "Learn More", href: "/contact-us" },
    ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* About Us Column */}
        <FooterColumn title="Who We Are">
          <p>
            Aycee and Tee's Investments is your trusted source for fresh, dried,
            and powdered mushrooms. We also provide training on sustainable
            mushroom cultivation.
          </p>
          <p>
            Our mission is to promote sustainable agriculture and empower
            individuals to grow their own mushrooms.
          </p>
        </FooterColumn>
        {/* Navigation Column */}
        <FooterColumn title="Our Services">
          <FooterLinks links={links} />
        </FooterColumn>
        <FooterColumn title="Privacy and Terms">
          <FooterLinks links={privacyAndTermslinks} />
        </FooterColumn>
        {/* Contact Us Column */}
        <FooterColumn title="Contact Us">
          <p>Aycee and Tee's Investments</p>
          <p>Private Bag B411,</p>
          <p>Lilongwe, Malawi</p>
          <p>+265 999 952 599 / +265 888 700 909</p>
          <p>Lilongwe, Malawi</p>
        </FooterColumn>
      </div>
      <hr className="border-t border-gray-700 my-6" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Copyright Column */}
        <FooterColumn title="Copyright">
          <p className="text-gray-400">
            All Rights Reserved. &copy; {new Date().getFullYear()}
          </p>
        </FooterColumn>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => (
  <div className="col-span-1 md:col-span-2 lg:col-span-1 mb-4">
    <h3 className="text-xl font-semibold">{title}</h3>
    {children}
  </div>
);

interface FooterLinksProps {
  links: Link[];
}
const FooterLinks = ({ links }: FooterLinksProps) => (
  <ul className="list-disc pl-4">
    {links.map((link, index) => (
      <li key={index}>
        <NextLink href={link.href}>
          <div>{link.title}</div>
        </NextLink>
      </li>
    ))}
  </ul>
);
export default Footer;
