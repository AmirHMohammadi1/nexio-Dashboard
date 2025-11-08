"use client"
import { useState } from "react";
import Link from "next/link";
import IndexDropdown from "../Dropdowns/IndexDropdown";

interface NavbarProps {
  fixed?: boolean;
  transparent?: boolean;
}

export default function Navbar({ fixed = false, transparent = false }: NavbarProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <>
      <nav className={`${fixed ? "top-0 fixed" : ""} z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg ${
        transparent ? "bg-transparent" : "bg-white shadow"
      }`}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href="/"
              className={`text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase ${
                transparent ? "text-white" : "text-blueGray-700"
              }`}
            >
              Nexio Dashboard
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className={transparent ? "text-white fas fa-bars" : "fas fa-bars"}></i>
            </button>
          </div>
          <div
            className={
              "lg:flex grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link
                  className={`px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ${
                    transparent 
                      ? "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700" 
                      : "hover:text-blueGray-500 text-blueGray-700"
                  }`}
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar"
                  target="_blank"
                >
                  <i className={`far fa-file-alt text-lg leading-lg mr-2 ${
                    transparent ? "lg:text-blueGray-200 text-blueGray-400" : "text-blueGray-400"
                  }`} />{" "}
                  Docs
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              <li className="flex items-center">
                <Link
                  className={`px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ${
                    transparent 
                      ? "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700" 
                      : "hover:text-blueGray-500 text-blueGray-700"
                  }`}
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F"
                  target="_blank"
                >
                  <i className={`fab fa-facebook text-lg leading-lg ${
                    transparent ? "lg:text-blueGray-200 text-blueGray-400" : "text-blueGray-400"
                  }`} />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className={`px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ${
                    transparent 
                      ? "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700" 
                      : "hover:text-blueGray-500 text-blueGray-700"
                  }`}
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
                  target="_blank"
                >
                  <i className={`fab fa-twitter text-lg leading-lg ${
                    transparent ? "lg:text-blueGray-200 text-blueGray-400" : "text-blueGray-400"
                  }`} />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className={`px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ${
                    transparent 
                      ? "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700" 
                      : "hover:text-blueGray-500 text-blueGray-700"
                  }`}
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index-navbar"
                  target="_blank"
                >
                  <i className={`fab fa-github text-lg leading-lg ${
                    transparent ? "lg:text-blueGray-200 text-blueGray-400" : "text-blueGray-400"
                  }`} />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </Link>
              </li>

              <li className="flex items-center">
                <button
                  className={`text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 ${
                    transparent 
                      ? "bg-white text-blueGray-700 active:bg-blueGray-50" 
                      : "bg-blueGray-700 text-white active:bg-blueGray-600"
                  }`}
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}