import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  // State to track the active menu heading
  const [activeTab, setActiveTab] = useState("Starters");

  const starters = [
    {
      image: "assets/img/menu/menu-item-1.png",
      itemName: "Fried Tofu",
      description: "Fried tofu with vegetables",
      price: "$5.95",
    },
    {
      image: "assets/img/menu/menu-item-2.png",
      itemName: "Vietnamese Spring Rolls",
      description: "Vietnamese spring rolls with dipping sauce",
      price: "$14.95",
    },
    {
      image: "assets/img/menu/menu-item-3.png",
      itemName: "Green Papaya Salad",
      description: "Spicy papaya salad with crab",
      price: "$8.95",
    },
    {
      image: "assets/img/menu/menu-item-4.png",
      itemName: "Greek Salad",
      description: "A salad with feta cheese, olives, red onion, and walnuts",
      price: "$12.95",
    },
    {
      image: "assets/img/menu/menu-item-5.png",
      itemName: "Japanese Beef",
      description:
        "Grilled beef served with a teriyaki sauce. The beef is served with a side of sauteed vegetables.",
      price: "$12.95",
    },
    {
      image: "assets/img/menu/menu-item-6.png",
      itemName: "Vegan Poke Bowl",
      description: " A vegan bowl with noodles, vegetables, and avocado",
      price: "$9.95",
    },
  ];

  const breakFast = [
    {
      image: "assets/img/menu/breakfast/breakfast1.jpeg",
      itemName: "Parotha",
      description:
        "A flatbread made from layered dough that is cooked on a griddle.",
      price: "$5.95",
    },
    {
      image: "assets/img/menu/breakfast/breakfast2.jpeg",
      itemName: "Idli",
      description:
        "A steamed rice cake that is a popular breakfast food in South India.",
      price: "$14.95",
    },
    {
      image: "assets/img/menu/breakfast/breakfast3.jpeg",
      itemName: "dhosa",
      description:
        "A thin, crispy crepe made from a fermented batter of rice and lentils.",
      price: "$8.95",
    },
    {
      image: "assets/img/menu/breakfast/breakfast4.jpeg",
      itemName: "Poha",
      description:
        "A popular Indian breakfast dish made with flattened rice flakes.",
      price: "$12.95",
    },
    {
      image: "assets/img/menu/breakfast/breakfast5.jpeg",
      itemName: "Chole Bhature",
      description:
        "A popular North Indian dish consisting of chickpeas cooked in a spicy gravy served with fried bread.",
      price: "$12.95",
    },
    {
      image: "assets/img/menu/breakfast/breakfast6.jpeg",
      itemName: "Upma",
      description:
        "A South Indian breakfast dish made with semolina, vegetables, and spices.",
      price: "$9.95",
    },
  ];

  const lunch = [
    {
      image: "assets/img/menu/menu-item-1.png",
      itemName: "Magnam Tiste",
      description: "Lorem, deren, trataro, filede, nerada",
      price: "$5.95",
    },
    {
      image: "assets/img/menu/menu-item-2.png",
      itemName: "Aut Luia",
      description: "Lorem, deren, trataro, filede, nerada",
      price: "$14.95",
    },
    {
      image: "assets/img/menu/menu-item-3.png",
      itemName: "Est Eligendi",
      description: "Lorem, deren, trataro, filede, nerada",
      price: "$8.95",
    },
    {
      image: "assets/img/menu/menu-item-4.png",
      itemName: "Eos Luibusdam",
      description: "Lorem, deren, trataro, filede, nerada",
      price: "$12.95",
    },
    {
      image: "assets/img/menu/menu-item-5.png",
      itemName: "Eos Luibusdam",
      description: "Lorem, deren, trataro, filede, nerada",
      price: "$12.95",
    },
    {
      image: "assets/img/menu/menu-item-6.png",
      itemName: "Eos Luibusdam",
      description: "Lorem, deren, trataro, filede, nerada",
      price: "$9.95",
    },
  ];

  const dinner = [
    {
      image: "assets/img/menu/menu-item-1.png",
      itemName: "Magnam Tiste",
      description: "Lorem, deren, trataro, filede, nerada",
      price: "$5.95",
    },
    {
      image: "assets/img/menu/menu-item-2.png",
      itemName: "Aut Luia",
      description: "Lorem, deren, trataro, filede, nerada",
      price: "$14.95",
    },
    {
      image: "assets/img/menu/menu-item-3.png",
      itemName: "Est Eligendi",
      description: "Lorem, deren, trataro, filede, nerada",
      price: "$8.95",
    },
    {
      image: "assets/img/menu/menu-item-4.png",
      itemName: "Eos Luibusdam",
      description: "Lorem, deren, trataro, filede, nerada",
      price: "$12.95",
    },
    {
      image: "assets/img/menu/menu-item-5.png",
      itemName: "Eos Luibusdam",
      description: "Lorem, deren, trataro, filede, nerada",
      price: "$12.95",
    },
    {
      image: "assets/img/menu/menu-item-6.png",
      itemName: "Eos Luibusdam",
      description: "Lorem, deren, trataro, filede, nerada",
      price: "$9.95",
    },
  ];

  // Combine all menu items into one array for "All"
  const allItems = [...starters, ...breakFast, ...lunch, ...dinner];

  // Content for different tabs
  const content = {
    All: (
      <div className="row gy-5">
        {allItems.map((item, index) => (
          <div className="col-lg-4 menu-item" key={index}>
            <img
              src={item.image}
              className="menu-img img-fluid"
              alt={item.itemName}
            />
            <h4>{item.itemName}</h4>
            <p className="ingredients">{item.description}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    ),
    Starters: (
      <div className="row gy-5">
        {starters.map((starter, index) => (
          <div className="col-lg-4 menu-item" key={index}>
            <img
              src={starter.image}
              className="menu-img img-fluid"
              alt={starter.itemName}
            />
            <h4>{starter.itemName}</h4>
            <p className="ingredients">{starter.description}</p>
            <p className="price">{starter.price}</p>
          </div>
        ))}
      </div>
    ),
    Breakfast: (
      <div className="row gy-5">
        {breakFast.map((breakFast, index) => (
          <div className="col-lg-4 menu-item" key={index}>
            <img
              src={breakFast.image}
              className="menu-img img-fluid"
              alt={breakFast.itemName}
              style={{ borderRadius: "50px" }}
            />
            <h4>{breakFast.itemName}</h4>
            <p className="ingredients">{breakFast.description}</p>
            <p className="price">{breakFast.price}</p>
          </div>
        ))}
      </div>
    ),
    Lunch: (
      <div className="row gy-5">
        {lunch.map((lunch, index) => (
          <div className="col-lg-4 menu-item" key={index}>
            <img
              src={lunch.image}
              className="menu-img img-fluid"
              alt={lunch.itemName}
            />
            <h4>{lunch.itemName}</h4>
            <p className="ingredients">{lunch.description}</p>
            <p className="price">{lunch.price}</p>
          </div>
        ))}
      </div>
    ),
    Dinner: (
      <div className="row gy-5">
        {dinner.map((dinner, index) => (
          <div className="col-lg-4 menu-item" key={index}>
            <img
              src={dinner.image}
              className="menu-img img-fluid"
              alt={dinner.itemName}
            />
            <h4>{dinner.itemName}</h4>
            <p className="ingredients">{dinner.description}</p>
            <p className="price">{dinner.price}</p>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <div>
      <section id="menu" className="menu section mt-xl-0">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Menu</h2>
          <p>
            <span>Check Our</span>{" "}
            <span className="description-title">TastyBites Menu</span>
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="container" data-aos="fade-up">
          <ul
            className="nav nav-tabs d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {["Starters", "Breakfast", "Lunch", "Dinner","All"].map((tab) => (
              <li className="nav-item" key={tab}>
                <Link
                  className={`nav-link ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  <h4>{tab}</h4>
                </Link>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div
            className="tab-content mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="tab-pane active show">
              <div className="tab-header text-center">
                <p>Menu</p>
                <h3>{activeTab}</h3> {/* Dynamic heading */}
              </div>
              {content[activeTab]} {/* Dynamic content */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
