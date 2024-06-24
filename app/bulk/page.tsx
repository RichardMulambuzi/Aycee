"use client"
import React, { useState } from "react";

interface BulkOrderProps {}

const BulkOrder: React.FC<BulkOrderProps> = () => {
  const [bulkOrder, setBulkOrder] = useState({
    product: "fresh",
    quantity: 1,
    deliveryMethod: "pickup",
    deliveryLocation: "",
  });

  // Define an index signature for productPrices
  const productPrices: { [key: string]: number } = {
    fresh: 10,
    dried: 8,
    powder: 12,
  };

  const handleCalculateTotal = (): string => {
    const { product, quantity } = bulkOrder;

    // Use the indexed property to get the price
    const total = productPrices[product] * quantity;

    return `K${total.toFixed(2)}`;
  };

  const handleBulkOrder = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Bulk order button clicked.");
    console.log("Bulk Order Data:", bulkOrder);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setBulkOrder({
      ...bulkOrder,
      [name]: type === "number" ? parseInt(value) : value,
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Bulk Ordering</h1>
      <form onSubmit={handleBulkOrder}>
        <div className="mb-4">
          <label
            htmlFor="product"
            className="block font-semibold text-gray-700"
          >
            Product
          </label>
          <select
            id="product"
            name="product"
            value={bulkOrder.product}
            onChange={handleInputChange}
            className="form-input"
          >
            <option value="fresh">Fresh Mushrooms</option>
            <option value="dried">Dried Mushrooms</option>
            <option value="powder">Mushroom Powder</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block font-semibold text-gray-700"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={bulkOrder.quantity}
            onChange={handleInputChange}
            min="1"
            className="form-input"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="total" className="block font-semibold text-gray-700">
            Total Price
          </label>
          <input
            type="text"
            id="total"
            name="total"
            value={handleCalculateTotal()}
            readOnly
            className="form-input"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-gray-700">
            Delivery Method
          </label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                id="pickup"
                name="deliveryMethod"
                value="pickup"
                checked={bulkOrder.deliveryMethod === "pickup"}
                onChange={handleInputChange}
                className="form-radio"
              />
              <span className="ml-2">Pickup</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                id="door-to-door"
                name="deliveryMethod"
                value="door-to-door"
                checked={bulkOrder.deliveryMethod === "door-to-door"}
                onChange={handleInputChange}
                className="form-radio"
              />
              <span className="ml-2">Door-to-Door</span>
            </label>
          </div>
        </div>

        {bulkOrder.deliveryMethod === "door-to-door" && (
          <div className="mb-4">
            <label
              htmlFor="deliveryLocation"
              className="block font-semibold text-gray-700"
            >
              Delivery Location
            </label>
            <input
              type="text"
              id="deliveryLocation"
              name="deliveryLocation"
              value={bulkOrder.deliveryLocation}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
        )}

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 mt-4">
          Place Bulk Order
        </button>
      </form>
    </div>
  );
};

export default BulkOrder;
