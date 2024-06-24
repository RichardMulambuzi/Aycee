import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import type { Metadata } from "next";
import React from "react";
import "slick-carousel/slick/slick.css";
export const metadata: Metadata = {
  title: "Aycee and Tee's Investments - Mushrooms, Workshops, and More",
  description:
    "Aycee and Tee's Investments is a leading provider of fresh, dried, and powdered mushrooms, as well as mushroom cultivation workshops. We are committed to sustainable agriculture and helping our customers grow their own mushrooms.",
  keywords:
    "mushrooms, mushroom cultivation, mushroom workshops, sustainable agriculture, Aycee and Tee's Investments",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-bodyFont w-full bg-main-bg text-darkText">
        <Layout>
          {" "}
          <Navbar />
          {children}
          {/* <h1>Aycee and tees coming soon</h1> */}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
export default React.memo(RootLayout);
