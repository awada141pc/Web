import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className="logo">
        <a href="#">Awada141</a>
      </div>
      {/* Mobile menu */}
      <ul className="mnav">
        <li className="navlist">
          <a href="/">Home</a>
        </li>
        <li className="navlist">
          <a href="/tloi">TLOI</a>
        </li>
        <li className="navlist">
          <a href="http://">TTW</a>
        </li>
        <li className="navlist">
          <a href="/login">Login</a>
        </li>
      </ul>
      <div className="md:hidden">
        <i
          className="bx bx-menu block text-4xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
      </div>
      <div
        className={`absolute z-[1] md:hidden top-16 left-0 w-full bg-linear-to-r/oklab  from-[#c5b358] to-[#BDB76B] flex flex-col items-center gap-6 transform transition-transform font-bold py-5 ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transtion: "transform0.3s ease, opacity 0.3s ease" }}
      >
        <li className="list-none w-full text-center p-4 hover:bg-[#b5a642] transition-all cursor-pointer">
          <a href="/"> Home</a>
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-[#b5a642] transition-all cursor-pointer">
          <a href="/tloi">TLOI</a>
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-[#b5a642] transition-all cursor-pointer">
          TTW
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-[#b5a642] transition-all cursor-pointer">
          <a href="/login">Login</a>
        </li>
      </div>
    </div>
  );
};
export default Navbar;
