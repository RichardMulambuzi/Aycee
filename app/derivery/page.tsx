"use client"
import React, { useState } from "react";
import axios from "axios";

const DeliveriesPage = () => {
  const [pickupLocation, setPickupLocation] = useState<[number, number] | null>(
    null
  );
  const [deliveryOption, setDeliveryOption] = useState("pickup");
  const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);

  const handleLocationSelect = () => {
    const latitude = 40.7128; // Replace with actual latitude
    const longitude = -74.006; // Replace with actual longitude
    setPickupLocation([longitude, latitude]);
    setShowDeliveryOptions(true);
  };

  const handleDeliveryOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryOption(event.target.value);
  };

  const sendEmail = async (data: { pickupLocation: [number, number] | null; deliveryOption: string; }) => {
    try {
      const response = await axios.post("/api/sendNotification", {
        type: "delivery",
        data,
      });

      if (response.status === 200) {
        console.log("Email sent successfully");
        // Optionally, you can show a success message to the user
      } else {
        console.error("Email could not be sent");
        // Handle the case where the email could not be sent
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle the case where an error occurred during email sending
    }
  };

  const handleConfirmLocation = async () => {
    console.log("Selected Pickup Location: ", pickupLocation);
    console.log("Selected Delivery Option: ", deliveryOption);

    const data = {
      pickupLocation,
      deliveryOption,
    };

    await sendEmail(data);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Select Pickup Location</h1>
      <p className="text-gray-700 mb-4">
        Click on the map to select your pickup location.
      </p>

      <div
        className="map"
        style={{
          height: "400px",
          width: "100%",
          background: "#f0f0f0",
          position: "relative",
        }}
        onClick={handleLocationSelect}
      >
        {pickupLocation && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "#007bff",
            }}
          ></div>
        )}
      </div>

      {pickupLocation && showDeliveryOptions && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Selected Pickup Location</h2>
          <p className="text-gray-700">
            Latitude: {pickupLocation[1]}
            <br />
            Longitude: {pickupLocation[0]}
          </p>

          <h2 className="text-2xl font-bold mt-4">Select Delivery Option</h2>
          <div>
            <input
              type="radio"
              id="pickup"
              name="deliveryOption"
              value="pickup"
              checked={deliveryOption === "pickup"}
              onChange={handleDeliveryOptionChange}
            />
            <label htmlFor="pickup">Pickup</label>
          </div>
          <div>
            <input
              type="radio"
              id="door-to-door"
              name="deliveryOption"
              value="door-to-door"
              checked={deliveryOption === "door-to-door"}
              onChange={handleDeliveryOptionChange}
            />
            <label htmlFor="door-to-door">Door-to-Door</label>
          </div>

          <button
            className="bg-blue-500 text-white py-2 px-4 mt-4"
            onClick={handleConfirmLocation}
          >
            Confirm Location and Delivery Option
          </button>
        </div>
      )}
    </div>
  );
};

export default DeliveriesPage;
