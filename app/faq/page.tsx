"use client"
import React, { useState } from "react";

const FAQPage = () => {
  const [userQuestion, setUserQuestion] = useState("");
  const [submittedQuestions, setSubmittedQuestions] = useState<string[]>([]);
  const [faq] = useState([
    {
      question: "How can I order mushrooms?",
      answer:
        'You can order mushrooms by visiting our "Order" page and selecting the products you want.',
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Airtel Money, mpamba, and bank account payments.",
    },
    {
      question: "How can I become an investor?",
      answer:
        'To become an investor, please visit our "Invest" page for more information.',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userQuestion.trim() !== "") {
      setSubmittedQuestions([...submittedQuestions, userQuestion]);
      setUserQuestion("");
    }
  };

  return (
    <section className="w-full h-full py-20">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>

        <div className="mb-6">
          {faq.map((item, index) => (
            <div key={index} className="mb-4">
              <button className="text-left text-blue-600 hover:underline">
                {item.question}
              </button>
              <p className="text-gray-700 mt-2">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Submit Your Question</h2>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              placeholder="Enter your question..."
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              className="w-full rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Submit
            </button>
          </form>
        </div>

        {submittedQuestions.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Submitted Questions</h2>
            <ul className="list-disc list-inside">
              {submittedQuestions.map((question, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {question}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQPage;
