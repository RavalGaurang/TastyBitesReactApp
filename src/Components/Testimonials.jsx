import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Import required Swiper modules
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonialDetails = [
    {
      image: "assets/img/testimonials/testimonials-1.jpg",
      name: "Raval Gaurang",
      position: "Ceo & Founder",
      description:
        "Dining at TestyBites was an absolute delight! The flavors were exquisite, and every dish was crafted to perfection. The ambiance was cozy and inviting, making it the ideal place for a special meal. Highly recommended!",
    },
    {
      image: "assets/img/testimonials/testimonials-2.jpg",
      name: "Patel Divya",
      position: "Designer",
      description:
        "TestyBites is a food lover’s paradise! The service was top-notch, and the staff made us feel so welcome. From starters to desserts, everything was packed with flavor and beautifully presented. Can’t wait to come back!",
    },
    {
      image: "assets/img/testimonials/testimonials-3.jpg",
      name: "Raval Jagruti",
      position: "Store Owner",
      description:
        "The perfect blend of taste, quality, and atmosphere. TestyBites offers an unforgettable dining experience. The dishes were bursting with flavor, and the staff’s attention to detail was remarkable. My go-to spot for great food!",
    },
  ];

  return (
    <div>
      <section
        id="testimonials"
        className="testimonials section light-background"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>TESTIMONIALS</h2>
          <p>
            What Are They{" "}
            <span className="description-title">Saying About Us</span>
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper init-swiper">
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              speed={600}
              autoplay={{
                delay: 5000,
              }}
              slidesPerView="auto"
              pagination={{
                clickable: true,
              }}
            >
              {testimonialDetails.map((details, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            {details.description}
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>{details.name}</h3>
                          <h4>{details.position}</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img
                          src={details.image}
                          className="img-fluid testimonial-img"
                          alt="Saul Goodman"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
