"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="fixed top-0 z-20 flex flex-col md:flex-row w-full items-center justify-between xl:px-0 px-5 xl:justify-center xl:gap-96 border-b border-[#d6d6d6] bg-white py-4 text-black">
        <Link href="/">
          <img alt="Logo" src="/logo.png" className="w-64" />
        </Link>
        <ul className="flex gap-10 md:gap-14 font-light text-sm mt-5 md:mt-0 relative md:tracking-wide text-[#001F3D]">
          <li className="opacity-60 hover:opacity-100">
            <Link href="/nosotros">Nosotros</Link>
          </li>
          <li
            className="cursor-pointer opacity-60 hover:opacity-100"
            onClick={handleClick}
          >
            Servicios
          </li>

          <ul
            className={
              open
                ? "flex flex-col gap-2 absolute left-[50px] md:right-[150px] border-primary  bg-white py-2 px-4 top-[35px] md:top-[50px]"
                : "hidden"
            }
          >
            <Link
              onClick={() => setOpen(false)}
              className="hover:scale-105"
              href="/nuevas-construcciones"
            >
              Nuevas construcciones
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className="hover:scale-105"
              href="/remodelaciones"
            >
              Remodelaciones
            </Link>
          </ul>
          <li className="opacity-60 hover:opacity-100">
            <Link href="/casas">Casas</Link>
          </li>
          <li className="opacity-60 hover:opacity-100">
            <Link href="/contacto">Contactanos</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
