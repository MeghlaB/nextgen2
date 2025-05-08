import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    number: 1,
    title: "DISCOVER",
    points: [
      "Discover your business and customer needs",
      "Understand your brand’s value proposition",
      "Research current trends and competition",
    ],
  },
  {
    number: 2,
    title: "DESIGN",
    points: [
      "Propose information architecture",
      "Propose UX design concepts and wireframes",
      "Craft impactful copy",
      "Design illustrations, icons and mockups",
    ],
  },
  {
    number: 3,
    title: "DEVELOP",
    points: [
      "Develop your website based on best practices",
      "Develop CMS theme",
      "Develop page templates",
      "Optimise for high performance",
      "Optimise SEO & security",
    ],
  },
  {
    number: 4,
    title: "MAINTAIN & SECURE",
    points: [
      "Implement tracking codes",
      "Improve Google PageSpeed",
      "Maintain & edit website content",
      "Keep website safe and secure",
    ],
  },
];

const WebDesignSteps = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white relative py-16 px-6 lg:px-20 text-center overflow-hidden">
      {/* Right-side SVG Line Animation */}
      <div
        className="absolute top-0 right-0 z-0 "
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <svg
          width="300"
          height="150"
          viewBox="0 0 300 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100 C 100 0, 200 200, 300 100"
            stroke="#f97316"
            strokeWidth="3"
            fill="transparent"
          />
          <circle cx="0" cy="100" r="5" fill="#000000" />
          <circle cx="300" cy="100" r="5" fill="#000000" />
          <circle cx="150" cy="100" r="5" fill="#f97316" />
        </svg>
      </div>

      <p
        className="text-orange-500 font-semibold uppercase mb-2 tracking-wide relative z-10"
        data-aos="fade-up"
      >
        CO-CREATING PROCESS
      </p>
      <h2
        className="text-3xl md:text-4xl font-bold mb-12 leading-snug relative z-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Our Proven Web Design &<br className="hidden md:block" />
        Development Formula
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left relative z-10">
        {steps.map((step, index) => (
          <div key={step.number} data-aos="fade-up" data-aos-delay={200 + index * 100}>
            <div className="flex items-center gap-3 mb-5">
              <div className="border-2 border-orange-500 text-orange-500 font-bold px-3 py-1 rounded text-sm">
                {step.number}
              </div>
              <h3 className="font-bold uppercase text-sm">{step.title}   <span className="text-orange-600 justify-end">   -------</span></h3>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              {step.points.map((point, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebDesignSteps;
