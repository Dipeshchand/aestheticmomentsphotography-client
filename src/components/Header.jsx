// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="fixed top-0 left-0 w-full z-50 px-10 py-5 flex justify-between items-center bg-white/10 backdrop-blur-lg">
       
//   <h1 className="text-3xl font-serif font-bold">
//     <Link to="/">Aesthetic Moments</Link>
//   </h1>

//   <ul className="flex gap-8 font-normal">
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/gallery">Gallery</Link></li>
//     <li><Link to="/portfolio">Portfolio</Link></li>
//     <li><Link to="/films">Films</Link></li>
//     <li><Link to="/about">About</Link></li>
//     <li><Link to="/contact">Contact</Link></li>
//   </ul>

// </header>

//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 rounded-3 py-4 flex justify-between items-center bg-white/10 backdrop-blur-lg">
      
      {/* Logo */}
      <h1 className="text-2xl md:text-3xl font-serif  ">
        {/* <Link to="/">Aesthetic Moments</Link>
         */}
         <span style={{fontFamily:"Session"}}>
          Aesthetic Moments
         </span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex  gap-8 font-normal">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/films">Films</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/privacy-policy">Privacy / Policy</Link></li>
      </ul>

      {/* Hamburger Button */}
      <button 
        className="md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <div 
  className={`absolute md:hidden top-full left-0 w-full 
  bg-white/90 backdrop-blur-lg 
  transition-all duration-300 overflow-hidden 
  rounded-b-2xl
  ${open ? "max-h-96 py-4" : "max-h-0"}`}
>
  <ul className="flex flex-row justify-center items-center gap-4 font-medium">
    <li><Link onClick={() => setOpen(false)} to="/">Home</Link></li>
    <li><Link onClick={() => setOpen(false)} to="/gallery">Gallery</Link></li>
    <li><Link onClick={() => setOpen(false)} to="/portfolio">Portfolio</Link></li>
    <li><Link onClick={() => setOpen(false)} to="/films">Films</Link></li>
    <li><Link onClick={() => setOpen(false)} to="/about">About</Link></li>
    <li><Link onClick={() => setOpen(false)} to="/policyprivacy">Policy/Privacy</Link></li>
  </ul>
</div>


    </header>
  );
}
