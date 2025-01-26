import React from "react";
import AutoPlayVideo from "./AutoPlayVideo";

const LearnMore = () => {
  return (
    <div>
      <section
        id="about"
        className="about section animate__animate
    d "
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>About Us</h2>
          <p>
            <span>Learn More </span>
            <span className="description-title">About Us</span>
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
              <img
                src="../assets/img/about.jpg"
                className="img-fluid mb-4"
                alt="About Us Overview"
              />
              <div className="book-Link-table">
                <h3>Book Link Table</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="250">
              <div className="content ps-0 ps-lg-5">
                <p className="fst-italic">
                  We strive to deliver the best services for our customers,
                  ensuring quality and reliability.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Dedicated customer service and support.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Commitment to innovation and excellence.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Sustainable and eco-friendly practices.
                  </li>
                </ul>
                <p>
                  Join us on our journey to make a difference. Your satisfaction
                  is our priority!
                </p>

                <div className="position-relative mt-4">
                  <AutoPlayVideo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
