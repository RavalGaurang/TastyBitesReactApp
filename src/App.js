import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import About from "./Pages/About";
import Menu from "./Components/Menu";
import Nopage from "./Pages/Nopage";
import Chefs from "./Components/Chefs";
import Contact from "./Components/Contact";
import Event from "./Components/Event";
import BookTable from "./Components/BookTable";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/event" element={<Event />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booktable" element={<BookTable />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
