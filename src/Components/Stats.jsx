import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  const statsData = [
    { 
      value: 1500, 
      description: "Satisfied Customers" 
    },
    { 
      value: 300, 
      description: "Dishes Served" 
    },
    { 
      value: 25, 
      description: "Years of Excellence" 
    },
    { 
      value: 50, 
      description: "Team Members" 
    },
  ];

  return (
    <div>
      <section id="stats" className="stats section dark-background mb-5">
        <img
          src="assets/img/stats-bg.jpg"
          alt="Stats Background"
          data-aos="fade-in"
        />

        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row gy-4">
            {statsData.map((stat, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="stats-item text-center w-100 h-100">
                  <p style={{ fontSize: "45px", color: "white" }}>
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2} // Animation duration in seconds
                      suffix={"+"}
                      enableScrollSpy // Triggers when the element scrolls into view
                      scrollSpyOnce // Animates only once
                  />
                  </p>
                  <p>{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
