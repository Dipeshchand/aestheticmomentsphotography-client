import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./page/Home";
import Gallery from "./page/Gallery";
import Portfolio from "./page/Portfolio";
import Films from "./page/Films";
import About from "./page/About";
import Contact from "./page/Contact";
import NotFound from "./page/NotFound";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/films" element={<Films />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}
