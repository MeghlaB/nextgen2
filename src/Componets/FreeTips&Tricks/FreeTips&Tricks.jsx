import { motion } from "framer-motion";

const FreeTips_Tricks = () => {
  return (
    <section className="bg-[#FFF6F1] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#001e36] text-white p-8 rounded-xl shadow-lg flex flex-col justify-center items-center text-center"
        >
          {/* Replace with your actual image if needed */}
          <div className="text-green-400 text-5xl font-bold mb-2">12</div>
          <p className="font-semibold text-lg leading-snug mb-6">
            WordPress Website <br />
            Maintenance Checklist. <br />
            12 Must-Do Tasks.
          </p>
          {/* Icon and visual illustration */}
          <div className="mt-4">
        
          </div>
        </motion.div>

        {/* Right: Text & Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-orange-500 font-semibold uppercase text-sm mb-2">
            Free Tips & Tricks
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            WordPress Website <br />
            Maintenance Checklist. <br />
            <span className="text-gray-800">
              12 must-do tasks<span className="text-orange-500">.</span>
            </span>
          </h2>
          <p className="text-gray-700 mb-4">
            If you are looking to protect your website, consider doing this every
            week. Prepare your website for the world of critical hacking issues.
          </p>
          <p className="text-gray-800 mb-6 font-medium">
            Get this eBook now before your competitors do!
          </p>

          {/* Form */}
          <form className="space-y-4 max-w-md">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Work Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition"
            >
              Download
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeTips_Tricks;
