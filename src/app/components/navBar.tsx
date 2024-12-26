"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaBook, FaInfoCircle } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botão de hambúrguer */}
      <button
        className="absolute top-5 left-5 z-[1100] flex flex-col justify-between w-8 h-6 bg-transparent border-none cursor-pointer"
        onClick={toggleNavbar}
      >
        <div
          className={`w-8 h-1 bg-brand-500 transition-transform duration-300 ${isOpen ? " bg-brand-100 translate-y-[10px] rotate-45" : ""
            }`}
        ></div>
        <div
          className={`w-8 h-1  bg-brand-500 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""
            }`}
        ></div>
        <div
          className={`w-8 h-1  bg-brand-500 transition-transform duration-300 ${isOpen ? " bg-brand-100 -translate-y-[10px] -rotate-45" : ""
            }`}
        ></div>
      </button>

      {/* Overlay escuro quando o menu está aberto */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-[999]"
          onClick={toggleNavbar}
        ></div>
      )}

      {/* Navbar lateral */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-brand-700 shadow-lg z-[1000] pt-5 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <ul className="flex flex-col list-none p-0 m-0">
          {/* Primeiro item com estilo exclusivo */}
          <li className="mt-10">
            <Link
              href="/"
              className="flex items-center text-white font-bold p-4 text-lg hover:bg-brand-900"
            >
              <FaHome className="mr-2 text-xl" /> Home
            </Link>
          </li>
          {/* Confissão */}
          <li>
            <Link
              href="/commandments"
              className="flex items-center text-brand-300 p-4 text-lg hover:bg-brand-900 hover:text-white"
            >
              <FaBook className="mr-2 text-xl" /> Confissão
            </Link>
          </li>
          {/* Sobre Nós */}
          <li>
            <Link
              href="/about"
              className="flex items-center text-brand-300 p-4 text-lg hover:bg-brand-900 hover:text-white"
            >
              <FaInfoCircle className="mr-2 text-xl" /> Sobre nós
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
