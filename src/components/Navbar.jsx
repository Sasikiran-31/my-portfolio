import React from "react";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 backdrop-blur-lg bg-base-100/60 shadow-sm border-b border-white/10">
      <div className="flex-1">
        <a
          href="#"
          className="btn btn-ghost text-xl font-black tracking-tighter"
        >
          <span className="text-success"></span>PORTFOLIO
        </a>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden sm:flex font-semibold">
          <li>
            <a href="#about" className="hover:text-info transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </li>
        </ul>
        <div className="dropdown dropdown-end sm:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
