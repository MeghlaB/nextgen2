import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GreatWebsiteSection = () => {
  return (
    <section className="bg-white py-20 text-center relative overflow-hidden">
      {/* Title */}
      <h5 className="text-orange-500 font-semibold uppercase mb-2 tracking-wide">
        Great Websites
      </h5>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        What Makes a Great Website<span className="text-orange-500">.</span>
      </h2>

      {/* Browser Mockup */}
      <div className="mt-16 relative max-w-4xl mx-auto px-4">
        <div className="border border-orange-200 rounded-lg py-10 px-6 md:px-10 relative h-[400px]">
          {/* Browser Window */}
          <div className="absolute -top-4 left-6 flex gap-2 ">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>

          <div className="grid gap-3 text-left text-gray-300">
            <div className="w-3/5 h-4 bg-gray-200 rounded-sm"></div>
            <div className="w-4/5 h-4 bg-gray-200 rounded-sm"></div>
            <div className="w-2/5 h-4 bg-gray-200 rounded-sm"></div>
          </div>

          {/* Top Page Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute -left-20 top-10 bg-orange-500 text-white rounded-md p-4 w-64 shadow-lg mt-30 h-[200px] "
          >
            <h4 className="font-semibold mb-2">Top Page</h4>
            <ul className="text-sm space-y-1">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <li key={num} className="flex justify-between items-center">
                  <span className="w-2/5 h-2 bg-white rounded-sm"></span>
                  <span className="w-2/5 h-2 bg-black rounded-sm"></span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Traffic Analytic Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute -right-20 top-10 bg-orange-500 text-white rounded-md p-4 w-64 shadow-lg mt-30 h-[200px]"
          >
            <h4 className="font-semibold mb-2">Traffic Analytic</h4>
            <div className="w-full h-24 bg-orange-400 relative rounded-sm overflow-hidden">
              <div className="absolute bottom-2 left-2 w-5/6 h-0.5 bg-white"></div>
              <div className="absolute top-4 left-2 w-4/6 h-0.5 bg-white"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10/12 h-1 bg-black transform rotate-12"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Features */}
     <div>
     <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left px-4 text-sm md:text-base font-medium text-gray-800">
        <div className="flex items-start gap-2">
          <span className="text-orange-500 font-bold border border-orange-600 px-3 py-1 ">1</span> Loads Fast
        </div>
        <div className="flex items-start gap-2">
          <span className="text-orange-500 font-bold border border-orange-600 px-3 py-1">2</span> Updated with
          latest information
        </div>
        <div className="flex items-start gap-2">
          <span className="text-orange-500 font-bold border border-orange-600 px-3 py-1">3</span> Safe and secure
        </div>
        <div className="flex items-start gap-2">
          <span className="text-orange-500 font-bold border  border-orange-600 px-3 py-1">4</span> Organised with a
          good structure
        </div>
        <div className="flex items-start gap-2">
          <span className="text-orange-500 font-bold border border-orange-600 px-3 py-1">5</span> Easy to navigate
        </div>
        <div className="flex items-start gap-2">
          <span className="text-orange-500 font-bold border border-orange-600 px-3 py-1">6</span> Optimised for search engines
        </div>
        <div>
        
      </div>
      </div>
      <div className="w-[300px] mx-auto my-4 bg-orange-600 text-white  rounded-2xl">
        <div className="border border-orange-500 px-4 py-2 rounded-xl">
          <Link
            to=""
            className="text-xl transition-all duration-300"
          >
            Build Your Website Today
          </Link>
        </div>
        </div>
     </div>
    
    
    </section>
  );
};

export default GreatWebsiteSection;
