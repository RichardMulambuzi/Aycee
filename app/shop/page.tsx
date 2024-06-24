"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { getProducts } from "@/helpers";
import { Products } from "@/type";
import Link from "next/link";
import ProductsData from "@/components/ProductsData";

function Shop() {
  const [products, setProducts] = useState<Products[] | null>(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getProducts();
        setProducts(response.productData);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    }

    fetchData();
  }, []);

  // Provide an initial empty array as the default value for displayedProducts
  const displayedProducts: Products[] = showAllProducts
    ? products || [] // If products is null or undefined, use an empty array
    : products?.slice(0, 8) || []; // If products is null or undefined, use an empty array

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Our Shop
        </h1>

        {products === null ? (
          <div className="flex items-center justify-center py-20">
            <div className="max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-y-5">
              <h2 className="text-4xl font-bold">Loading...</h2>
              <p className="text-base font-medium text-center">
                Please wait while we fetch products.
              </p>
            </div>
          </div>
        ) : products.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <div className="max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-y-5">
              <h2 className="text-4xl font-bold">Product Not Found</h2>
              <p className="text-base font-medium text-center">
                Oops! We couldn't find the product you were looking for. It
                appears that the page you are trying to access does not exist or
                may have been removed.
              </p>
              <Link
                href={"/"}
                className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold flex items-center justify-center hover:bg-orange-600 hover:text-white duration-200"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedProducts.map((item: Products) => (
                <Link href={`/product?id=${item._id}`} key={item._id}>
                  <ProductsData item={item} />
                </Link>
              ))}
            </div>
            {products.length > 8 && (
              <div className="flex justify-center mt-4">
                {showAllProducts ? (
                  <button
                    onClick={() => setShowAllProducts(false)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-200"
                  >
                    See Fewer
                  </button>
                ) : (
                  <button
                    onClick={() => setShowAllProducts(true)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-200"
                  >
                    See More
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Shop;
