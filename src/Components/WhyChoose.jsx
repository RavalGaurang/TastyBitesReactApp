import React from "react";
import { Link } from "react-router-dom";

const WhyChoose = () => {
  const reasons = [
    {
      icon: "bi bi-clipboard-data",
      title: "Farm-to-Table Ingredients",
      description:
        "We source our ingredients from trusted local farmers to ensure every dish is fresh and flavorful.",
    },
    {
      icon: "bi bi-gem",
      title: "Signature Dishes",
      description:
        "Our menu features a mix of classic recipes and innovative creations, prepared by expert chefs.",
    },
    {
      icon: "bi bi-inboxes",
      title: "Exceptional Service",
      description:
        "Our team is dedicated to ensuring that your dining experience exceeds expectations every time.",
    },
  ];

  return (
    <div>
      <section id="why-us" className="why-us section light-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div
                className="why-box"
                style={{
                  height: "389.83px",
                  alignContent: "center",
                  textAlign: "center",
                }}
              >
                <h3>Why Choose TastyBites</h3>
                <p>
                  At TastyBites, we combine flavors, creativity, and hospitality
                  to create a unique dining experience. Here's why you'll love
                  dining with us:
                </p>
                <div className="text-center">
                  <Link to="#" className="more-btn">
                    <span>Learn More</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
                {reasons.map((reason, index) => (
                  <div
                    className="col-xl-4"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 100}
                  >
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i className={reason.icon}></i>
                      <h4>{reason.title}</h4>
                      <p>{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
