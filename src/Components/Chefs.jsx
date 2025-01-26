import React from "react";
import { Link } from "react-router-dom";

const Chefs = () => {
  const ChefsDetails = [
    {
      image: "../assets/img/chefs/chefs-1.jpg",
      name: "Walter White",
      position: "Master Chef",
      description:
        "With a rich history in the culinary arts, Walter brings a blend of tradition and innovation to our kitchen.",
    },
    {
      image: "../assets/img/chefs/chefs-2.jpg",
      name: "Sarah Jhonson",
      position: "Patissier",
      description:
        "Sarah's passion for pastries adds a sweet touch to our menu, delighting guests with her creations.",
    },
    {
      image: "../assets/img/chefs/chefs-3.jpg",
      name: "William Anderson",
      position: "Cook",
      description:
        "William's expertise in crafting flavorful dishes ensures every meal is a memorable experience.",
    },
  ];
  return (
    <div>
      <section id="chefs" className="chefs section">
        <div className="container section-title" data-aos="fade-up">
          <h2>chefs</h2>
          <p>
            <span>Our</span>{" "}
            <span className="description-title">
              Proffesional Chefs
              <br />
            </span>
          </p>
        </div>

        <div className="container">
          <div className="row gy-5">
            {ChefsDetails.map((details, index) => (
              <div
                className="col-lg-4 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
                key={index}
              >
                <div className="team-member">
                  <div className="member-img">
                    <img src={details.image} className="img-fluid" alt="" />
                    <div className="social">
                      <Link to="#">
                        <i className="bi bi-twitter-x"></i>
                      </Link>
                      <Link to="#">
                        <i className="bi bi-facebook"></i>
                      </Link>
                      <Link to="#">
                        <i className="bi bi-instagram"></i>
                      </Link>
                      <Link to="#">
                        <i className="bi bi-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{details.name}</h4>
                    <span>{details.position}</span>
                    <p>{details.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chefs;
