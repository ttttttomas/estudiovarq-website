"use client";
import Link from "next/link";
import { useState,useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        setHidden(true); // hacia abajo
      } else {
        setHidden(false); // hacia arriba
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
    // Por ejemplo, si el ancho es menor a 768px, lo consideramos mobile
    setIsDragging(window.innerWidth >= 768);
  };

  handleResize(); // Ejecutar al montar
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
  }, [])
  
  const handleClick = () => {
    setOpen(!open);
  };
  return (
      <header className={`absolute top-0 z-20 flex flex-col md:flex-row w-full items-center justify-between xl:px-0 px-5 xl:justify-center xl:gap-96 border-b border-[#d6d6d6] transition-transform duration-500 bg-white py-4 text-black ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
        <Link href="/">
          <img alt="Logo" src="/logo.png" className="w-64" />
        </Link>
        <ul className="flex gap-8 md:gap-14 font-light text-md md:text-[17px] mt-5 md:mt-0 relative md:tracking-wide text-primary">
          <li>
            <Link className="hover:opacity-50 transition-all" href="/nosotros">Nosotros</Link>
          </li>
          <li className="cursor-pointer hover:opacity-50 transition-all" onClick={handleClick} onMouseEnter={handleClick}>
            Servicios
          </li>
          <ul
            onMouseLeave={handleClick}
            className={
              open
                ? "flex transition-all flex-col gap-2 absolute left-[50px] md:right-[150px] border-primary  bg-white py-2 px-4 top-[35px] md:top-[50px]"
                : "hidden transition-all"
            }
          >
            <Link
              onClick={() => setOpen(false)}
              className="hover:scale-105 transition-all"
              href="/nuevas-construcciones"
            >
              Nuevas construcciones
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className="hover:scale-105 transition-all"
              href="/remodelaciones"
            >
              Remodelaciones
            </Link>
          </ul>
          <li>
            <Link className="hover:opacity-50 transition-all" href="/casas">Casas</Link>
          </li>
          <li>
            <Link className="hover:opacity-50 transition-all" href="/contacto">Contactanos</Link>
          </li>
        </ul>
      </header>
  );
}
