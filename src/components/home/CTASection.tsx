import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import FaqIllustration from "../../../src/assets/FAQ.jpg"; // Illustration image

const faqData = [
  {
    question: "What services does ARA Discover Marketing offer?",
    answer:
      "We provide digital marketing, web development, branding, social media management, and advertising solutions.",
  },
  {
    question: "How can social media marketing help my business?",
    answer:
      "Social media marketing helps you connect with potential customers, increase brand awareness, and drive conversions.",
  },
  {
    question: "Do you provide custom web development solutions?",
    answer:
      "Yes! We design tailor-made websites optimized for performance, user experience, and business growth.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      className="py-24 relative bg-white"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.6'%3E%3Ccircle cx='2' cy='2' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-primary text-gray-900 mb-16 text-center">
          Frequently Asked <br />
          <span className="text-brand-primary">Questions</span>
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-12 max-w-6xl mx-auto p-6 rounded-2xl">
          {/* Illustration */}
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src={FaqIllustration}
              alt="FAQ Illustration"
              className="w-4/5 md:w-full max-w-md rounded-xl"
            />
          </div>

          {/* FAQ Items */}
          <div className="md:w-1/2 w-full flex flex-col gap-6">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl shadow-sm bg-white"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-600" />
                    )}
                  </button>

                  <div
                    className={`px-5 pb-4 text-gray-700 text-base transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
