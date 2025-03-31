// import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";


import Benefit1 from "../assets/car 1.jpg";
import Benefit2 from "../assets/car 1-1.jpg";
import Benefit3 from "../assets/car 1-2.jpg";
import Benefit4 from "../assets/car 1-3.jpg";
import Benefit5 from "../assets/car 2.jpeg";
import Benefit6 from "../assets/car 2-1.jpg";
import Benefit7 from "../assets/car 2-3.jpeg";
import Benefit8 from "../assets/car 2-4.jpg";
import Benefit9 from "../assets/car 2-5.jpg";

const images = [Benefit1, Benefit2, Benefit3, Benefit4, Benefit5, Benefit6, Benefit7, Benefit8, Benefit9];

export default function Hero() {
  return (
    <div className="hero h-fit mb-20 bg-gradient-to-b from-blue-800 via-blue-600 to-blue-900 text-white py-16">
      <div className="hero-content grid md:grid-cols-2 sm:gap-10 items-center px-8 max-w-6xl mx-auto">
        <div>
          <h1 className="text-6xl font-extrabold leading-tight">
            Your Dream Car, <span className="text-black">Your Adventure.</span> <br />
            <span className="text-white">No Ownership? No Problem!</span>
          </h1>
          <p className="py-6 text-lg text-black">
            Imagine cruising in your dream car—feeling the power, the luxury, the thrill.  
            At <span className="font-bold text-purple-400">Enuma Car Rental Services</span>, we make that dream <span className="font-bold">real. </span> 
            No hefty price tags, no long-term commitments—just <span className="font-bold">affordable, seamless rentals</span> tailored for you.
          </p>
          <p className="text-md text-white italic">
            Whether it's a business trip, a weekend getaway, or a joyride in the car you’ve always wanted,  
            we’ve got you covered.
          </p>
          <Link to="/register">
            <button className="mt-4 text-lg bg-blue-500 hover:bg-blue-500 text-black px-6 py-3 rounded-lg shadow-xl transition-all duration-300 font-semibold 
                animate-pulse ring-2 ring-blue-500 hover:ring-blue-500">
              Start Your Journey 🚗💨
            </button>
          </Link>
        </div>
        
        {/* Swiper slideshow */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="custom-swiper max-w-sm rounded-lg shadow-2xl"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="custom-swiper-slide">
              <img src={image} className="w-full h-auto rounded-lg" alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}