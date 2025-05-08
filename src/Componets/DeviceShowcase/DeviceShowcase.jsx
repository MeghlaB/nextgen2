// DeviceShowcase.js
import React from "react";

const DeviceShowcase = () => {
  return (
    <div className="relative w-full  bg-[#FFF8F5] overflow-hidden">
      {/* Text Section */}
      <div className="max-w-5xl mx-auto flex gap-8 py-12 px-6">
        <div className="w-1/2">
          <h1 className="text-2xl font-bold text-orange-600">RESPONSIVE</h1>
          <h2 className="text-5xl font-bold mb-4 py-5 leading-tight">
            Websites Responsiveness is Our Showcase
            <span className="text-orange-500">.</span>
          </h2>
        </div>
        <div className="w-1/2 space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            Today, having a responsive website is essential, as you never know which
            devices your customers might be using.
          </p>
          <p>
            Whether it’s for mobile, tablet, or desktop, we specialize in building
            high-performance websites that load quickly across all devices.
          </p>
          <p>
            Our web design company is also deeply committed to data-driven decisions
            and user experience, ensuring your website effectively serves your customers
            in Singapore and beyond.
          </p>
        </div>
      </div>

      {/* Wavy Lines Animation */}
      <div className="absolute inset-0 animate-float pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full border-t border-orange-100"
            style={{
              top: `${i * 60}px`,
              transform: `skewY(-5deg)`,
              opacity: 10,
            }}
          ></div>
        ))}
      </div>

      {/* Devices */}
      <div className="relative flex justify-center items-end h-full space-x-6 pb-10">
        {/* Mobile */}
        <div className="relative w-[120px] h-[250px] rounded-[30px] border-2 border-orange-500 bg-transparent z-30 animate-fadeInUp">
          <div className="w-[60%] h-[10px] rounded-b-xl bg-orange-300 mx-auto mt-2"></div>
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-6 bg-yellow-400 rotate-45"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          ></div>
        </div>

        {/* Tablet */}
        <div className="relative w-[180px] h-[280px] rounded-[20px] border-2 border-orange-400 bg-transparent z-20 animate-fadeInUp delay-[200ms]">
          <div className="absolute inset-4 border border-orange-300 rounded-[16px]"></div>
        </div>

        {/* Laptop/Desktop */}
        <div className="relative w-[260px] h-[320px] rounded-[16px] border-2 border-orange-500 bg-transparent z-10 animate-fadeInUp delay-[400ms]">
          <div className="absolute inset-4 border border-orange-300 rounded-[12px]"></div>
          <div className="absolute right-0 top-1/2 w-[12px] h-[30px] bg-orange-500 transform -translate-y-1/2 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default DeviceShowcase;
