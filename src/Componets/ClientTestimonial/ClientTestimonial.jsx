import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";

function ClientTestimonial() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/public/testimonial.json')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      });
  }, []);

  return (
    <div className='container mx-auto py-6 text-white h-[600px]'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews.map(review => (
            <SwiperSlide key={review.id}>
              <div className="flex flex-col items-center mx-24 my-16">
                <p className="py-8">{review.feedback}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

export default ClientTestimonial;
 