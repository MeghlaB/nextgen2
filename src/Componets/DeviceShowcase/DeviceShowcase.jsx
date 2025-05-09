import React from "react";

const DeviceShowcase = () => {
  return (
    <div className="relative w-full bg-[#FFF8F5] overflow-hidden">
      {/* Text Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 py-12 px-6 z-10 relative">
        {/* Left Text */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-orange-600 text-lg font-semibold">RESPONSIVE</h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 py-5 leading-tight">
            Websites Responsiveness is Our Showcase
            <span className="text-orange-500">.</span>
          </h2>
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
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
              opacity: 0.3,
            }}
          ></div>
        ))}
      </div>

      {/* Devices */}
      <div className="relative flex flex-wrap justify-center items-end h-full gap-4 pb-10 z-10">
        {/* Mobile */}
        <div className="relative w-[100px] sm:w-[120px] h-[220px] sm:h-[250px] rounded-[30px] border-2 border-orange-500 bg-transparent z-30 animate-fadeInUp">
          <div className="w-[60%] h-[10px] rounded-b-xl bg-orange-300 mx-auto mt-2"></div>
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-6 bg-yellow-400 rotate-45"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          ></div>
        </div>

        {/* Tablet */}
        <div className="relative w-[150px] sm:w-[180px] h-[240px] sm:h-[280px] rounded-[20px] border-2 border-orange-400 bg-transparent z-20 animate-fadeInUp delay-[200ms]">
          <div className="absolute inset-4 border border-orange-300 rounded-[16px]"></div>
        </div>

        {/* Laptop/Desktop */}
        <div className="relative w-[200px] sm:w-[260px] h-[280px] sm:h-[320px] rounded-[16px] border-2 border-orange-500 bg-transparent z-10 animate-fadeInUp delay-[400ms]">
          <div className="absolute inset-4 border border-orange-300 rounded-[12px]"></div>
          <div className="absolute right-0 top-1/2 w-[12px] h-[30px] bg-orange-500 transform -translate-y-1/2 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default DeviceShowcase;
