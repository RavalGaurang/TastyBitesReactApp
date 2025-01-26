import React from "react";
import Hero from "../Components/Hero";
import About from "../Pages/About";
import Menu from "../Components/Menu";
import Testimonials from "../Components/Testimonials";
import Chefs from "../Components/Chefs";
import BookTable from "../Components/BookTable";
import Contact from "../Components/Contact";
import Event from "../Components/Event";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Event />
      <Chefs />
      <BookTable />
      <Contact />
    </div>
  );
};

export default Home;
