import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function ClientTestimonial() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/public/testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="container mx-auto py-6 text-white h-[600px]">
      <div className="text-center space-y-3">
        <h1 className="text-orange-500 text-2xl font-bold">Testimonials</h1>
        <div>
          <h1 className="text-2xl font-bold">
            What Our Client Say <span className="text-orange-500">.</span>
          </h1>
        </div>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <h1 className="border text-white px-8 py-2 rounded-2xl text-2xl border-amber-700">
                {review.brand}
              </h1>
              <p className="py-8">{review.feedback}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
              <p className="">{review.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientTestimonial;
