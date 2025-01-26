import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div>
      <section id="hero" className="hero section light-background">
        <div className="container">
          <div className="row gy-4 justify-content-center justify-content-lg-between">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                Enjoy Your Healthy
                <br />
                Delicious Food
              </h1>
              <br />
              <p data-aos="fade-up" data-aos-delay="100">
                "Savor the Flavor, One Bite at a Time!"
              </p>
              <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <Link to="/booktable" className="btn-get-started">
                  Booka a Table
                </Link>

                <button
                  type="button"
                  // className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ border: "transparent" }}
                >
                  <Link
                    className="glightbox btn-watch-video d-flex align-items-center"
                  >
                    <i className="bi bi-play-circle"></i>
                    <span>Watch Video</span>
                  </Link>
                </button>
              </div>
            </div>
            <div
              className="col-lg-5 order-1 order-lg-2 hero-img d-flex justify-content-center"
              data-aos="zoom-out"
            >
              <img
                src="assets/img/hero-img.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* <!-- Modal for video --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <Link
                    to="/"
                    className="logo d-flex align-items-center me-auto me-xl-0"
                  >
                    <h3 className="sitename" style={{ fontWeight: "800" }}>
                      TastyBites
                    </h3>
                    <span>.</span>
                  </Link>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <video
                  src="../assets/video/video2.mp4"
                  autoPlay
                  loop
                  muted // Optional: To mute the video (since auto-play often requires muted)
                  width="100%"
                  height="320px"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
