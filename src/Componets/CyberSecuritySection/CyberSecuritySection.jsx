import React from "react";

const CyberSecuritySection = () => {
  return (
    <section className="py-30 bg-white overflow-hidden ">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-14">
        {/* ─────────── Illustration ─────────── */}
        <div className="relative flex-1">
          {/* Laptop outline */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            {/* top half circles (grey arcs) */}
            <svg
              className="absolute -top-20 -left-24 w-[500px] h-[300px]"
              viewBox="0 0 500 300"
              fill="none"
            >
              <path
                d="M0 300a250 250 0 01450 0"
                stroke="#e5e5e5"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M50 300a200 200 0 01350 0"
                stroke="#e5e5e5"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            {/* laptop body */}
            <div className="border-2 border-orange-500 rounded-[6px] h-[230px]" />

            {/* laptop bottom bar */}
            <div className="mt-2 h-[14px] rounded-b-[8px] border-2 border-orange-500 relative">
              <div className="absolute inset-x-1/3 top-[-2px] h-[4px] rounded-full bg-orange-500/30" />
            </div>

            {/* vertical stand with exclamation */}
            <div className="absolute -right-6 top-[40px] h-[190px] border-r-2 border-orange-500">
              <div className="absolute -left-[28px] top-[60px] w-0 h-0
                              border-l-[28px] border-l-transparent
                              border-r-[28px] border-r-transparent
                              border-b-[40px] border-b-orange-500/10
                              flex items-center justify-center">
                <span className="absolute bottom-1 text-orange-500 text-xl font-bold">
                  !
                </span>
              </div>
            </div>

            {/* Alert icons */}
            {[
              { top: 40, left: 70 },
              { top: 150, left: -60 },
              { bottom: -30, right: 50 },
            ].map((pos, idx) => (
              <div
                key={idx}
                className="absolute flex items-center justify-center w-[80px] h-[80px] rounded-full border-2 border-orange-500 bg-white"
                style={pos}
              >
                {/* bug / skull icon with emoji fallback */}
                <span className="text-orange-500 text-3xl leading-none">
                  {idx === 1 ? "💀" : "🐞"}
                </span>
              </div>
            ))}

            {/* black dot */}
            <div className="absolute -top-2 left-[160px] w-4 h-4 bg-neutral-800 rounded-full" />
          </div>
        </div>

        {/* ─────────── Text content ─────────── */}
        <div className="flex-1">
          <p className="uppercase text-sm tracking-widest text-orange-600 font-semibold mb-3">
            Safe&nbsp;&amp;&nbsp;Secure
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            We Take
            <br />
            Cybersecurity
            <br />
            Seriously<span className="text-orange-500">.</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed space-y-4">
            Thousands of websites get hacked every day, often leaving their
            owners unaware. That’s why we are so committed to website security,
            having started a dedicated web design company to ensure websites
            like yours are protected, especially in Singapore.
            <br />
            <br />
            With us, you can have peace of mind knowing that your website is
            safeguarded against downtime due to malicious activities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySection;
