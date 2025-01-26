import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Import modules directly
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Event = () => {
  const events = [
    {
      title: "Custom Parties",
      price: "$99",
      description:
        "Host unique events with personalized décor and bespoke services.",
      image: "../assets/img/events-1.jpg",
    },
    {
      title: "Private Parties",
      price: "$289",
      description:
        "Enjoy exclusive gatherings with dedicated spaces and top-notch amenities.",
      image: "../assets/img/events-2.jpg",
    },
    {
      title: "Birthday Parties",
      price: "$499",
      description:
        "Celebrate with customized menus and engaging entertainment.",
      image: "../assets/img/events-3.jpg",
    },
    {
      title: "Wedding Parties",
      price: "$899",
      description:
        "TastyBites offers exceptional wedding catering services. fore more details contact us",
      image: "../assets/img/events-4.jpg",
    },
  ];

  return (
    <section id="events" className="events section">
      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          speed={600}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 1 },
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide
              key={index}
              className="event-item d-flex flex-column justify-content-end"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <h3>{event.title}</h3>
              <div className="price align-self-start">{event.price}</div>
              <p className="description">{event.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Event;
