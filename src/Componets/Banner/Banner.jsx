import React from "react";

const Banner = () => {
  return (
    <section className="bg-black py-20 text-white min-h-screen flex items-center px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <div className="mb-4">
            <span className="bg-orange-600 text-[10px] sm:text-xs px-3 py-1 rounded-full font-semibold inline-block">
              WEB DESIGN COMPANY IN SINGAPORE
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            We <span className="text-orange-500">Build</span> <br />
            Bespoke <br />
            Websites<span className="text-orange-500">.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-300 font-medium">
            We’re a web design and development company based in Singapore.
            Rest assured, your website is in good hands with us, from launch
            through to maintenance. You can count on us to deliver a{" "}
            <strong>meaningful, visually appealing, and secure</strong> website.
          </p>
        </div>

        {/* Right SVG Graphic Section */}
        <div className="flex justify-center items-center">
          <svg
            width="220"
            height="220"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-orange-500 animate-bounce"
          >
            <rect x="20" y="80" width="260" height="180" rx="10" stroke="orange" strokeWidth="2" />
            <rect x="40" y="100" width="220" height="140" rx="5" stroke="orange" strokeWidth="2" />
            <rect x="100" y="150" width="60" height="100" rx="5" stroke="orange" strokeWidth="2" />
            <line x1="110" y1="160" x2="150" y2="160" stroke="orange" strokeWidth="2" />
            <line x1="110" y1="170" x2="150" y2="170" stroke="orange" strokeWidth="2" />
            <circle cx="200" cy="70" r="40" stroke="orange" strokeWidth="2" />
            <circle cx="210" cy="60" r="3" fill="orange" />
            <circle cx="190" cy="80" r="3" fill="#333" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Banner;
