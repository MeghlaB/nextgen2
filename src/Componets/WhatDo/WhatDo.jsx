import { motion } from "framer-motion";
import { FaCode, FaWordpress, FaRocket, FaLock } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-orange-500 text-4xl" />,
    title: "Design & Development",
    desc: "Web design and web development for your custom website requirements.",
    link: "Design a new website",
  },
  {
    icon: <FaWordpress className="text-orange-500 text-4xl" />,
    title: "WordPress & Website",
    desc: "WordPress, Webflow or WooCommerce design & development services.",
    link: "Webflow service",
  },
  {
    icon: <FaRocket className="text-orange-500 text-4xl" />,
    title: "Convert & Optimise",
    desc: "Optimise your website performance and enhance Google PageSpeed score.",
    link: "Improve my conversion",
  },
  {
    icon: <FaLock className="text-orange-500 text-4xl" />,
    title: "Website Maintenance",
    desc: "Maintain your website content and ensure your website is safe and secure.",
    link: "Maintain my site",
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 relative overflow-hidden">
      <h4 className="text-sm uppercase text-gray-400 font-semibold mb-2">What We Do</h4>
      <h2 className="text-4xl md:text-5xl font-bold mb-12 max-w-4xl leading-tight">
        A Web Design & Development Company That Builds & Develops Successful Websites
        <span className="text-orange-500">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {services.map((item, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-xl hover:shadow-lg transition duration-300 border border-gray-800">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
            <span className="text-orange-500 font-semibold cursor-pointer hover:underline">{item.link}</span>
          </div>
        ))}
      </div>

      {/* Animated Circle on Right */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute right-[-100px] top-[-100px] w-[500px] h-[500px] border-[10px] border-orange-500 rounded-full opacity-30 pointer-events-none"
      ></motion.div>

      {/* Inner Circle */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute right-[-50px] top-[50px] w-[250px] h-[250px] border-[6px] border-orange-400 rounded-full opacity-30 pointer-events-none"
      ></motion.div>
    </section>
  );
}
